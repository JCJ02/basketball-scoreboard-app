import React from 'react';

const Section = ({children}) => {
  return (
    <>
        <section className="flex flex-col items-center">
            {children}
        </section>
    </>
  )
}

export default Section