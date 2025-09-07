'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <Rocket className="w-4 h-4 text-blue-400" />
            Featured Projects
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Things I&apos;ve Built
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in AI, machine learning, 
            and data science. Each project represents a unique challenge and learning opportunity 
            in the rapidly evolving world of artificial intelligence.
          </p>
        </motion.div>

        {/* Project Status Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { status: 'Complete', color: 'bg-green-500', desc: 'Live & Ready' },
            { status: 'In Development', color: 'bg-blue-500', desc: 'Currently Building' },
            { status: 'Planning', color: 'bg-yellow-500', desc: 'Design Phase' },
            { status: 'Research', color: 'bg-purple-500', desc: 'Exploring Ideas' }
          ].map((item) => (
            <div key={item.status} className="flex items-center gap-2 text-sm text-slate-400">
              <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
              <span>{item.status}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-500">{item.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I&apos;m constantly working on new projects and experiments. Follow my GitHub 
              for the latest updates and contributions to open-source AI projects.
            </p>
            <motion.a
              href="https://github.com/tskunz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-200 border border-slate-600"
            >
              <Rocket className="w-5 h-5" />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}