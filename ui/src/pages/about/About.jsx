import React from "react";

import "./about.css"; 
import Item from "../../components/item/Item"
const About = () => {
  const projects = [
    {
      id: 1,
      title: "Paksh Gupta",
      image: "./images/paksh.jpg",
      description:
        "I'm a web developer passionate about bringing ideas to life through coding, creating diverse and exciting projects. Off the screen, I'm an avid badminton player, relishing the thrill of the game with each swing. Additionally, I find joy in the strategic depth of chess, always eager for the challenge of outmaneuvering opponents on the board.",
   
    },
    {
      id: 2,
      title: "Shaleen Kapoor",
      image: "./images/shaleen.png",
      description:
        "Engineered a comprehensive travel advisory application in React, leveraging Google Maps API and Travel Advisor API from Rapid API. Seamlessly integrated functionalities to display diverse restaurants, hotels, and attractions, complemented by a user-friendly interface. Implemented a sophisticated rating filter feature to enhance user experience, showcasing adept utilization of React components and API integration",
     
    },
    {
      id: 3,
      title: "Aastha Gupta",
      image: "./images/aastha.jpg",
      description:
        "Hello, I'm Aastha Gupta, and I have a passion for continuous growth and learning. Staying updated with the latest technologies and trends allows me to provide innovative solutions. I particularly enjoy tackling challenges and exploring creative approaches to solve complex problems. My interests lie in web development, where I strive to create impactful solutions. Outside of work, you can often find me enjoying the serenity of swimming and painting.",
      
    },
    {
        id: 3,
        title: "Rakshit Pandey",
        image: "./images/rakshit2.jpg",
        description:
          "Developed a full-stack vegetable marketplace, 'Veggie Bazar,' with a React-based front end and an Express.js backend coupled with MongoDB for database management. Implemented secure payment processing using Stripe, ensuring seamless and safe transactions. Leveraged Crypto.js and JWTwebtoken for robust password authentication and authorization, fortifying user data integrity.",
       
      },
    // Add more projects as needed
  ];

  return (
    <>
      <h2 className="Title">About Us</h2>
      <div className="Line" />
      <p className="Description">
        Founders of Smart Nav Plus Website
      </p>
      <div className="ProjectsContainer">
        {projects.map((project, index) => (
          <Item
            key={project.id}
            index={index + 1}
            title={project.title}
            description={project.description}
            image={project.image}
           
          />
        ))}
      </div>
      
    </>
  );
};

export default About;
