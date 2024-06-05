import React from "react";
// import { backbrain, cargame, frontbrain } from "./components/assests/assest";

import { Button, Navbar } from "flowbite-react";
export default function Header() {
  return (
    <header>
      <div className='header-inner fixed flex justify-a bg-amber-800 h-20 bg-opacity-44 rounded-lg'>
        <div className='logo text-purple-900 ml-6'>Ecast Portifolio</div>
        <nav className="">
          <ul className="flex justify-between">
            <li className=" btn">
              <a href='/' className="text-white">Home</a>
            </li>
            <li>
              <a href='/' className="text-white">About</a>
            </li>
            <li>
              <a href='/' className="text-white">Discover</a>
            </li>
            <li>
              <a href='/' className="text-white">products</a>
            </li>
            <li className=''>
              <a href='/' className="text-white">contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // flowbite navbar
    // <Navbar fluid rounded className='bg-amber-600' >
    //   <Navbar.Brand href="https://flowbite-react.com">
    //     <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ecast portifolio</span>
    //   </Navbar.Brand>
    //   <div className="flex md:order-2">
    //     <Button>Get in touch with me</Button>
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse>
    //     <Navbar.Link href="#" active>
    //       Home
    //     </Navbar.Link>
    //     <Navbar.Link href="#">About</Navbar.Link>
    //     <Navbar.Link href="#">Services</Navbar.Link>
    //     <Navbar.Link href="#">Contact</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}
