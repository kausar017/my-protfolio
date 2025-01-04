import Marquee from "react-fast-marquee";
import html from '../../assets/skill-logo/html.png'
import css from '../../assets/skill-logo/css.png'
import taillwind from '../../assets/skill-logo/taillwind.png'
import daisyui from '../../assets/skill-logo/daisy ui.png'
import bootstrap from '../../assets/skill-logo/bootstrap.png'
import github from '../../assets/skill-logo/github.png'
import figma from '../../assets/skill-logo/figma.png'
import javascript from '../../assets/skill-logo/javascript.png'
import react from '../../assets/skill-logo/react.png'
import photoshop from '../../assets/skill-logo/photoshop.jpg'
import firebase from '../../assets/skill-logo/firebase.png'
import mongodb from '../../assets/skill-logo/mongo db.png'

const Skills = () => {
    return (
        <div className="py-5">
            <div>
                <h1 className='text-center text-white text-4xl font-semibold'>Skills</h1>
                <div className="border-b-2 w-full max-w-60 mx-auto"></div>
                <p className="w-full max-w-[1000px] mx-auto text-center text-white py-5 px-5">"I am a skilled web developer with expertise in HTML, CSS, JavaScript, and React.js. I build responsive, user-friendly interfaces using Tailwind CSS and DaisyUI. My backend knowledge includes Node.js and MongoDB, enabling full-stack development. With a focus on clean code and modern design, I aim to create impactful solutions while continuously enhancing my skills."</p>
            </div>
            <div className="container mx-auto min-h-[200px]">
                <Marquee>
                    <div className="flex items-center gap-3 py-5">

                        {/* html */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={html} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    HTML
                                </p>
                            </a>
                        </div>
                        {/* CSS */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={css} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    CSS
                                </p>
                            </a>
                        </div>
                        {/* taillwind */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={taillwind} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    taillwind
                                </p>
                            </a>
                        </div>
                        {/* daisyui */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={daisyui} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    daisyui
                                </p>
                            </a>
                        </div>
                        {/* bootstrap */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={bootstrap} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    bootstrap
                                </p>
                            </a>
                        </div>
                        {/* github */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={github} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    github
                                </p>
                            </a>
                        </div>
                        {/* figma */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={figma} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    figma
                                </p>
                            </a>
                        </div>
                        {/* javascript */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={javascript} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    javascript
                                </p>
                            </a>
                        </div>
                        {/* react */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={react} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    react
                                </p>
                            </a>
                        </div>
                        {/* photoshop */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={photoshop} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    photoshop
                                </p>
                            </a>
                        </div>
                        {/* firebase */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={firebase} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    firebase
                                </p>
                            </a>
                        </div>
                        {/* mongodb */}
                        <div className="w-full max-w-40">
                            <a className="card-body border bg-black/20 relative rounded-md group overflow-hidden">
                                <img className="w-56" src={mongodb} alt="" />
                                <p className="text-xl text-white font-bold text-center absolute bottom-[-40px] group-hover:bottom-5 transition-all duration-300 ease-in-out uppercase bg-black/50 p-1 rounded-lg">
                                    mongodb
                                </p>
                            </a>
                        </div>

                    </div>

                </Marquee>


            </div>
        </div>
    );
};

export default Skills;