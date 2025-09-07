'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Building, Heart, User } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium mb-6"
          >
            <User className="w-4 h-4 text-emerald-400" />
            About Me
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TS</span>
                </div>
                Who I Am
              </h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-300 leading-relaxed mb-4">
                  {personalInfo.bio}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My unique background in supply chain management gives me a practical understanding 
                  of business operations, while my current focus on data science allows me to bridge 
                  the gap between theoretical AI concepts and real-world applications that drive 
                  meaningful business outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Current Role */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
                  <Building className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-2">Current Role</h4>
                  <p className="text-slate-300 font-medium">{personalInfo.currentRole}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4" />
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-3">Education</h4>
                  <div className="space-y-3">
                    {personalInfo.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-slate-600 pl-4">
                        <p className="text-slate-300 font-medium">{edu.degree}</p>
                        <p className="text-slate-400 text-sm">{edu.school}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                          edu.status === 'Current' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-slate-600/20 text-slate-400 border border-slate-600/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-3">When I'm Not Coding</h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm mt-3">
                    I believe in maintaining a healthy work-life balance. These activities 
                    keep me energized and often inspire creative solutions to technical challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative AI projects or discuss 
              how data science can solve real-world problems. Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-200"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}