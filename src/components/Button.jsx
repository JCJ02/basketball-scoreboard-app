import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button 
        className={`${className} rounded-full p-3 font-inter font-bold text-white text-xs`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button