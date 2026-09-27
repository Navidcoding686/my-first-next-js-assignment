
import React from 'react';
import Gym from "./Gymcard";
import { GymType } from './Type';
const getGymData = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    const data = await response.json();

    console.log(data);

    return data;
};

const Page = async () => {
    const gymData = await getGymData();

    return (
        <section className=' bg-[#000000]'>
            <div className='container mx-auto'>
                <h2 className='text-4xl font-bold py-2'>The Library</h2>
                <p>Twelve lifts covering every major muscle group</p>
            </div>

            <div className=' container mx-auto grid grid-cols-3 gap-5'>
                {gymData.map((gym:GymType) => (
                    <Gym key={gym.id} gym={gym} />
                ))}
            </div>
        </section>
    );
};

export default Page;
