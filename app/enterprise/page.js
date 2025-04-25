"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronDown, ChevronUp, Users, Shield, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Enterprise() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("blockchain")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "blockchain",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields")
      return
    }

    // Simulate form submission
    setFormError(null)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setFormSubmitted(true)
    }, 1500)
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const services = [
    {
      id: "blockchain",
      title: "Private Blockchain",
      description: "Custom private blockchain solutions for your enterprise with enhanced security and scalability.",
      features: [
        "Permissioned blockchain networks",
        "Custom consensus mechanisms",
        "Enterprise-grade security",
        "Scalable architecture",
        "Integration with existing systems",
      ],
      icon: <Shield size={24} />,
    },
    {
      id: "smart-contracts",
      title: "Smart Contract Auditing",
      description: "Comprehensive security audits for your smart contracts to prevent vulnerabilities.",
      features: [
        "Static and dynamic analysis",
        "Formal verification",
        "Gas optimization",
        "Security best practices",
        "Detailed audit reports",
      ],
      icon: <Code size={24} />,
    },
    {
      id: "integration",
      title: "Web3 Integration",
      description: "Seamlessly integrate blockchain technology into your existing enterprise systems.",
      features: [
        "API development",
        "Legacy system integration",
        "Data migration",
        "Custom middleware",
        "Continuous support",
      ],
      icon: <ArrowRight size={24} />,
    },
    {
      id: "training",
      title: "Enterprise Training",
      description: "Comprehensive training programs to bring your team up to speed with blockchain technology.",
      features: [
        "Customized curriculum",
        "Hands-on workshops",
        "Technical documentation",
        "Knowledge transfer",
        "Ongoing support",
      ],
      icon: <Users size={24} />,
    },
  ]

  const faqs = [
    {
      question: "How can blockchain benefit my enterprise?",
      answer:
        "Blockchain can provide your enterprise with enhanced security, transparency, and efficiency. It can streamline processes, reduce costs, eliminate intermediaries, and create immutable audit trails. Our solutions are tailored to address specific business challenges while leveraging the unique advantages of blockchain technology.",
    },
  ]

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Enterprise Solutions</h1>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`flex items-center justify-between w-full p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 ${activeTab === service.id ? "bg-gray-100" : "bg-white"}`}
                    onClick={() => setActiveTab(service.id)}
                  >
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <span className="text-lg font-medium">{service.title}</span>
                    </div>
                    <ArrowRight size={20} />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              {services.map(
                (service) =>
                  activeTab === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="list-disc list-inside text-gray-600 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              {formSubmitted ? (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline"> Your form has been submitted successfully.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && <div className="text-red-500">{formError}</div>}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-md shadow-sm">
                    <button
                      className="flex items-center justify-between w-full p-4 bg-white rounded-md hover:shadow-md transition-shadow duration-200"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-4 bg-gray-50 rounded-md"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
