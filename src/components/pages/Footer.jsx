import React from 'react';
import Logo from '../../assets/logo.png';
import { Codepen, Facebook, Github, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className="bg-[#001931]  mx-auto rounded-t-xl max-h-75">
            <div className="m-5 lg:max-w-11/12 mx-auto p-2 flex items-center justify-between">
                <div className="border-2 border-red-500 max-w-150">
                    <div className="flex items-center ml-1">
                        <img src={Logo} alt="logo" className="w-10 h-10"/>
                        <h1 className="uppercase font-bold text-purple-500">hero.io</h1>
                    </div>
                    <p className="text-[13px] text-left p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus facilis vero aut consequuntur fugit hic sed nulla reiciendis doloremque itaque, blanditiis placeat, error maiores minus molestiae, ducimus non nesciunt veritatis corporis inventore nisi? Laboriosam in harum ipsam sint vero corrupti nesciunt laborum dignissimos dolores, debitis eum quae aliquam. Inventore, eaque!</p>
                </div>
                <div className="max-w-150">
                    <h1 className="capitalize font-bold p-1">about us</h1>
                    <p className="text-[13px] p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolor soluta, corrupti iusto tempora cumque, dicta natus enim veritatis ad asperiores, quae aliquid cum commodi praesentium dolores neque reprehenderit minus.</p>
                </div>
                <div>
                   <div className="flex items-left flex-col">
                    <h1 className="capitalize font-bold mb-1">social links</h1>
                        <Facebook className="rounded-full bg-[#03315b] hover:bg-[#034888] transition-all duration-400 linear cursor-pointer p-1"></Facebook>
                        <Github className="rounded-full bg-[#03315b]   hover:bg-[#034888] transition-all duration-400 linear cursor-pointer p-1"></Github>
                        <Codepen className="rounded-full bg-[#03315b]  hover:bg-[#034888] transition-all duration-400 linear cursor-pointer p-1"></Codepen>
                        <Twitter className="rounded-full bg-[#03315b]  hover:bg-[#034888] transition-all duration-400 linear cursor-pointer p-1"></Twitter>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;