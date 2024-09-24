import React from 'react';

const Section = ({ children, className }) => {
  return (
    <>
        <section className={`${className} flex flex-col items-center`}>
            {children}
        </section>
    </>
  )
}

export default Section