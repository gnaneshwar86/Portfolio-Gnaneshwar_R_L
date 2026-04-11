import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";
import { Mail, Send, CheckCircle, Loader, User, MessageSquare, AtSign } from "react-feather";
import toast from "react-hot-toast";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsDone(true);
        toast.success("Message sent successfully!");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <>
      <NextSeo 
        title="Contact | Gnaneshwar" 
        description="Get in touch with Gnaneshwar for collaborations or inquiries." 
      />
      
      <div className="max-w-[800px] mx-auto pt-10 pb-20 px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeUp} custom={0}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white uppercase tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            variants={fadeUp} custom={1}
            className="text-lg text-gray-400 max-w-[500px] mx-auto"
          >
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ── INFO PANEL ── */}
          <motion.div 
            initial="hidden" animate="visible"
            className="md:col-span-1 space-y-8"
          >
            <motion.div variants={fadeUp} custom={2} className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-xl text-accent">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Email Me</h3>
                <p className="text-sm text-gray-400 break-all">gnaneshwarnani8605@gmail.com</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-xl text-accent">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Socials</h3>
                <p className="text-sm text-gray-400 underline decoration-accent/30 hover:decoration-accent transition-all cursor-pointer">
                  <a href="https://linkedin.com/in/gnaneshwar86" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── FORM ── */}
          <motion.div 
            initial="hidden" animate="visible"
            className="md:col-span-2"
          >
            <AnimatePresence mode="wait">
              {isDone ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/30 border border-accent/20 rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }}
                    className="bg-accent text-black p-4 rounded-full mb-6"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                  <p className="text-gray-400 mb-8">Thanks for reaching out, Gnaneshwar will get back to you soon.</p>
                  <button 
                    onClick={() => setIsDone(false)}
                    className="px-6 py-2 bg-accent text-black font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  variants={fadeUp} custom={2}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-secondary/30 border border-tertiary rounded-2xl p-6 md:p-8 space-y-5 shadow-xl backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                        <User size={12} className="text-accent" /> Full Name
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="John Doe"
                        className={`w-full bg-tertiary border ${errors.name ? 'border-red-500' : 'border-tertiary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                        <AtSign size={12} className="text-accent" /> Email Address
                      </label>
                      <input
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                        })}
                        placeholder="john@example.com"
                        className={`w-full bg-tertiary border ${errors.email ? 'border-red-500' : 'border-tertiary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <MessageSquare size={12} className="text-accent" /> Subject
                    </label>
                    <input
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="Collaboration opportunity"
                      className={`w-full bg-tertiary border ${errors.subject ? 'border-red-500' : 'border-tertiary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <MessageSquare size={12} className="text-accent" /> Your Message
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      placeholder="Hey, I'd like to talk about..."
                      rows={5}
                      className={`w-full bg-tertiary border ${errors.message ? 'border-red-500' : 'border-tertiary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-black font-extrabold py-4 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg uppercase tracking-widest"
                  >
                    {isSubmitting ? (
                      <Loader className="animate-spin" size={20} />
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
