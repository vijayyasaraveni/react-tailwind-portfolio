import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="h-44 md:h-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2A2A2A"
            fill-opacity="1"
            d="M0,32L0,192L288,192L288,224L576,224L576,192L864,192L864,64L1152,64L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-mont text-center">
            <p className="text-gray-50 pb-5">Designed and Developed By</p>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <div className="flex text-white w-full justify-between py-3">
              <FaFacebookF />
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
              <FaMailBulk />
            </div>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <p className="text-gray-50 my-2">Vijaya Kumar Yasaraveni</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
