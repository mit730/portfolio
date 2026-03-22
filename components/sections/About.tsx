import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
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

const ExperienceCard = ({ title, company, location, type, date, description, showDuration = false, isLast = false }: { title: string, company: string, location: string, type: string, date: string, description?: string[], showDuration?: boolean, isLast?: boolean }) => {
  const duration = showDuration ? calculateDuration(date) : '';

  return (
    <div className="relative pl-8 sm:pl-10 pb-12 group last:pb-0">
      {/* Timeline Line */}
      {!isLast && <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-500 transition-colors duration-500"></div>}
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-blue-600 z-10 shadow-sm group-hover:scale-125 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

      <div className="bg-white dark:bg-[#111111] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5"><FaBuilding className="text-blue-500" /> {company}</span>
              <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-blue-500" /> {location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-lg border border-blue-100 dark:border-blue-800/50">{type}</span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              <FaCalendarAlt /> {date}{duration}
            </span>
          </div>
        </div>

        {description && description.length > 0 && (
          <ul className="space-y-2.5">
            {description.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const EducationCard = ({ title, company, location, type, date }: { title: string, company: string, location: string, type: string, date: string }) => (
  <div className="bg-white dark:bg-[#111111] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{title}</h4>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center gap-2">
        <FaGraduationCap className="text-blue-500" /> {company} • {location}
      </p>
    </div>
    <div className="text-right shrink-0">
       <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">{date}</span>
       <span className="text-xs font-semibold px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-700">{type}</span>
    </div>
  </div>
);

const About = () => {
  const totalExperience = getTotalExperienceYears();

  return (
    <section className="w-full py-16 sm:py-24" id="about">
      <div className="w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-20 max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: About Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">About Me</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#42446E] dark:text-[#A6A8D6] mb-8 tracking-tight">Crafting Digital Experiences</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                <p>
                  Experienced MERN Stack Developer with <span className="text-blue-600 dark:text-blue-400 font-bold">{totalExperience} years</span> of proficiency in building scalable
                  web applications that solve real-world problems.
                </p>
                <p>
                  I specialize in developing high-performance, responsive frontends using React.js and architecture-driven backends
                  using Node.js, Express.js, and MongoDB. My goal is to deliver clean, maintainable code that provides exceptional user experiences.
                </p>
              </div>
              
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl shadow-blue-500/20">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                       <FaBriefcase size={24} />
                    </div>
                    <div>
                       <p className="text-white/70 text-sm font-bold uppercase tracking-wider">Experience</p>
                       <p className="text-2xl font-bold">{totalExperience} Years Professional</p>
                    </div>
                 </div>
                 <a 
                   href="/images/resume.pdf" 
                   download="Mitesh_Kumar_Resume.pdf"
                   className="flex items-center justify-center gap-2 w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-opacity-90 transition-all active:scale-95"
                 >
                   Download Full Resume
                 </a>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="lg:col-span-7 space-y-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg shadow-lg">W</span>
                 Work Experience
              </h3>
              <div className="relative">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} showDuration={true} isLast={index === experiences.length - 1} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white text-lg shadow-lg">E</span>
                 Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <EducationCard key={index} {...edu} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
