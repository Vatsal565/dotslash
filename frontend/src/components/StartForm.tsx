
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   User,
//   MessageCircle,
//   Star,
//   MessageSquare,
// } from "lucide-react";

// const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//   };

// const StartForm = () => {
//   return (
//     <div>
//       <motion.div
//               variants={fadeIn}
//               initial="initial"
//               whileInView="whileInView"
//               className="bg-white rounded-xl p-8 border border-gray-100">
//               <div className="flex items-center gap-2 mb-6">
//                 <MessageCircle className="w-6 h-6 text-orange-500" />
//                 <h2 className="text-2xl font-bold">Send Us a Message</h2>
//               </div>

//               <form  className="space-y-6">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-gray-700 font-medium">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
//                                focus:outline-none focus:ring-2 focus:ring-orange-500 
//                                focus:border-transparent transition-all"
//                       required
//                     />
//                     <User className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-gray-700 font-medium">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"

//                       className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
//                                focus:outline-none focus:ring-2 focus:ring-orange-500 
//                                focus:border-transparent transition-all"
//                       required
//                     />
//                     <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     htmlFor="subject"
//                     className="text-gray-700 font-medium">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
//                              focus:outline-none focus:ring-2 focus:ring-orange-500 
//                              focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     htmlFor="message"
//                     className="text-gray-700 font-medium">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="4"
//                     className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
//                              focus:outline-none focus:ring-2 focus:ring-orange-500 
//                              focus:border-transparent transition-all resize-none"
//                     required
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full py-4 rounded-lg flex items-center justify-center gap-2
//                            ${isSubmitted ? "bg-green-500" : "bg-orange-500"} 
//                            text-white font-medium transition-colors`}>
//                   {isSubmitted ? (
//                     <>
//                       <Star className="w-5 h-5" />
//                       <span>Message Sent!</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             </motion.div>
//     </div>
//   )
// }

// export default StartForm
