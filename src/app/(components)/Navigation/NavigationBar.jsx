import React, { useState } from 'react';

function NavigationBar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <div className='nav-container flex md:flex flex-row md:justify-around items-center md:p-2  sm:justify-between '>
<h1><strong>Brainwave.io</strong></h1>

   <nav className="flex items-center justify-around flex-wrap p-2">
     
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-74">
      
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         <a href="/demos" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Demos
         </a>
         <a href="/pages" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Pages
         </a>
         <a href="/support" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Support
         </a>
         <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
          Contact
         </a>
       </div>
       <div>
        <span className='text-xs text-[#D5D7DD]'>&#124;</span>
         <button className="inline-flex items-center  border-0 py-2 px-4 text-black">
           Sign in
         </button>
         <button className="inline-flex items-center bg-umbrl-blue rounded-md border-0 py-2 px-4 text-white">
           Sign Up
         </button>
       </div>
     </div>
   </nav>
   </div>
 );
}
export default NavigationBar;