"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const successMessageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `TastyNest - ${formData.subject}`,
          message: `${formData.message}\n\n---\nThis email was sent via TastyNest contact form.`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Scroll to success message after a short delay to ensure it's rendered
        setTimeout(() => {
          successMessageRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions about recipes, suggestions for improvements, or just want to say hello, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                       <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                         {submitStatus === "success" && (
                           <div ref={successMessageRef} className="mb-6 p-4 bg-green-100 border border-green-300 rounded-xl text-green-700">Message sent successfully! We'll get back to you soon.
                           </div>
                         )}
                         
                         {submitStatus === "error" && (
                           <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-xl text-red-700">Failed to send message. Please try again.
                           </div>
                         )}

                         <form onSubmit={handleSubmit} className="space-y-6">
                           <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                             <input
                               type="text"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}
                               required
                               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                               placeholder="John Doe"
                             />
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                             <input
                               type="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               required
                               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                               placeholder="john@example.com"
                             />
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                             <div className="relative group" ref={dropdownRef}>
                               <button
                                 type="button"
                                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                 className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white cursor-pointer hover:border-gray-400 text-left flex items-center justify-between"
                               >
                                 <span className="text-gray-700">{formData.subject || "Select a subject"}</span>
                                 <div className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} absolute right-3`}>
                                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                   </svg>
                                 </div>
                               </button>
                               
                               {isDropdownOpen && (
                                 <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                   <div className="py-2">
                                     <button
                                       type="button"
                                       onClick={() => {
                                         setFormData({...formData, subject: "General Inquiry"});
                                         setIsDropdownOpen(false);
                                       }}
                                       className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                                         formData.subject === "General Inquiry" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                                       }`}
                                     >
                                       General Inquiry
                                     </button>
                                     <button
                                       type="button"
                                       onClick={() => {
                                         setFormData({...formData, subject: "Recipe Suggestion"});
                                         setIsDropdownOpen(false);
                                       }}
                                       className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                                         formData.subject === "Recipe Suggestion" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                                       }`}
                                     >
                                       Recipe Suggestion
                                     </button>
                                     <button
                                       type="button"
                                       onClick={() => {
                                         setFormData({...formData, subject: "Technical Support"});
                                         setIsDropdownOpen(false);
                                       }}
                                       className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                                         formData.subject === "Technical Support" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                                       }`}
                                     >
                                       Technical Support
                                     </button>
                                     <button
                                       type="button"
                                       onClick={() => {
                                         setFormData({...formData, subject: "Partnership"});
                                         setIsDropdownOpen(false);
                                       }}
                                       className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                                         formData.subject === "Partnership" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                                       }`}
                                     >
                                       Partnership
                                     </button>
                                     <button
                                       type="button"
                                       onClick={() => {
                                         setFormData({...formData, subject: "Feedback"});
                                         setIsDropdownOpen(false);
                                       }}
                                       className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                                         formData.subject === "Feedback" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                                       }`}
                                     >
                                       Feedback
                                     </button>
                                   </div>
                                 </div>
                               )}
                             </div>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                             <textarea
                               name="message"
                               value={formData.message}
                               onChange={handleChange}
                               required
                               rows={6}
                               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                               placeholder="Tell us how we can help you..."
                             ></textarea>
                           </div>
                           <button
                             type="submit"
                             disabled={isSubmitting}
                             className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                           >
                             {isSubmitting ? "Sending..." : "Send Message"}
                           </button>
                         </form>
                       </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-2">Send us an email anytime</p>
                        <a href="mailto:contact@tastynest.com" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                          contact@tastynest.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                        <p className="text-gray-600 mb-2">Chat with our support team</p>
                        <span className="text-gray-900 font-semibold">Available 24/7</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
                        <p className="text-gray-600 mb-2">We typically respond within</p>
                        <span className="text-gray-900 font-semibold">24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
