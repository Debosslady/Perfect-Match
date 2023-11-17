import Image from 'next/image'
import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
const Footer = () =>{

    const currentDate: Date = new Date();
    const year: number = currentDate.getFullYear();

    return(
        <>
            <div className="bg-gray-50 justify-center w-full ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-purple-900 gap-5 md:gap-10 py-10 justify-center items-center p-10  md:p-20">
                        <div className="mt-10">
                            <Image src="/images/logo1.png" width={350} height={300} alt="logo" />
                        </div>
                        <h4 className="text-white leading-[40px] font-semi flex flex-col text-50 uppercase gap-3 mt-5">
                            <span>mon - fri : 8am - 6pm </span>
                            <span>sat - sun: 9am - 7pm</span>  
                            <span>Health assistants available:24/7</span> 
                        </h4>
                        <p className="text-white  leading-14 font-semi text-50 uppercase  mt-10">for enqueries, call 08023710815</p>
                    </div>
                    <div className="">
                        <Image src="/images/footer-img.png"  width={400} height={400} alt="building" className="w-[100%]" />
                    </div>
                </div>
                <div className="bg-white py-20 px-10">
                    <div className="grid grid-cols-1 md:grid-cols-5  gap-10 md:p-5">
                        <div className=""> 
                            <div className="ml-[-10px] md:ml-0">
                                <Image src="/images/trademark.png" width={300} height={300} alt="logo" />
                            </div>
                            
                            <h4 className="py-4 md:px-2 mt-4">6B, Inwelle Close Gbagada,</h4>
                            <h4 className="md:px-2">Lagos, Nigeria</h4>
                        </div>
                        <div className="">
                            <h3 className="text-blue-700">Company</h3>
                            <div className="mt-7">
                                <div className="py-3">
                                    <Link href="#">About</Link>
                                </div>
                                <div className="py-3">
                                    <Link href="#">Services</Link>
                                </div>
                                <div className="py-3">
                                    <Link href="#">Careers</Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-blue-700">Products</h3>
                            <div className="mt-7">
                                <div className="py-3">
                                    <Link href="#">Sicbay</Link>
                                </div>
                                <div className="py-3">
                                    <Link href="#">RendaPrescb</Link>
                                </div>
                                <div className="py-3">
                                    <Link href="#">Mail Order Phamarcy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-blue-700">Legal</h3>
                            <div className="mt-7">
                                <div className="py-3">
                                    <Link href="#">Terms of Services</Link>
                                </div>
                                <div  className="py-3">
                                    <Link href="#" className="py-2">Privacy Policy</Link>
                                </div>
                                <div className="py-3">
                                    <Link href="#" className="py-2">Refund Policy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="">
                                {/* <div className="flex justify-left gap-5 text-[#000E62] text-2xl">
                                    <div>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </div>
                                    <div className="px-2">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <div className="px-2">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                </div> */}
                                <h4 className="mt-9">Mon - fri: 8am - 6pm</h4>
                                <h4 className="py-5">sat - sun: 9am - 7pm</h4>
                                <h4 className="py-2">Health assistants available:24/7</h4>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <hr />
                    </div>
                    <div className="md:flex md:p-5">
                        <p className="text-gray-300">© {year} RandaHealth, All Rights Reserved.</p>
                        <p className="text-gray-300  mt-5 md:mt-0">Site Credit</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer