"use client";
import Carousel from './components/Carousel';

export default function HomePage() {
  return (
    <div>
      {/* Main  section */}
      <div className='flex flex-col lg:flex-row items-center'> 
        <div className='flex items-center '>
        <img src="/images/sidebar.png" alt="Sidebar" className=" h-[38rem] w-[12rem]" />
        <img src="/images/viking_image.png" alt="Viking" className=" h-[38rem] w-[23rem]" />
        </div>
        
        <Carousel />

      </div>

    </div>
  );
}


