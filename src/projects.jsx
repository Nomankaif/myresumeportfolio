import React from 'react'
import Card from './Card';
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: restaurant,
          altText: 'Resataurant website',
          title: 'Restaurant Website',
          description: 'A dynamic and responsive restaurant website that showcases the menu, allows online reservations, displays customer reviews, and includes contact information with location map. The site features a clean UI, smooth navigation, and mobile-friendly design. ',
          
        },
        {
          imageUrl:chess,
          altText: 'BookStore',
          title: 'Best Books',
          description: "A full-stack web application where users can browse books, add them to cart, make secure payments, and manage their profiles. The site also features a curated list of best books for easy discovery. Built with modern tech to deliver a smooth and responsive user experience.",
         

        },
      
        {
            imageUrl: wise_way,
            altText: 'Lift Link',
            title: 'Connecting Users On Same Route',
            description: "Lift Link is a smart ride-sharing platform that connects users traveling on the same route. It helps people find and share rides, making travel more convenient, affordable, and eco-friendly",
            explore:"https://github.com/Praneeth2025/WiseWay-website"
          }
      ];

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
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
