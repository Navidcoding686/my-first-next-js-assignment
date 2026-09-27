import Image from "next/image";
import { notFound } from "next/navigation";
import { GymType } from '@/app/Componenets/Type';

const WorkoutDetails = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const gymData: GymType[] = await response.json();

    const gym = gymData.find((gym) => gym.id === Number(id));

    if (!gym) {
        notFound();
    }

    return (
        <section className="bg-[#0d0f12] text-white">
            <div className="container mx-auto px-5 py-10">
                <div className="grid grid-cols-2 gap-10">

                    <div className="relative w-full h-[800px]">
                        <Image
                            src={gym.image}
                            alt={gym.name}
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    <div>

                        <h1 className="text-5xl font-extrabold uppercase">
                            {gym.name}
                        </h1>

                        <p className="text-gray-400 text-lg mt-4">
                            {gym.description}
                        </p>

                        <div className="flex gap-3 mt-6">
                            {gym.muscleGroups.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="bg-[#b6ff00] text-black font-semibold px-5 py-2 rounded-full"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-[#252a34] bg-[#15181e] overflow-hidden">

                            <div className="flex justify-between px-7 py-5 border-b border-[#252a34]">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Equipment
                                </span>
                                <span>{gym.equipment}</span>
                            </div>

                            <div className="flex justify-between px-7 py-5 border-b border-[#252a34]">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Difficulty
                                </span>
                                <span>{gym.difficulty}</span>
                            </div>

                            <div className="flex justify-between px-7 py-5 border-b border-[#252a34]">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Sets
                                </span>
                                <span>{gym.sets}</span>
                            </div>

                            <div className="flex justify-between px-7 py-5 border-b border-[#252a34]">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Reps
                                </span>
                                <span>{gym.reps}</span>
                            </div>

                            <div className="flex justify-between px-7 py-5 border-b border-[#252a34]">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Duration
                                </span>
                                <span>{gym.duration} min</span>
                            </div>

                            <div className="flex justify-between px-7 py-5 border-b border-[#252a34]">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Calories
                                </span>
                                <span>{gym.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex justify-between px-7 py-5">
                                <span className="text-gray-400 font-semibold uppercase text-sm">
                                    Rating
                                </span>
                                <span>{gym.rating}</span>
                            </div>

                        </div>

                        <div className="mt-9">

                            <h2 className="text-2xl font-bold uppercase">
                                Instructions
                            </h2>

                            <ol className="mt-5 space-y-5">
                                {gym.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-gray-300"
                                    >
                                        <span className="text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>

                        </div>

                        <div className="flex gap-4 mt-10">
                            <button className="bg-[#b6ff00] text-black font-bold px-7 py-4 rounded-xl">
                                Add to today's plan
                            </button>

                            <button className="border border-[#3a414d] text-gray-200 px-7 py-4 rounded-xl">
                                 Save for later
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkoutDetails;