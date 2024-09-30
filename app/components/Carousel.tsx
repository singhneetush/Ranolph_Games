"use client"; 

const Carousel = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col space-y-4 snap-x snap-mandatory overflow-x-scroll md:ml-[4rem] ">
        {/* First Row */}
        <div className="flex space-x-4 snap-x snap-mandatory">
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 1" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 2" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 3" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 1" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 2" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 3" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex space-x-4 snap-x snap-mandatory">
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 4" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 5" className="object-cover w-full  h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 6" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 1" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 2" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
          <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 snap-start flex justify-center items-center">
            <img src="/images/Frame 7.png" alt="Image 3" className="object-cover w-full h-[19rem] md:h-[17rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
