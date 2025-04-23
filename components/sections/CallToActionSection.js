"use client"

import { motion } from "framer-motion"

export default function CallToActionSection({ setIsJobModalOpen, setIsSignupModalOpen }) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to revolutionize how you work in Web3?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of freelancers and clients already using FreeLance DAO to connect, collaborate, and create
            the future of work.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setIsJobModalOpen(true)}
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Post a Job
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsSignupModalOpen(true)}
              className="bg-transparent text-white border-2 border-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Find Work
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
