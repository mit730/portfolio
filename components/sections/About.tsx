import React from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceCard = ({ title, company, location, type, date }: { title: string, company: string, location: string, type: string, date: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-6 last:border-0">
    <div className="mb-4 md:mb-0">
      <h4 className="text-xl font-medium text-gray-700 mb-1">{title}</h4>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><FaBuilding className="text-gray-400" /> {company}</span>
        <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-gray-400" /> {location}</span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full">{type}</span>
      <span className="flex items-center gap-1 text-sm text-gray-500"><FaCalendarAlt className="text-gray-400" /> {date}</span>
    </div>
  </div>
);

const About = () => {
  const experiences = [
    {
      title: "Junior Web Developer",
      company: "Dr. Rajkumar's Learning App",
      location: "Bengaluru",
      type: "Full Time",
      date: "Sep 2021 - Dec 2021"
    },
    {
      title: "Web Development Intern",
      company: "IonPixelz Web Solutions",
      location: "Bengaluru",
      type: "Internship",
      date: "Sep 2021 - Dec 2021"
    },
    {
      title: "SEO / SEM Specialist",
      company: "HAAPS",
      location: "Bengaluru",
      type: "Internship",
      date: "Sep 2021 - Dec 2021"
    }
  ];

  const education = [
    {
      title: "Bachelor in Electronics & Communication",
      company: "Bangalore Institute of Technology",
      location: "Bengaluru", // Added location for consistency, though not explicitly in image for education usually
      type: "Full Time",
      date: "Aug 2015 - Dec 2020"
    }
  ];

  return (
    <section className="w-full py-20" id="about">
      <div className="container mx-auto px-8 md:px-32">
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#42446E] mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#42446E] mb-8">Work Experience</h2>
          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#42446E] mb-8">Education</h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <ExperienceCard key={index} {...edu} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
