import { Link } from 'react-scroll'; // react-scroll থেকে Link ইমপোর্ট
import cv from '../../assets/cv/kauserCV.pdf'

const Navbar = () => {

    const link =
        <>
            {/* "smooth" বাটন অ্যাড করা, স্ক্রলিং স্মুথ হবে */}
            <Link to="home" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Home</Link>
            <Link to="about" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">About</Link>
            <Link to="skills" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Skills</Link>
            <Link to="projects" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Contact</Link>
        </>

    return (
        <div className="text-white fixed w-full z-10">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2">
                            {link}
                        </ul>
                    </div>
                    <Link to="home" smooth={true} duration={500} className="btn btn-ghost text-xl">KAUSAR MIA</Link>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>
                    <div>
                        <a href={cv} download className='btn btn-outline text-white hover:bg-white/20'>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
