// components/Navbar.js
'use client';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ModeToggle } from './mode-toggle-button';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 p-3 px-8 border-b border-gray-100">
      <div className="mx-auto flex justify-between items-center w-full">
        {/* Group Brand Name and Navigation Links together on the left */}
        <div className="flex items-center gap-8">
          <p className="text-xl font-semibold">Dad Jokes</p>
          <Link href="/" className= "text-sm text-muted-foreground hover:text-gray-600">
            Home</Link>
          <Link href="/saved-jokes" className="text-sm text-muted-foreground hover:text-gray-600">
            Saved Jokes</Link>
          {/* You can add more links here if necessary */}
        </div>

        <div className='flex items-center gap-4'>
          <ModeToggle />
          {/* <Login or logout>*/}
          <Button>Login</Button>
        </div>

        {/* Keep the Login Button on the right */}
        
      </div>
    </nav>
  );
}; 

export default Navbar;
