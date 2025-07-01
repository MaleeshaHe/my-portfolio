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
    <section id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            I'm currently seeking internship and entry-level opportunities in
            software development. Let's connect and discuss how I can contribute
            to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light text-white mb-8">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
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
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your opportunity or project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-light text-white mb-8">
              Get in touch
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always excited to discuss new opportunities and connect with
              fellow developers, potential employers, and anyone interested in
              collaborating on exciting projects.
            </p>

            {/* Contact Links */}
            <div className="space-y-6">
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
                  className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg hover:border-[#2a2a2a] hover:bg-[#1a1a1a] transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-medium">
                      {contact.name}
                    </div>
                    <div className="text-white text-sm">{contact.display}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 p-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-400 font-medium">
                    Location
                  </div>
                  <div className="text-white text-sm">Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
