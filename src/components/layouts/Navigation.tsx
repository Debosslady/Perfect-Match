"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import useScroll from '@/components/NavbarScrollEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faBars } from '@fortawesome/free-solid-svg-icons'



export default function Navigation(){
    const [navbar, setNavbar] = useState(false);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    useScroll((scrollPosition) => {
        if (scrollPosition > 50) {setNavbarBg('bg-[#F8FBFF]');} else {setNavbarBg('bg-transparent');}
    });

    return (
        <header>
            <div className="mb-1">
                <nav className={`w-full fixed top-0 md:px-5 z-10 ${navbarBg}`}>
                    <div className="justify-between mx-auto md:items-center md:flex py-3  md:container">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="md:hidden px-4">
                                    <button
                                        className="text-white rounded-md outline-none"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <FontAwesomeIcon icon={faXmark} className="text-lg text-[#0067FC]" />
                                        ) : (
                                            <FontAwesomeIcon icon={faBars} className="text-lg text-[#0067FC]"/>
                                        )}
                                    </button>
                                </div>
                                
                                <Link href="/" className={`md:px-0 md:pb-3 ${navbar ? 'hidden' : 'block'}`}>
                                    <Image src="/images/Logo.svg" width={140} height={70} alt="logo" className="logo" priority={true}/>
                                </Link>

                                <div className="md:hidden px-4">
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="grid md:grid-cols-12 float-right">
                                <div className="col-span-12">
                                    <div className={`flex pb-3 md:block md:pb-0 sm:mt-[-20px] mt-[-62px] md:mt-0 md:ml-0 md:p-0 ${navbar?'block':'hidden'}`}>
                                        <ul className="bg-blue-100 md:bg-transparent h-screen md:h-auto md:flex pl-3 py-4 md:py-0 px-4 md:px-0">
                                            <div  className={`pt-10  md:pt-0 pb-5 px-1 md:hidden ${navbar ? 'block':'hidden'}`}>
                                                <Image src="/images/Logo.svg" width={140} height={70} alt="logo" className="logo" priority={false}/>
                                            </div>
                                            <li className="pb-6 text-md text-black py-3">
                                                <Link href="/" className="hover:text-blue-700 text-black md:px-8 font-bold">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="pb-6 text-md text-black py-3">
                                                <Link href="/how-it-works" className="hover:text-blue-700 text-black md:px-8 font-bold">
                                                    How it works
                                                </Link>
                                            </li>
                                            
                                            <li className="pb-6 text-md text-black py-3">
                                                <Link href="https://forms.gle/hFMKF9DvJ8brSHnc9" target="_blank" className="bg-[#0067FC] text-white px-4  rounded-[23px] py-2 hover:text-[#0067FC] border border-[#0067FC] hover:bg-white">
                                                    Get Started
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
            
    );
};
