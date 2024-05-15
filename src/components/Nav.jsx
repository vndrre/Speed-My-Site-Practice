import { useState } from "react"

import logo from '../assets/speedmysite.svg'


export default function Nav(){   
    let Links =[
        {name:"Home",link:"#home"},
        {name:"About Us",link:"#about"},
        {name:"Works",link:"#works"},
        {name:"Blog",link:"#blog"},
      ];
    
    let [open,setOpen]=useState(false);

    return (
        <nav className="text-[#1A1A1A] w-full fixed top-0 left-0 font-main">
            <div className="md:flex md:justify-between md:py-10 bg-gray-100 bg-opacity-95 backdrop-blur-md py-4 md:px-12 px-5">
                <div className="font-bold text-2xl cursor-pointer flex justify-between items-center md:scale-110"> 
                    <img src={logo} alt="" />
                </div>
                
                <div className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex text-[18px] md:gap-14 md:hover:text-black md:items-center md:pb-0 pb-5 pt-5 md:pt-0 absolute md:static bg-gray-100 bg-opacity-95 backdrop-blur-lg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                transition-all duration-500 ease-in md:text-center ${open ? 'top-10':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className="md:opacity-85 md:hover:opacity-100 duration-500 md:my-0 my-7">
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}