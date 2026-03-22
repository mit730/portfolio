
const Footer = () => {
  return (
    <footer className="w-full py-10 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
                <span>+91 7307668369</span>
                <span>miteshkumar862@gmail.com</span>
            </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
           <div></div>
            <p className="text-center md:text-right">
                Designed and built by <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-medium">Mitesh Kumar</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
