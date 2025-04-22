"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Modal({ isOpen, onClose, title, children }) {
  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">{title}</h3>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
