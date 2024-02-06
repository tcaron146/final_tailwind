import Image from 'next/image';
import React from 'react';

const Content = ({ imageSrc, altText, paragraphText, className }) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <Image src={imageSrc} alt={altText} className='border-2 rounded-md h-fit'/>
      <p>{paragraphText}</p>
    </div>
  );
};

export default Content;
