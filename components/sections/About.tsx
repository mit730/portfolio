import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { education, experiences, getTotalExperienceYears } from '../utils/common';

const calculateDuration = (dateStr: string) => {
  if (!dateStr || !dateStr.includes('-')) return '';
  const [startStr, endStr] = dateStr.split('-').map(s => s.trim());
  
  const parseDate = (str: string) => {
    if (str.toLowerCase() === 'present') return new Date();
    const cleanedStr = str.replace(/sept/i, 'Sep');
    const d = new Date(cleanedStr);
    if (isNaN(d.getTime())) return null;
    return d;
  };

  const startDate = parseDate(startStr);
  const endDate = parseDate(endStr);
  
  if (!startDate || !endDate) return '';

  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths -= startDate.getMonth();
  totalMonths += endDate.getMonth();
  totalMonths += 1; // Inclusive of end month

  if (totalMonths <= 0) return '';

  const yrs = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const parts = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`);
  if (remainingMonths > 0) parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`);

  return parts.length > 0 ? ` (${parts.join(' ')})` : '';
};

const ExperienceCard = ({ title, company, location, type, date, description, showDuration = false }: { title: string, company: string, location: string, type: string, date: string, description?: string[], showDuration?: boolean }) => {
  const duration = showDuration ? calculateDuration(date) : '';

  return (
  <div className="border-b border-gray-200 dark:border-gray-700 py-6 last:border-0">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <div className="mb-4 md:mb-0">
        <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-1">{title}</h4>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1"><FaBuilding className="text-gray-400" /> {company}</span>
          <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-gray-400" /> {location}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100 text-xs font-semibold px-4 py-1 rounded-full">{type}</span>
        <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <FaCalendarAlt className="text-gray-400" /> {date}{duration}
        </span>
      </div>
    </div>

    {description && description.length > 0 && (
      <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 text-sm space-y-1">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </div>
  );
};

const About = () => {
  const totalExperience = getTotalExperienceYears();

  return (
    <section className="w-full py-20" id="about">
      <div className="container mx-auto px-8 md:px-32">

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-6">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Experienced MERN Stack Developer with {totalExperience} years of proficiency in building scalable
            web applications. Skilled in developing responsive frontends using React.js and robust backends
            using Node.js & Express.js. Demonstrated capability in API development, integration, and
            delivering high-performance code.  
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-8">Work Experience</h2>
          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} showDuration={true} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-8">Education</h2>
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
