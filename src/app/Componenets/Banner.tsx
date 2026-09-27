import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="w-full  bg-[#000000]">
            <div className='border rounded-[10px] container mx-auto px-10 py-9 bg-[#15171D] flex justify-between'>
                <div>
                    <p className='text-[#C2F800] py-6'>Workout Library</p>
                    <h1 className='text-white text-3xl font-bold py-2'>TRAIN WITH INTENT.LOG<br/>EVERY SET.</h1>
                    <p className='text-white py-2'> Fitlog is a dark, no-nonsense gym comapanion: pick a lift, lock it <br/>
                    into today's plan, and watch the week's work add up </p>
                    <div className='py-6'>
                        <button className='border rounded px-4 py-1 bg-[#C2F800] text-black'>BROWSE WORKOUTS</button>
                    </div>
                </div>
                <div className='px-10 py-9'>
                    <Image src="/assets/banner.png" width={250} height={250} alt="jim"/>
                </div>
            </div>
        </div>
    )
};

export default Banner;

