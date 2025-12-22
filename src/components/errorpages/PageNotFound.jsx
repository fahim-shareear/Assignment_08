import React from 'react';
import Pagenotfound from '../../assets/error-404.png';
import { Link } from 'lucide-react';
import { NavLink } from 'react-router';

const PageNotFound = () => {
    return (
        <div className="w-full h-[60vh]">
            <div className="lg:max-w-11/12 flex items-center flex-col mt-20">
                <img src={Pagenotfound} alt="error 404" width={400} height={400} className="mb-5"/>
                <h1 className="font-bold text-4xl mt-4 p-2 text-black">Oops, page not found!</h1>
                <p className="text-gray-400 text-[18px] p-2">The page you are looking for is not available</p>
                <button className="p-1 bg-linear-to-br from-purple-600 to bg-purple-500 rounded-md text-[13px] font-bold btn border-none h-7.5 w-20">Go Back!</button>
            </div>
        </div>
    );
};

export default PageNotFound;