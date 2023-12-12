import { NavLink } from "react-router-dom";
import flutter from "./../../Images/flutter.png";
import java from "./../../Images/java.png";
import laravel from "./../../Images/laravel.png";
import nextjs from "./../../Images/nextjs.png";
import python from "./../../Images/python.png";
import vite from "./../../Images/vite.png";

const PortfolioCard = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: java,
      githubLink: "https://github.com/yourusername/project1",
      details:
        "High-level, class-based, object-oriented programming language designed for versatility.",
      technologies: ["photography", "travel", "winter"],
    },
    {
      id: 2,
      title: "Project 2",
      image: nextjs,
      githubLink: "https://github.com/yourusername/project2",
      details:
        "Full-featured React framework with a great developer experience.",
      technologies: ["web development", "react", "tailwind"],
    },
    {
      id: 3,
      title: "Project 3",
      image: python,
      githubLink: "https://github.com/yourusername/project3",
      details:
        "High-level, general-purpose programming language with a focus on code readability.",
      technologies: ["mobile app", "flutter", "dart"],
    },
    {
      id: 4,
      title: "Project 4",
      image: laravel,
      githubLink: "https://github.com/yourusername/project4",
      details:
        "PHP web application framework with expressive syntax and a rich set of features.",
      technologies: ["mobile app", "flutter", "dart"],
    },
    {
      id: 5,
      title: "Project 5",
      image: flutter,
      githubLink: "https://github.com/yourusername/project5",
      details:
        "Open-source UI software development kit for building natively compiled applications.",
      technologies: ["mobile app", "flutter", "dart"],
    },
    {
      id: 6,
      title: "Project 6",
      image: vite,
      githubLink: "https://github.com/yourusername/project6",
      details:
        "Fast and modern development server and build tool for efficient front-end development.",
      technologies: ["mobile app", "flutter", "dart"],
    },
  ];

  return (
    <>
      <section className='bg-[#120F1C] pt-16 min-h-screen h-full flex items-center justify-center'>
        <div className='container '>
          <div className='mx-auto py-12'>
            <h1 className='text-3xl md:text-5xl text-center mb-14 font-semibold text-[#ddd]'>
              Portfolio
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className='flex md:flex-row flex-col bg-[#070415] p-4 rounded-md shadow-md mx-5 md:mx-0 transition-[0.7s] duration-500 hover:bg-[#141022]'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-contain ${
                      window.innerWidth > 768 ? "h-48 md:w-1/3" : "square-image"
                    } md:mr-4`}
                  />
                  <div className='flex flex-col  md:w-2/3'>
                    <h2 className='text-lg font-semibold mb-2 text-[#7963e0]'>
                      {project.title}
                    </h2>
                    <p className='text-[#777] mb-4'>{project.details}</p>
                    {/* technologies use */}
                    <div className='pb-2'>
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className='inline-block bg-[#6552B9] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'>
                          #{tech}
                        </span>
                      ))}
                    </div>
                    <NavLink
                      to={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500 hover:underline transition-colors duration-300'>
                      View on GitHub
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioCard;
