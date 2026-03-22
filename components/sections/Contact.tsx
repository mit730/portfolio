
const Contact = () => {
  return (
    <section className="w-full py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E0E62] dark:text-[#A6A8D6] mb-4">
          For any questions please mail me:
        </h2>
        <a 
          href="mailto:miteshkumar862@gmail.com" 
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-80 transition-opacity"
        >
          miteshkumar862@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
