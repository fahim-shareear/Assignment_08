import React from 'react';
import Downloadicon from '../../assets/icon-downloads.png';
import Ratingicon from '../../assets/icon-ratings.png';

const Griddata = ({promise}) => {
    // console.log(promise);
    return (
        <div className="rounded-xl overflow-hidden bg-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="p-3">
                <img src={promise.image} alt="appimg" className="rounded-xl w-full aspect-square object-cover"/>
            </div>
            <div className="p-2">
                <h1 className="font-bold text-black">{promise.title}</h1>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2 bg-gray-200 p-1 rounded-md">
                        <img src={Downloadicon} alt="downloadicon" className="w-4 h-4"/>
                        <p className="text-green-500 font-bold">{promise.downloads}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-200 p-1 rounded-md">
                        <img src={Ratingicon} alt="ratingicon" className="w-4 h-4"/>
                        <p className="text-green-500 font-bold">{promise.ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Griddata;