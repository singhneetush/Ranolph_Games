"use client";
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-img.png')" }}
      >
        <header className="text-white p-4 flex items-center justify-between">
          <div className='flex space-x-4'>
            <img src='/images/bronze_frame_with_bronze_crown.png' className='h-[2rem] md:h-[3rem]' alt="Left Image" />
            <div className='relative hidden md:block'>
              <img src='/images/Group 184.png' className='h-[3rem]' alt="Left Image" />
              <img src='/images/zero.png' className='h-[1.5rem] absolute top-0 left-[2rem] transform translate-x-[50%] translate-y-[50%]' alt="Zero Image" />
              <img src='/images/Vector.png' className='h-[1.5rem] absolute top-0 right-[17px] transform translate-x-[50%] translate-y-[50%]' alt="Zero Image" />
            </div>
          </div>
          <img src='/images/Group 183.png' className='w-[12rem] md:w-[20rem] h-auto mx-auto' alt="Center Image" />
          <div className="flex space-x-4 items-end">
            <img src='/images/Group 185.png' className='h-[2rem] md:h-[3rem]' alt="Right Image 1" />
            <img src='/images/Group 186.png' className='h-[2rem] md:h-[3rem]' alt="Right Image 2" />
          </div>
        </header>
        <main className="flex-grow p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
