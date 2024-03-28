// components/Navbar.js
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name on the left */}
        <p className="text-xl font-semibold">Dad Jokes</p>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-16">
          <Link href="/home" className="hover:text-gray-600">Home</Link>
          <Link href="/about" className="hover:text-gray-600">Saved Jokes</Link>
          
        
          
          
        </div>

        {/* Login Button on the right */}
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
