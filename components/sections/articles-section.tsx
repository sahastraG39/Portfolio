'use client';

import { useState } from 'react';

const articles = [
  {
    title: 'Customer Segmentation Analysis: A Multivariate Approach',
    description:
      'An in-depth analysis of customer behavior using multivariate statistical techniques including PCA, Factor Analysis, and Discriminant Analysis. This study demonstrates the application of advanced statistical methods in business analytics.',
    category: 'Data Science',
    date: 'December 2024',
    readTime: '8 min read',
    link: '#',
    tags: ['Statistics', 'PCA', 'Customer Analytics', 'Multivariate Analysis'],
  },
  {
    title: 'Machine Learning in Weather Prediction: A Kaggle Case Study',
    description:
      'Exploring the challenges and solutions in weather prediction using machine learning algorithms. This article covers feature engineering, model selection, and performance optimization techniques.',
    category: 'Machine Learning',
    date: 'November 2024',
    readTime: '6 min read',
    link: '#',
    tags: ['Machine Learning', 'Feature Engineering', 'Weather Prediction', 'Kaggle'],
  },
  {
    title: 'AI in Legal Document Analysis: Building Intelligent Systems',
    description:
      'A comprehensive guide to building AI-powered legal document analysis systems using modern NLP techniques, including transformer models and vector search algorithms.',
    category: 'Artificial Intelligence',
    date: 'October 2024',
    readTime: '10 min read',
    link: '#',
    tags: ['NLP', 'Legal Tech', 'Transformers', 'Vector Search'],
  },
];

export function ArticlesSection() {
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(new Set());

  const toggleArticle = (index: number) => {
    const newExpanded = new Set(expandedArticles);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedArticles(newExpanded);
  };

  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section id="articles" className="scroll-mt-24 bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Articles & Publications
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Sharing insights and knowledge through data science and AI research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Article Content */}
              <div className="p-4">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="text-xs text-gray-500">
                    {article.date} • {article.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description with Read More */}
                <div className="mb-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {expandedArticles.has(index)
                      ? article.description
                      : truncateDescription(article.description, 100)}
                  </p>
                  {article.description.length > 100 && (
                    <button
                      onClick={() => toggleArticle(index)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 transition-colors"
                    >
                      {expandedArticles.has(index) ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        +{article.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex gap-2">
                  <a
                    href={article.link}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-3 rounded-lg transition-colors duration-200 hover-lift text-sm"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
