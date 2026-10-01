import { GymType } from '@/app/Componenets/Type';
import React from 'react';
import Image from 'next/image';
interface GymDteails  {
    params : Promise <{
        id:string;
    }>;
}
const getGymData = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    const data = await response.json();

    console.log(data);

    return data;
};
const Details = async ({params}: GymDteails) => {
    const {id} = await params;
    const gymData = await getGymData();
    const Workout = gymData.find((Workout:GymType) => Workout.id === parseInt(id))
    return (
        <div className='bg-[#000000]'>
            <div className = "container mx-auto grid grid-cols-2 gap-8 py-5">
                <div>
                    <Image src={Workout.image} alt= {Workout.name} width= {588} height={773} className='rounded-lg'/> 
                </div>
                <div>
                    <div>
                    <h2>{Workout.name}</h2>
                    <p className='py-2'>{Workout.description}</p>
                    <div>
                        {Workout.muscleGroups.map((musclegroup: string) => (
                            <span key={musclegroup} className="inline-block bg-[#1E2330] text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                {musclegroup}
                            </span>
                        ))}
                    </div>
                    </div>
                    <div className="rounded-lg bg-[#1E2330] px-4 py-2">
                    <div className="flex justify-between">
                        <p>Equipment</p>
                        <p>{Workout.equipment}</p>
                        
                    </div>

                    <div className="flex justify-between border-t border-gray-600 my-2">
                        <p>Difficulty</p>
                        <p>{Workout.difficulty}</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-600 my-2">
                        <p>Sets</p>
                        <p>{Workout.sets}</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-600 my-2">
                        <p>Reps</p>
                        <p>{Workout.reps}</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-600 my-2">
                        <p>Duration</p>
                        <p>{Workout.duration}</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-600 my-2">
                        <p>Calories</p>
                        <p>{Workout.caloriesBurned}</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-600 my-2">
                        <p>Ratings</p>
                        <p>{Workout.rating}</p>
                    </div>
                </div>
                <ol className="py-5 list-decimal pl-5">
                    {Workout.instructions.map((instruction: string) => (
                     <li key={instruction} className="py-1">
                    {instruction}
                    </li>
                    ))}
                </ol>
                </div>

            </div>
        </div>

  
  
    );
};

export default Details;