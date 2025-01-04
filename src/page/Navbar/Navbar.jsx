import { NavLink } from "react-router-dom";

const Navbar = () => {

    const link =
        <>

            <NavLink><a className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Home</a></NavLink>
            <NavLink><a className="btn btn-sm btn-ghost text-lg text-black lg:text-white">About</a></NavLink>
            <NavLink><a className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Skill</a></NavLink>
            <NavLink><a className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Services</a></NavLink>
            <NavLink><a className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Contact</a></NavLink>

        </>

    return (
        <div
        

            className="text-white fixed w-full">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">KAUSAR MIA</a>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-outline text-white">DOWNLOAD</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;