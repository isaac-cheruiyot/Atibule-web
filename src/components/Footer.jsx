import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-[#d9f99d]'>
      <div className="w-5/6 mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-4 gap-8 py-8 md:py-12  ">

          {/* 1st block */}
          
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</Link>
              </li>                            
            </ul>
          </div>

          {/* 2nd block */}
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>          

        </div>

        {/* Bottom area */}
        <div className="md:flex  md:items-center md:justify-between py-4 md:pt-20 md:pb-12 border-t border-[#a3e635">
        {/* 1st block */}
        <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="atibule">
                <img src="/atibule-fd-mn.png" alt="atibule" className='w-28 '/>
              </Link>
            </div>
            
          </div>
          {/*  */}
          <div className='flex flex-col justify-between mt-4 md:items-center'>{/* Social links */}
          <ul className="flex mb-4  md:ml-4 md:mb-0">
            <li>
              <Link to="#" className="" aria-label="Twitter">
                <FaXTwitter size={30} className=''/>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="#" className="" aria-label="Github">
                <FaGithub size={30} className=''/>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="#" className="" aria-label="Facebook">
                <FaFacebook size={30} className=''/>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="#" className="" aria-label="YOUTUBE">
                <FaYoutube size={30} className=''/>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="#" className="" aria-label="Instagram">
                <FaInstagram size={30} className=''/>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm mt-8 text-gray-600 mr-4">© 2025 <a className="text-[#65a30d] hover:underline" href="https://atibule.com/">atibule, </a>. All rights reserved.</div>

        {/* 3rd block */}
        
        </div>
        </div>
        <div className="text-sm pb-8 gap-8 flex justify-start items-center text-gray-600">
              <Link to="#" className="text-gray-600 text-lg font-light hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> ·  <Link to="#" className="text-gray-600 hover:text-gray-900 text-lg font-light    hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
      </div>
    </footer>
  );
}

export default Footer;
