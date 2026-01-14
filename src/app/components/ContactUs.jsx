"use client";
import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto">
        <div className="max-w-11/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                Have questions about your next adventure? Our travel experts are
                here to help you plan the perfect trip.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mirpur,
                      <br />
                      Dhaka, Bangladesh 1212
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400">
                      hello@safor-travels.com
                      <br />
                      support@safor-travels.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semiboldmb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +880 1234 567 890
                      <br />
                      Mon - Fri, 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" p-8 md:p-10 rounded-3xl shadow-xl border border-gray-300"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300  focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300  focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300  focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300  focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your dream trip..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full py-4 px-6 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
