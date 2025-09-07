'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Project, statusColors, categoryColors } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[project.category]}`}>
            <Tag className="w-3 h-3 mr-1" />
            {project.category}
          </div>
          {/* Status Badge */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
            <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
            {project.status}
          </div>
        </div>

        {/* Project Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-slate-500 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-slate-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-sm">Project Preview</p>
            </div>
          )}
        </div>

        {/* Project Title & Description */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">Key Features:</h4>
              <ul className="text-xs text-slate-400 space-y-1">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
                {project.features.length > 3 && (
                  <li className="text-slate-500 italic">
                    +{project.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-300 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700/50">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${project.demoUrl ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200`}
              >
                <Github className="w-4 h-4" />
                {project.demoUrl ? 'Code' : 'View Code'}
              </motion.a>
            )}
            
            {!project.demoUrl && !project.githubUrl && (
              <div className="flex-1 flex items-center justify-center px-4 py-2 bg-slate-700/30 text-slate-500 text-sm font-medium rounded-lg cursor-not-allowed">
                Coming Soon
              </div>
            )}
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}