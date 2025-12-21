import React, { use } from 'react';
import Griddata from './Griddata';

const Homegrid = ({appPromise}) => {
    const promises = use(appPromise);
    // console.log(promises)
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {
                    promises.slice(0, 8).map(promise => <Griddata promise={promise} key={promise.id}></Griddata>)
                }
            </div>
            <div className="flex items-center justify-center mt-10">
                <button className="btn border-none rounded-md font-semibold text-[14px] p-1 w-30 cursor-pointer bg-linear-to-br from-purple-800 to-purple-400">Show All</button>
            </div>
        </div>
    );
};

export default Homegrid;