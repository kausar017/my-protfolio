import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import logo from '../../assets/userimg/kausae img.png'
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="bg-black/50">
            <footer className="footer container mx-auto text-neutral-content p-10">
                <aside>
                    <img className="max-w-20" src={logo} alt={logo} />
                    <p>
                        Md.kausar mia
                        <br />
                        mdkousarmia71@gmail.com
                        <br />
                        Providing reliable tech since 2024
                    </p>
                </aside>
                <nav>

                    <div>
                        <Link to="home" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Home</Link>
                        <Link to="about" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">About</Link>
                        <Link to="skills" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Skills</Link>
                        <Link to="projects" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="btn btn-sm btn-ghost text-lg text-black lg:text-white">Contact</Link>
                    </div>

                    <h6 className="footer-title">Social</h6>
                    {/* sosal link */}
                    <div className='flex gap-3'>
                        <a href='https://web.facebook.com/kausar017' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><FaFacebookF size={20} color='white'></FaFacebookF></a>
                        <a href='https://www.linkedin.com/in/kousar-mia-2103ab214/' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><FaLinkedinIn size={20} color='white'></FaLinkedinIn ></a>
                        <a href='https://github.com/kausar017' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><FiGithub size={20} color='white'></FiGithub ></a>
                        <a href='https://www.instagram.com/md.kousar_mia/?hl=bn' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><IoLogoInstagram size={20} color='white'></IoLogoInstagram ></a>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;