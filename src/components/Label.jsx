import React from 'react';

const Label = ({children, className}) => {
  return (
    <>
        <label className={`${className} font-russoOne text-white text-xl lg:text-2xl`}>
            {children}
        </label>
    </>
  )
}

export default Label