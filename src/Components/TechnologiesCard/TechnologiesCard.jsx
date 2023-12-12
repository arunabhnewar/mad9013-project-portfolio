import { IoIosArrowForward } from "react-icons/io";

import flutter from "./../../Images/flutter.png";
import java from "./../../Images/java.png";
import laravel from "./../../Images/laravel.png";
import nextjs from "./../../Images/nextjs.png";
import python from "./../../Images/python.png";
import vite from "./../../Images/vite.png";
export default function TechnologiesCard() {
  const data = [
    {
      id: 1,
      image: nextjs,
      techName: "Next.js",
      desc: "Full-featured React framework with a great developer experience.",
    },
    {
      id: 2,
      image: vite,
      techName: "Vite",
      desc: "Fast and modern development server and build tool for efficient front-end development.",
    },
    {
      id: 3,
      image: laravel,
      techName: "Laravel",
      desc: "PHP web application framework with expressive syntax and a rich set of features.",
    },
    {
      id: 4,
      image: java,
      techName: "Java",
      desc: "High-level, class-based, object-oriented programming language designed for versatility and portability.",
    },
    {
      id: 5,
      image: python,
      techName: "Python",
      desc: "High-level, general-purpose programming language with a focus on code readability and ease of use.",
    },
    {
      id: 6,
      image: flutter,
      techName: "Flutter",
      desc: "Open-source UI software development kit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    },
  ];
  return (
    <section>
      <div className='container mx-auto py-12'>
        <h1 className='text-5xl text-center mb-14 font-semibold text-slate-900'>
          Technologies I Know
        </h1>
        <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3'>
          {data.map((item) => (
            <li
              key={item.id}
              className='relative flex flex-row-reverse bg-slate-50 p-3 rounded-xl hover:bg-slate-100 cursor-pointer transition-[0.7s]'>
              {/* Description */}
              <div className='peer group ml-6 flex-auto'>
                <h4 className='mb-2 leading-6 text-slate-900 font-semibold flex items-center'>
                  <p className='before:absolute before:-inset-3 before:rounded-2xl '>
                    {item.techName}
                  </p>
                  <IoIosArrowForward />
                </h4>
                <p className='text-sm leading-6 text-slate-700 '>{item.desc}</p>
              </div>
              {/* Logo or images */}
              <div className='flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden '>
                <img src={item.image} alt={item.techName} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
