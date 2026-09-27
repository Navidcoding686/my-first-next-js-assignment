import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { GymType } from "./Type";
import { FiClock, FiStar } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';

const Gym = ({ gym }: { gym: GymType }) => {
    return (
        <Link href={`/Workouts/${gym.id}`}>
        <section>
            <div className="card bg-base-100 shadow-sm overflow-hidden">

                <figure className="relative w-full h-[245px]">
                    <Image
                        src={gym.image}
                        alt={gym.name}
                        fill
                        className="object-cover object-top"
                    />
                </figure>

                <div className="card-body bg-[#15171D] p-6">

                    <div className="flex gap-2">
                        {gym.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-[#B6FF00] text-black font-bold text-sm px-4 py-1 rounded-full"
                            >
                                {muscle.toUpperCase()}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-2">
                        {gym.name}
                    </h2>

                    <p className="text-gray-400">
                        {gym.equipment}
                    </p>

                    <div className="border-t border-gray-700 my-2"></div>

                    <div className="flex items-center gap-5 text-gray-300 text-sm">

                        <span className="flex items-center gap-1">
                            <FiClock className="text-base" />
                            {gym.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <FaFire className="text-base" />
                            {gym.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <FiStar className="text-base" />
                            {gym.rating}
                        </span>

                    </div>

                </div>

            </div>
        </section>
        </Link>
    );
};

export default Gym;

