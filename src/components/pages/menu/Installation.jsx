import React, { useEffect, useState } from 'react';
import { getInstalledApps, saveInstalledApps } from '../../utilities/utilities';
import { toast } from 'react-toastify';
import { ChevronDown } from 'lucide-react';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState(null); // null | 'asc' | 'desc'

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(getInstalledApps());
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        saveInstalledApps(updated);
        toast("Your app has been uninstalled");
    };

    const handleSortBySize = () => {
        let sortedApps = [...installedApps];

        if (sortOrder === 'asc') {
            sortedApps.sort((a, b) => b.size - a.size);
            setSortOrder('desc');
        } else {
            sortedApps.sort((a, b) => a.size - b.size);
            setSortOrder('asc');
        }

        setInstalledApps(sortedApps);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="lg:max-w-11/12 mx-auto px-4">

                {/* Banner */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-black mb-2">
                        Your Installed Apps
                    </h1>
                    <p className="text-black">
                        Explore all trending apps on the marketplace developed by us
                    </p>
                </div>

                {/* Top bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h2 className="font-bold text-black text-lg">
                        {installedApps.length} App Found
                    </h2>

                    <button
                        onClick={handleSortBySize}
                        className="flex items-center gap-2 border border-gray-400
                        bg-gray-200 text-black px-4 py-2 rounded-md w-fit"
                    >
                        Sort by size
                        <ChevronDown size={18} />
                    </button>
                </div>

                {/* Installed apps list */}
                {installedApps.length === 0 ? (
                    <p className="text-center text-black mt-10">
                        No apps installed yet
                    </p>
                ) : (
                    <div className="space-y-4">
                        {installedApps.map(app => (
                            <div
                                key={app.id}
                                className="flex flex-col sm:flex-row sm:items-center
                                sm:justify-between gap-4 bg-gray-200 p-4 rounded-md"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-16 h-16 object-contain"
                                    />

                                    <div>
                                        <h3 className="font-bold text-black text-lg">
                                            {app.title}
                                        </h3>
                                        <p className="text-black text-sm flex flex-wrap gap-3">
                                            <span className="text-green-600 font-semibold">
                                                ⬇ {app.downloads}
                                            </span>
                                            <span>⭐ {app.ratingAvg}</span>
                                            <span>{app.size} MB</span>
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="bg-[#0abb83] text-white font-bold
                                    px-5 py-2 rounded-md w-fit self-start sm:self-auto"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Installation;
