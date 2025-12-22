import React from 'react';
import Appnotfound from '../../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div className="w-full h-[50vh]">
            <div className="lg:max-w-11/12 flex items-center justify-center flex-col">
                <img src={Appnotfound} alt="appnotfound" width={500} height={500}/>
                <h1 className="text-blck font-bold text-3xl mt-3">OOPS!! APP NOT FOUND</h1>
                <p className="text-gray-400 text-[18px] p-1">The app you are requesting is not found on our system. Please try another apps</p>
                <button className="p-1 bg-linear-to-br from-purple-600 to bg-purple-500 rounded-md text-[13px] font-bold btn border-none h-7.5 w-20">Go Back!</button>
            </div>
        </div>
    );
};

export default AppNotFound;