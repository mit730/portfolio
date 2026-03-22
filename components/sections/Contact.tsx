import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full py-20 sm:py-32" id="contact">
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="relative group overflow-hidden bg-white dark:bg-[#111111] rounded-[2.5rem] p-8 sm:p-16 border border-gray-100 dark:border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full -ml-32 -mb-32 blur-3xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-10 transform group-hover:rotate-[10deg] transition-transform duration-500">
               <FaEnvelope size={32} />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#42446E] dark:text-[#A6A8D6] mb-6 tracking-tight leading-tight">
              Ready to build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">amazing</span>?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium mb-12 max-w-2xl">
              I&apos;m currently available for new projects and opportunities. If you have a question or just want to say hi, my inbox is always open!
            </p>

            <a 
              href="mailto:miteshkumar862@gmail.com" 
              className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Send me an email</span>
              <FaPaperPlane className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
            </a>
            
            <div className="mt-10 pt-10 border-t border-gray-100 dark:border-gray-800 w-full flex flex-col items-center">
               <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Or reach out directly</p>
               <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                 miteshkumar862@gmail.com
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
