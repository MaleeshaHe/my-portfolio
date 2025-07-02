"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    name: "Email",
    href: "mailto:maleesha77he@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    display: "maleesha77he@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+94778236207",
    icon: <Phone className="w-5 h-5" />,
    display: "+94 77 823 6207",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/MaleeshaHe",
    icon: <Linkedin className="w-5 h-5" />,
    display: "linkedin.com/in/MaleeshaHe",
  },
  {
    name: "GitHub",
    href: "https://github.com/MaleeshaHe",
    icon: <Github className="w-5 h-5" />,
    display: "github.com/MaleeshaHe",
  },
  {
    name: "Portfolio",
    href: "https://maleeshaherath.me",
    icon: <ExternalLink className="w-5 h-5" />,
    display: "maleeshaherath.me",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            I&apos;m currently seeking internship and entry-level opportunities
            in software development. Let&apos;s connect and discuss how I can
            contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your opportunity or project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-black rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 lg:pl-4">
            <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">
              Get in touch
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              I&apos;m always excited to discuss new opportunities and connect
              with fellow developers, potential employers, and anyone interested
              in collaborating on exciting projects.
            </p>

            {/* Contact Links */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg hover:border-[#2a2a2a] hover:bg-[#1a1a1a] transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">
                      {contact.name}
                    </div>
                    <div className="text-white text-sm sm:text-base truncate">
                      {contact.display}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    Location
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    Sri Lanka
                  </div>
                </div>
              </div>
            </div>

            {/* Freelance Availability */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-[#FF4533]/10 to-[#FF4533]/5 border border-[#FF4533]/20 rounded-lg">
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Freelance Availability
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  Available for freelance projects and custom development work
                </p>
                <a
                  href="https://www.fiverr.com/maleeshahe?public_mode=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FF4533] hover:bg-[#E63E2E] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25"
                >
                  <span>Hire Me on Fiverr</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
