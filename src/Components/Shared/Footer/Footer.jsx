import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-[#070415] p-8'>
      <div className='container mx-auto '>
        <div className='md:flex md:justify-between md:items-center text-[#DDDDCC]'>
          <div>
            <h6>Copyright © Portfolio all rights reserved.</h6>
          </div>

          {/* <div className='md:flex md:justify-center md:items-center flex flex-col  md:gap-4'> */}
          <div className='flex flex-col md:flex-row md:gap-4 mt-5 md:mt-0'>
            <Link to='/' className='hover:text-[#6D59C9] duration-500'>
              Privacy Policy{" "}
            </Link>
            <Link to='/' className='hover:text-[#6D59C9] duration-500'>
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
