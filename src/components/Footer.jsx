import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import { BrowserRouter as Router } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <Router>
            <footer className="bg-[#000000] flex flex-col justify-center items-center gap-5 py-10 w-full">
                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-inter font-bold text-white text-sm md:text-md lg:text-lg">Developer: John Carlo P. Jacobe</h1>
                    <h1 className="font-inter text-white text-xs md:text-md lg:text-lg">&copy; COPYRIGHT 2024 | ALL RIGHTS RESERVED.</h1>
                </div>
                <SocialMediaLinks />
            </footer>
        </Router>
    </>
  )
}

export default Footer