
import React from 'react';
import { MusicNoteIcon, BookOpenIcon, SparklesIcon } from './IconComponents';

const features = [
  {
    icon: <MusicNoteIcon className="h-8 w-8 text-white" />,
    title: 'Devotional Songs',
    description: 'Immerse yourself in divine melodies that soothe the soul and elevate the spirit.',
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-white" />,
    title: 'Spiritual Discourses',
    description: 'Gain profound insights and wisdom from sacred texts, made accessible for modern life.',
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-white" />,
    title: 'Guided Meditation',
    description: 'Find inner peace and clarity through guided meditation sessions suitable for all levels.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 font-serif">✨ The Divine Teachings</h2>
          <p className="text-lg text-stone-600 mt-4 max-w-3xl mx-auto">
            Stay connected with the divine teachings of HG Paresh prabhuji and find your daily dose of positivity and inner peace.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-stone-50 rounded-xl border border-stone-200/60">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-600 mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
