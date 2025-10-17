import React from 'react';
import { ClockIcon, VideoCameraIcon } from './IconComponents';

interface ScheduleDetail {
  time: string;
  description: string;
}

interface ClassInfo {
  title: string;
  details: ScheduleDetail[];
  links: {
    name: string;
    url: string;
  }[];
}

const classes: ClassInfo[] = [
  {
    title: 'Morning Shrila Prabhupada Lila Mrit Class',
    details: [
        { time: '6:00 AM - 6:45 AM', description: 'Class' },
        { time: '6:45 AM - 7:00 AM', description: 'Question & Answer' },
    ],
    links: [
      { name: 'Google Meet', url: 'https://meet.google.com/kjq-wpcn-vmk' },
    ],
  },
  {
    title: 'Morning Spiritual Class',
    details: [
        { time: '7:45 AM - 8:05 AM', description: 'Kirtan' },
        { time: '8:05 AM - 9:00 AM', description: 'Class' },
        { time: '9:00 AM onwards', description: 'Question & Answer' },
    ],
    links: [
      { name: 'FreeConferenceCall', url: 'https://join.freeconferencecall.com/updesh' },
    ],
  },
  {
    title: 'Evening Spiritual Class',
    details: [
        { time: '8:20 PM - 8:30 PM', description: 'Kirtan' },
        { time: '8:30 PM - 9:00 PM', description: 'Class' },
        { time: '9:00 PM - 9:30 PM', description: 'Question & Answer' },
    ],
    links: [
      { name: 'Google Meet', url: 'https://meet.google.com/kjq-wpcn-vmk' },
    ],
  },
];

const ScheduleCard: React.FC<{ classInfo: ClassInfo }> = ({ classInfo }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-stone-200/50 flex flex-col">
    <div className="p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">{classInfo.title}</h3>
      <div className="space-y-4 mb-6 flex-grow">
        {classInfo.details.map((detail, index) => (
          <div key={index} className="flex items-start">
            <ClockIcon className="h-5 w-5 mr-3 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-stone-700">{detail.time}</p>
              <p className="text-stone-500">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3 mt-auto">
        {classInfo.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
          >
            <VideoCameraIcon className="h-5 w-5 mr-3" />
            Join via {link.name}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 font-serif">🙏 Spiritual Classes Schedule</h2>
          <p className="text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
            Begin and end your day with spiritual nourishment. Join our live sessions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classInfo, index) => (
            <ScheduleCard key={index} classInfo={classInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;