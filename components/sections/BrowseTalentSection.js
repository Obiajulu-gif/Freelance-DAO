"use client"

import { motion } from "framer-motion"
import CategoryCard from "../CategoryCard"
import FadeInWhenVisible from "../FadeInWhenVisible"

export default function BrowseTalentSection({ categories, openCategoryModal }) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Browse talent by category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find skilled professionals in every area of Web3 development and blockchain technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FadeInWhenVisible key={category.id} delay={index * 0.1}>
              <CategoryCard category={category} onClick={() => openCategoryModal(category)} />
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 text-primary border border-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            View All Categories
          </motion.button>
        </div>
      </div>
    </section>
  )
}
