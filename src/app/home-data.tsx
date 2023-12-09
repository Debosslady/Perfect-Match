 import Image from "next/image"

export default function FindaWife( ) { 
const name = ''
  return (
    <>   
        <div
            className="bg-cover bg-center h-screen relative bg-blend-lighten md:bg-blend-darken"
            style={{ backgroundImage: "url('/assets/img/download (5).jfif')" }} 
            >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-5xl">
                <h1 className="text-center animate-bounce">Welcome to My Perfect Match</h1>
                <p className="text-lg text-center animate-bounce">
                Connect with the best ladies around your neighbourhood that has the qualities and character you desire
                </p>
            </div>
        </div>

        <div className="bg-gray-800 text-white">
            <div className="container mx-auto mt-0 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-700 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Lorem ipsum </h2>
                        <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-700 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Lorem ipsum </h2>
                        <p className="text-sm">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-700 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Lorem ipsum </h2>
                        <p className="text-sm">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-12 p-4 text-center">
            <div>
                <h2 className="text-3xl font-bold mb-3">About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio at turpis lacinia pharetra.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio at turpis lacinia pharetra.
                </p>
            </div> 
        </div>

        <div className="text-grey-800">
            <div className="container mx-auto mt-4 p-4 pb-12 " data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 wow fadeInUp">
                    <div className="shadow-lg">
                        <img
                        src="/assets/img/image.jpg"
                        alt="Image 1"
                        className="w-full max-h-42 mx-auto"
                        />
                        <h2 className="text-xl font-bold text-center mt-4 ">Our Vision</h2>
                        <p className="mx-4 pb-8 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="shadow-lg">
                        <img
                        src="/assets/img/download.jfif"
                        alt="Image 2"
                        className="w-full max-h-50 mx-auto"
                        /> 
                        <h2 className="text-xl font-bold text-center mt-4 ">Our Mission</h2>
                        <p className="mx-4 pb-8 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="shadow-lg">
                        <img
                        src="/assets/img/download (4).jfif"
                        alt="Image 3"
                        className="mx-auto w-full max-h-60 "
                        />
                        <h2 className="text-xl font-bold text-center mt-4 ">Our Plan</h2>
                        <p className="mx-4 pb-8 text-sm">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                        
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Image src="/assets/img/download (4).jfif" width={1450} height={0} alt="logo" />
            </div>
        </div>  
    </>
  )
}