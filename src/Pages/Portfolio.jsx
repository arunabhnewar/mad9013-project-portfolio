import React from "react";
import java from "./../Images/java.png";
import nextjs from "./../Images/nextjs.png";
import python from "./../Images/python.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: java,
      githubLink: "https://github.com/yourusername/project1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus nisi.",
      technologies: ["photography", "travel", "winter"],
    },
    {
      id: 2,
      title: "Project 2",
      image: nextjs,
      githubLink: "https://github.com/yourusername/project2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus nisi.",
      technologies: ["web development", "react", "tailwind"],
    },
    {
      id: 3,
      title: "Project 3",
      image: python,
      githubLink: "https://github.com/yourusername/project3",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus nisi.",
      technologies: ["mobile app", "flutter", "dart"],
    },
    // Add more projects as needed
  ];

  return (
    <div className='container mx-auto py-12'>
      <h1 className='text-4xl font-bold mb-8 mx-5 md:mx-0'>Portfolio</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex md:flex-row flex-col bg-white p-4 rounded-md shadow-md mx-5 md:mx-0'>
            <img
              src={project.image}
              alt={project.title}
              className={`object-contain ${
                window.innerWidth > 768 ? "h-48 md:w-1/3" : "square-image"
              } md:mr-4`}
            />
            <div className='flex flex-col md:w-2/3'>
              <h2 className='text-lg font-semibold mb-2'>{project.title}</h2>
              <p className='text-gray-700 mb-4'>{project.details}</p>
              {/* technologies use */}
              <div className='pb-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline transition-colors duration-300'>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
