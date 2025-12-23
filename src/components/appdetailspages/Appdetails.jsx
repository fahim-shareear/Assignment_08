import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import Downloadlogo from '../../assets/icon-downloads.png';
import Ratingimg from '.././../assets/icon-ratings.png';
import Reviewicon from '../../assets/icon-review.png';
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import { getInstalledApps } from '../utilities/utilities';

const Appdetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();
    const navigate = useNavigate();

    const app = apps.find(a => a.id === Number(id));

    const ratingsReversed = [...app.ratings].reverse();

    const addToLS = (app) => {
        const installedApps = getInstalledApps();
        const installed = installedApps.find(item => item.id === app.id);

        if (installed) {
            toast("App is already installed.");
            return;
        }

        installedApps.push(app);

        localStorage.setItem(
            "installedApps",
            JSON.stringify(installedApps)
        );

        toast("App has been installed successfully");
    };

    const handleInstalledId = () => {
        addToLS(app);
    };

    return (
        <div className="bg-gray-200 p-4 sm:p-6 md:p-8 lg:p-10">
            <button
                onClick={() => navigate(-1)}
                className="absolute right-10 text-white cursor-pointer font-bold bg-purple-600 rounded-full p-1"
            >
                <X />
            </button>

            <div className="lg:max-w-11/12 mx-auto mt-10 bg-gray-200">
                <div className="lg:max-w-7/12 mx-auto mb-5">
                    <div className="app-head flex items-center gap-9 mb-5">
                        <div className="app-img">
                            <img src={app.image} alt="applogo" />
                        </div>

                        <div className="side-details">
                            <div className="title mb-5">
                                <h1 className="text-black font-bold text-3xl">
                                    {app.title}
                                </h1>
                                <p className="text-[10px] text-black mt-2">
                                    Developed by
                                    <span className="font-bold text-purple-600 ml-2">
                                        {app.companyName}
                                    </span>
                                </p>
                            </div>

                            <hr className="border-t border-gray-500" />

                            <div>
                                <div className="flex items-center gap-5 mt-5">
                                    <div className="mr-4">
                                        <img src={Downloadlogo} width={20} height={20} />
                                        <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                            Downloads
                                        </p>
                                        <h3 className="uppercase font-bold text-2xl text-black">
                                            {app.downloads}
                                        </h3>
                                    </div>

                                    <div className="mr-4">
                                        <img src={Ratingimg} width={20} height={20} />
                                        <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                            Average Ranking
                                        </p>
                                        <h3 className="uppercase font-bold text-2xl text-black">
                                            {app.ratingAvg}
                                        </h3>
                                    </div>

                                    <div className="mr-4">
                                        <img src={Reviewicon} width={20} height={20} />
                                        <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                            Total Reviews
                                        </p>
                                        <h3 className="uppercase font-bold text-2xl text-black">
                                            {app.reviews}
                                        </h3>
                                    </div>
                                </div>

                                <button
                                    className="bg-[#0abb83] p-3 rounded-md font-bold mt-2 cursor-pointer"
                                    onClick={handleInstalledId}
                                >Install Now ({app.size} MB)
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-gray-500" />

                    {/* rating chart section */}
                    <div className="w-full h-64 mb-5">
                        <h1 className="font-bold text-black">Ratings</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={ratingsReversed}
                                layout="vertical"
                                margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                            >
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" />
                                <Tooltip />
                                <Bar dataKey="count" fill="#ff8811" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <hr className="border-t border-gray-500" />

                    {/* description section */}
                    <div className="mt-5">
                        <h1 className="text-black font-bold mb-4">Description</h1>
                        <p className="text-[15px] text-black text-left">
                            {app.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appdetails;
