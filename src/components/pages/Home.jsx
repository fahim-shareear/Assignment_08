import React from 'react';
import Hero from '../../assets/hero.png';
import Googleplay from '../../assets/Google_Play_2022_logo.svg';
import Applstorelogo from '../../assets/apple-app-store.svg';
import Counter from '../counter/Counter';
import Homegrid from '../Griddata/Homegrid';


const appPromise = fetch('/Appdata.json').then(res => res.json());

const Home = () => {
    return (
        <div className="w-full bg-gray-200">
            {/* banner section */}
          <div className="max-w-11/12 mx-auto flex items-center flex-col container-banner">
            <div className="mx-auto lg:max-w-200 text-center mt-10">
                <h1 className="text-5xl text-wrap font-semibold text-black">We Build <br /><span className="text-[#8855ea] font-extrabold">Productive</span> Apps</h1>
                <p className="mt-10 text-gray-400">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter and more exiting. Our goal is to turn your ideas into digital experiences that tryly make an impact</p>
            </div>
            <div className="flex items-center gap-10 mt-10">
                <button className="border border-white w-35 h-11 bg-gray-100 shadow rounded p-1"><a href="https://play.google.com/store" target='_blank'><img src={Googleplay} alt="googleplayapp" /></a></button>
                <button className="border border-white w-35 h-11 bg-gray-100 shadow rounded p-1"><a href="https://www.apple.com/app-store/" target='_blank' className="flex items-center gap-2 mx-auto text-black font-bold"><img src={Applstorelogo} alt="appleappstore" className="w-8 h-9"/>App Store</a></button>
            </div>
            <div className="mt-10">
                <img src={Hero} alt="heroimg" />
            </div>
          </div>

          {/* counter section for info */}
          <div className="bg-linear-to-r from-purple-600 to-purple-500 text-white py-10">
                <h2 className="text-3xl font-bold text-center mb-12 p-2">
                    Trusted By Millions, Built For You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 text-center">
                    <div>
                        <p className="text-sm opacity-80">Total Downloads</p>
                        <h3 className="text-4xl font-bold">
                            <Counter end={29600000} suffix="+" />
                        </h3>
                        <p className="text-sm opacity-70">21% More Than Last Month</p>
                    </div>

                    <div>
                        <p className="text-sm opacity-80">Total Reviews</p>
                        <h3 className="text-4xl font-bold">
                            <Counter end={906000} suffix="+" />
                        </h3>
                        <p className="text-sm opacity-70">46% More Than Last Month</p>
                    </div>

                    <div>
                        <p className="text-sm opacity-80">Active Apps</p>
                        <h3 className="text-4xl font-bold">
                            <Counter end={132} suffix="+" />
                        </h3>
                        <p className="text-sm opacity-70">31 More Will Launch</p>
                    </div>
                </div>
            </div>

            {/* Trending app section */}
            <div className="w-full mt-10">
                <div className="lg:max-w-11/12 mx-auto  p-5">
                    <div className="title mx-auto text-center ">
                        <h1 className='text-3xl font-bold text-black'>Trending Apps</h1>
                        <p className="text-[13px] font-semibold text-gray-400">Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    <div className=" mx-auto lg:mt-10 ">
                        <Homegrid appPromise={appPromise}></Homegrid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;