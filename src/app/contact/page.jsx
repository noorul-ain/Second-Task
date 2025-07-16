"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen  pb-12">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-100 flex items-center justify-start mb-12 overflow-hidden">
        <img
          src="/contactBanner.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div
          className="relative z-20 text-left max-w-4xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-white text-lg md:text-xl font-medium mb-2 opacity-80">
            Contact Us
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
            Get Helps & Friendly Support
          </h1>
        </motion.div>
      </section>
      {/* Contact Form Card */}
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-lg font-semibold mb-6 text-gray-900">
          Fillup The Form
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1 text-gray-800"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 text-base text-gray-900"
                placeholder="Name"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1 text-gray-800"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 text-base text-gray-900"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1 text-gray-800"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 text-base text-gray-900"
              placeholder="Subject"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1 text-gray-800"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 text-base text-gray-900 resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base shadow-sm"
            >
              Submit Request
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
