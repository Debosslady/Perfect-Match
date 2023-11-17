import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-sm px-4">
      <div className="container mx-auto p-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-l font-bold mt-24">My Perfect Match</h3>
            <p className="mt-4 text-sm">
              Connect with the best ladies around your neighbourhood that has the qualities and character you desire
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio optio, et delectus, quasi aspernatur 
              impedit vitae tempora quaerat eaque dicta neque corrupti nostrum itaque esse officia minus libero! Quod, voluptates.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-l font-bold">Useful Links</h4>
            <ul className="mt-4">
              <li className="flex items-center">
                <i className="ion-ios-arrow-right text-l mr-2"></i>
                <a href="#">Home</a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-right text-l mr-2"></i>
                <a href="#">About us</a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-right text-l mr-2"></i>
                <a href="#">Services</a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-right text-l mr-2"></i>
                <a href="#">Terms of service</a>
              </li>
              <li className="flex items-center">
                <i className="ion-ios-arrow-right text-l mr-2"></i>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-l font-bold">Contact Us</h4>
            <p className="mt-4 text-sm">
              Port Harcourt<br />
              Rivers State, 5500001<br />
              Nigeria<br />
              Phone: +234 905 5817 159 <br />
              Email: debosslad17@gmail.com<br />
            </p> 
          </div>

          <div className="col-span-1">
            <h4 className="text-l font-bold">Our Newsletter</h4>
            <p className="mt-4 text-sm">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum culpa amet magna export quem marada parida nodela caramase seza.
            </p>
            <form className="mt-4">
              <input type="email" name="email" placeholder="Your email" className="bg-white p-2 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-blue-500 text-white p-2  mt-4 rounded-r-md hover:bg-blue-600 focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto text-center text-sm">
          &copy; Copyright My Perfect Match. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
