import { Search } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import Gridforapppage from './Gridforapp/Gridforapppage';

const Apps = () => {
    const appsData = useLoaderData();
    // console.log(appsData);
    return (
        <div className=" max-w-full">
            <div className="apps-banner lg:max-w-11/12 mx-auto  flex items-center justify-center flex-col p-5">
                <h1 className="text-black font-bold text-4xl p-4">Our All Applications</h1>
                <p className="text-gray-500 text-wrap text-center">Explore All Apps on the Market developed bu us. We code for Millions</p>
            </div>
            <div className="apps-banner">
                <div className="flex items-center justify-between lg:max-w-11/12  mx-auto m-2">
                    <div>
                        <h3 className="text-black font-bold p-2">(132) Apps Found</h3>
                    </div>
                    <div className="flex items-center border border-gray-400 mr-2">
                        <span><Search className="w-5 h-5"></Search></span><input type="search" name="search" id="" placeholder='Search Apps' className="h-90% text-black p-1"/>
                    </div>
                </div>
                <div className="lg:max-w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-3 m-3 p-4">
                    {
                        appsData.map(appsshow => <Gridforapppage appsshow={appsshow} key={appsshow.id}></Gridforapppage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;