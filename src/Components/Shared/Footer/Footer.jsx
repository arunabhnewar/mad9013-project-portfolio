import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-[#070415]'>
      <div className='container mx-auto '>
        <div className='md:flex md:justify-between md:items-center text-[#DDDDCC]'>
          <div>
            <h6>Copyright © Portfolio all rights reserved.</h6>
          </div>

          <div className='md:flex md:justify-center md:items-center flex flex-col  md:gap-4'>
            <div>
              {" "}
              <Link>Privacy Policy </Link>
            </div>
            <div>
              <Link>Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
