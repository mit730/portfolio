import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className || ''}`}>
      <div className="container mx-auto px-8 md:px-16">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
