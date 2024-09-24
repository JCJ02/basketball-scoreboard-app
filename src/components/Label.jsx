import React from 'react';

const Label = ({ children, className }) => {
  return (
    <>
      <label className={`${className} font-russoOne text-white text-sm md:text-md lg:text-2xl`}>
        {children}
      </label>
    </>
  )
}

export default Label