'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Code, BarChart, Cloud, Zap } from 'lucide-react';
import { skills } from '@/lib/data';

const iconMap = {
  brain: Brain,
  cpu: Cpu,
  database: Database,
  code: Code,
  'bar-chart': BarChart,
  cloud: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
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
            <Zap className="w-4 h-4 text-purple-400" />
            Technical Skills
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning from cutting-edge AI technologies to robust 
            data engineering solutions. I specialize in bridging the gap between 
            experimental AI research and production-ready applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skillGroup, groupIndex) => {
            const IconComponent = iconMap[skillGroup.icon as keyof typeof iconMap] || Code;
            
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Technologies Grid */}
                  <div className="space-y-3">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (groupIndex * 0.1) + (techIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-700/50 transition-all duration-200 group/tech"
                      >
                        <span className="text-slate-300 font-medium group-hover/tech:text-white transition-colors duration-200">
                          {tech}
                        </span>
                        <div className="flex items-center gap-1">
                          {/* Skill level indicators */}
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-4 rounded-full transition-all duration-300 ${
                                i < (tech.length > 8 ? 4 : 3) 
                                  ? 'bg-gradient-to-t from-cyan-500 to-violet-500' 
                                  : 'bg-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Zap className="w-8 h-8 text-violet-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The AI and data science landscape evolves rapidly, and so do I. I&apos;m constantly 
              exploring new frameworks, techniques, and methodologies to stay at the forefront 
              of technological innovation. Currently diving deep into multimodal AI and 
              advanced prompt engineering techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}