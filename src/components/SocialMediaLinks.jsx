import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <>
        <section className="flex items-center gap-2">
            <Link 
                className="text-white text-2xl"
                to={"https://github.com/JCJ02"}
                target="_blank"
            >
                <FaGithub />
            </Link>
            <Link 
                className="text-white text-2xl"
                to={"www.linkedin.com/in/jcj02"}
                target="_blank"
            >
                <FaLinkedin />
            </Link>
            <Link 
                className="text-white text-2xl"
                to={"https://www.instagram.com/jcjacobe2/"}
                target="_blank"
            >
                <FaInstagramSquare />
            </Link>
        </section>
    </>
  )
}

export default SocialMediaLinks