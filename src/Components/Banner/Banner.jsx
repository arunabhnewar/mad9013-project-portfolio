import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <section>
        <div className='bg-[#120F1C] text-white md:py-10 py-5'>
          <div className='container mx-auto flex flex-col-reverse md:flex-row items-center my-4 md:my-10 h-4/6'>
            <div className='flex flex-col w-full lg:w-1/3 md:w-2/4 justify-center items-start p-8'>
              <h1 className='text-3xl md:text-4xl  text-yellow-300 tracking-loose pb-2'>
                TechFest
              </h1>
              <h2 className='text-2xl  leading-relaxed md:leading-snug pb-2'>
                Space : The Timeless Infinity
              </h2>
              <p className='text-sm md:text-base text-gray-50 pb-4'>
                Explore your favourite events and register now to showcase your
                talent and win exciting prizes.
              </p>
              <Link
                to=''
                className='bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent'>
                Explore Now
              </Link>
            </div>
            {/* p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 md:w-2/3 justify-center */}
            <div className='p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 lg:w-2/3 md:w-2/4  justify-center'>
              <div className='h-36 flex flex-wrap justify-center content-center'>
                {/* w-[205px] h-[436px] */}
                <div className=''>
                  <img
                    className='inline-block mt-28 hidden xl:block w-[155px] h-[360px] sm:h-[160px]'
                    src='https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png'
                  />
                </div>
                {/* w-[324px] h-[436px] */}
                <div className=''>
                  <img
                    className='inline-block  sm:mt-2 md:mt-0 p-8 md:p-0  w-[274px] h-[360px] sm:h-[300px]'
                    src='https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png'
                  />
                </div>
                {/* w-[203px] h-[436px] */}
                <div className=''>
                  <img
                    className='inline-block mt-28 hidden lg:block  w-[153px] h-[360px] sm:h-[160px]'
                    src='https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
