"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  suffix?: string
  className?: string
}

export default function AnimatedNumber({
  value,
  suffix = "",
  className = ""
}: AnimatedNumberProps) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (value >= 1000000) {
        setDisplayValue((latest / 1000000).toFixed(1) + "M")
      } else if (value >= 1000) {
        setDisplayValue((latest / 1000).toFixed(0) + "K")
      } else if (value % 1 !== 0) {
        // For decimal numbers
        setDisplayValue(latest.toFixed(1))
      } else {
        setDisplayValue(Math.floor(latest).toLocaleString())
      }
    })

    return unsubscribe
  }, [springValue, value])

  return (
    <motion.div
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {displayValue}{suffix}
    </motion.div>
  )
}