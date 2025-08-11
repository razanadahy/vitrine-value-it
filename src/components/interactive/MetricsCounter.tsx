"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface MetricsCounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

function AnimatedNumber({ 
  value, 
  suffix = "", 
  prefix = "", 
  className = "" 
}: MetricsCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
  const isInView = useInView(nodeRef, { once: true, margin: "0px 0px -200px 0px" })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(formatNumber(Math.floor(latest)))
    })
  }, [springValue])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toLocaleString()
  }

  return (
    <motion.span
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  )
}

interface MetricCardProps {
  title: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
  icon?: React.ReactNode
  delay?: number
}

export function MetricCard({
  title,
  value,
  suffix,
  prefix,
  description,
  icon,
  delay = 0
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          {title}
        </h3>
        {icon && <div className="text-blue-500">{icon}</div>}
      </div>
      <div className="mb-2">
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          className="text-3xl lg:text-4xl font-bold text-gray-900"
        />
      </div>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </motion.div>
  )
}

interface MetricsGridProps {
  metrics: {
    title: string
    value: number
    suffix?: string
    prefix?: string
    description?: string
    icon?: React.ReactNode
  }[]
}

export default function MetricsCounter({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          suffix={metric.suffix}
          prefix={metric.prefix}
          description={metric.description}
          icon={metric.icon}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}