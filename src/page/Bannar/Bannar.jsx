import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import image from '../../assets/userimg/kausae img.png'
import { FiGithub } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io';
import cv from '../../assets/cv/kauserCV.pdf'
import { Link } from 'react-scroll';
const Bannar = () => {
    return (

        <>
            <div className="lg:hero min-h-[700px] max-sm:pt-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className=''>
                            <img className='w-full lg:max-w-[1200px] md:w-96' src={image} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <img
                            src="https://readme-typing-svg.herokuapp.com?color=FFFFFF&size=50&true&vCenter=true&width=550&height=80&lines=Hi I'm+Kausar+Mia;A+Student+Developer;A+Problem+Solver&font=bold"
                            alt="Typing SVG"
                        />
                        <h1 className="text-5xl font-bold text-white">Fontend <span className="text-orange-500">Developer</span></h1>
                        <p className="text-white pt-3">"I am Kausar Mia, a passionate and dedicated full-stack developer with expertise in JavaScript, React, and modern web technologies. I focus on creating clean, user-friendly interfaces and efficient solutions. With a commitment to continuous learning and problem-solving, I aim to deliver impactful projects and grow as a developer while helping others through technology."</p>
                        <div className='space-x-5 my-5'>
                            <a href={cv} download className='btn bg-[#00B4FF] btn-ghost hover:bg-white'>Download CV</a>
                            <Link to="contact" smooth={true} duration={500} className='btn btn-outline text-white hover:bg-white hover:text-black'>contact me</Link>
                        </div>
                        {/* sosal link */}
                        <div className='flex gap-3'>
                            <a href='https://web.facebook.com/kausar017' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><FaFacebookF size={20} color='white'></FaFacebookF></a>
                            <a href='https://www.linkedin.com/in/kousar-mia-2103ab214/' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><FaLinkedinIn size={20} color='white'></FaLinkedinIn ></a>
                            <a href='https://github.com/kausar017' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><FiGithub size={20} color='white'></FiGithub ></a>
                            <a href='https://www.instagram.com/md.kousar_mia/?hl=bn' target='_blank' className='border-2 p-2 rounded-full cursor-pointer hover:bg-white/10'><IoLogoInstagram size={20} color='white'></IoLogoInstagram ></a>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>



    );
};

export default Bannar;



