"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import StatCard from "../StatCard"

export default function StatsSection() {
  const stats = [
    {
      value: 10000,
      label: "Freelancers",
      prefix: "",
      suffix: "+",
      icon: "👩‍💻",
    },
    {
      value: 5000,
      label: "Completed Projects",
      prefix: "",
      suffix: "+",
      icon: "✅",
    },
    {
      value: 10,
      label: "Paid Out",
      prefix: "$",
      suffix: "M+",
      icon: "💰",
    },
    {
      value: 50,
      label: "Countries",
      prefix: "",
      suffix: "+",
      icon: "🌎",
    },
  ]

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            FreeLance DAO in Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our platform is growing rapidly, connecting talent with opportunity across the Web3 ecosystem
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} animate={inView} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
