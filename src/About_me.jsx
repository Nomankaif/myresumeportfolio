import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>Hello! I’m a passionate and dedicated MERN stack developer currently pursuing my degree at Guru Nanak College. I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js, and I enjoy creating seamless user experiences with clean, responsive interfaces powered by Tailwind CSS.

In addition to my web development skills, I have a strong foundation in Java Data Structures and Algorithms (DSA) and backend development using Spring Boot. I'm always eager to learn, solve real-world problems through code, and stay updated with the latest technologies in the software development world.</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
