const technicalSkills = [
  {
    category: 'Statistics & Data Science',
    skills: [
      'Statistical Analysis',
      'Multivariate Statistics',
      'Python',
      'Pandas & NumPy',
      'Scikit-learn',
      'Data Visualization'
    ]
  },
  {
    category: 'Machine Learning & Research',
    skills: [
      'Machine Learning',
      'PCA & Factor Analysis',
      'Decision Trees',
      'Feature Engineering',
      'Jupyter Notebooks',
      'Kaggle'
    ]
  },
  {
    category: 'AI & Natural Language Processing',
    skills: [
      'Hugging Face Transformers',
      'LangChain',
      'Legal-BERT',
      'BART',
      'FAISS',
      'Vector Search'
    ]
  },
  {
    category: 'Web Development (Learning)',
    skills: [
      'HTML/CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Django',
      'Git/GitHub'
    ]
  }
];

const softSkills = [
  'Statistical Thinking',
  'Research & Analysis',
  'Problem Solving',
  'Critical Thinking',
  'Data Interpretation',
  'Academic Writing'
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Technical expertise and soft skills that drive successful project delivery
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <div key={category.category} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift card-shadow-hover transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">{category.category}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill}>
                      <div className="text-sm font-medium text-gray-700">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover-lift animate-fade-in-up"
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


