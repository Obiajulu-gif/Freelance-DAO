"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TypewriterText({
  words,
  className = "",
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        // If deleting
        if (isDeleting) {
          setCurrentText(word.substring(0, currentText.length - 1))

          // If deleted completely, start typing the next word
          if (currentText.length === 1) {
            setIsDeleting(false)
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
          }
        }
        // If typing
        else {
          setCurrentText(word.substring(0, currentText.length + 1))

          // If typed completely, wait and then start deleting
          if (currentText.length === word.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span key={currentText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block ml-0.5 w-0.5 h-5 bg-current"
      />
    </span>
  )
}
