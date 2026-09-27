import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full  bg-[#000000] ">
      <div className="grid grid-cols-3 items-center h-18 container mx-auto">

        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            width={25}
            height={25}
            alt="Logo"
          />
          <h2 className='text-4xl font-semibold text-white'>FITLOG</h2>
        </div>

        <div className="flex justify-center gap-6">
          <Link href="/Workouts">Workouts</Link>
          <Link href="/Myplans">My plans</Link>
        </div>

        <div className="flex justify-end gap-6">
          <Link href="/Myplans">Plan</Link>
          <Link href="/Myplans">Saved</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

