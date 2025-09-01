'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Bayesian Analysis - Statistical Inference & Decision Making',
    description:
      'Comprehensive Bayesian analysis project implementing advanced statistical inference techniques including Bayesian parameter estimation, hypothesis testing, and decision theory. The project covers prior and posterior distributions, Markov Chain Monte Carlo (MCMC) methods, Bayesian model comparison, and credible intervals. Applied Bayesian methods to real-world datasets for parameter estimation, A/B testing, and uncertainty quantification. Features include implementation of conjugate priors, Metropolis-Hastings algorithm, Gibbs sampling, and Bayesian model averaging for robust statistical inference.',
    technologies: [
      'Bayesian Statistics',
      'MCMC Methods',
      'PyMC3/PyMC4',
      'NumPy',
      'SciPy',
      'Matplotlib',
      'Seaborn',
      'Jupyter',
      'Statistical Modeling',
      'Decision Theory',
    ],
    github: 'https://github.com/sahastraG39/Bayesian-Analysis.git',
  },
  {
    title: 'Customer Segmentation Analysis - Course Project STA4053',
    description:
      "This study aims to explore and analyze customer data using a comprehensive set of multivariate statistical and machine learning techniques. This study uses a dataset of 100,000 observations with 18 variables, including 10 numerical (e.g., age, income) and 8 categorical (e.g., gender, region) features. The dataset's size and diversity enable effective pattern detection, dimensionality reduction, and predictive modeling. The dataset comprises multiple features related to customer behavior, demographics, and potentially transactional information. The objective is to uncover underlying patterns, reduce dimensionality for better visualization and interpretation, and build predictive models for classification or segmentation purposes.",
    technologies: [
      'Multivariate Statistics',
      'PCA',
      'Factor Analysis',
      'Decision Trees',
      'MANOVA',
      'Python',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
    ],
    github: 'https://github.com/sahastraG39/Customer-Segment-Analysis.git',
  },
  {
    title: 'Weather Condition Prediction (Kaggle Project)',
    description:
      'I built a machine learning pipeline to clean, preprocess, and analyze ~2,900 daily weather records. The project included handling missing values, feature engineering (e.g., converting sunrise/sunset times into numerical features), and exploratory data visualization. Using a Random Forest Classifier, I predicted missing weather condition labels such as Clear and Sunny, Partly Cloudy, and Rain Showers. The model achieved ~48% accuracy, and I generated a final submission file for the Kaggle competition.',
    technologies: [
      'Data Cleaning',
      'EDA',
      'Feature Engineering',
      'Random Forest',
      'Pandas',
      'Seaborn',
      'Scikit-learn',
    ],
    github: 'https://github.com/sahastraG39/Predicta1.0.git',
  },
  {
    title: 'AI Legal Advisor – Intelligent Legal Document Analysis',
    description:
      'Developed a full-stack AI-powered legal document analysis platform with clause detection, risk assessment, document classification, and a conversational legal assistant. The system supports multi-page document analysis, generates comprehensive PDF/DOCX/CSV reports, and enables document-aware Q&A via conversational AI. Features include multi-page analysis, text extraction, clause detection using Legal-BERT, risk scoring, conversational AI with chat memory, analytics & reporting with summarization, and performance optimizations.',
    technologies: [
      'Django',
      'Python',
      'Hugging Face Transformers',
      'FAISS',
      'LangChain',
      'Docker',
      'Legal-BERT',
      'BART',
    ],
    github: 'https://github.com/sahastraG39/AI-Legal-Advisor.git',
  },
  // Add more projects here by copying the structure above
];

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Showcasing my expertise in AI/ML, data science, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            return (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description with Read More */}
                  <div className="mb-3">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {expandedProjects.has(index)
                        ? project.description
                        : truncateDescription(project.description, 100)}
                    </p>
                    {project.description.length > 100 && (
                      <button
                        onClick={() => toggleProject(index)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 transition-colors"
                      >
                        {expandedProjects.has(index) ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-3 rounded-lg transition-colors duration-200 hover-lift text-sm"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
