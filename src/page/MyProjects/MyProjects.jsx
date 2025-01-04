import { Link } from "react-router-dom";
import ecoexplor from '../../assets/My Project imge/ecoexplor.jpg'
import baiker from '../../assets/My Project imge/baiker.jpg'
import chinehub from '../../assets/My Project imge/chinehub.jpg'
import foodlink from '../../assets/My Project imge/foodlink.jpg'
import mary from '../../assets/My Project imge/mary.jpg'
import Rinterio from '../../assets/My Project imge/Rinterio.jpg'
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";
const MyProjects = () => {
    return (
        <div className="container mx-auto py-10">
            <div>
                <h1 className='text-center text-white text-4xl font-semibold'>My Projects</h1>
                <div className="border-b-2 w-full max-w-60 mx-auto"></div>
            </div>
            <Fade delay={10} duration={2000} direction='right'>
                <Marquee>
                    <div className="py-10 flex  gap-3 items-center">
                        {/* eco explor */}
                        <a href="https://eco-explorer-assingment9.netlify.app/" target="blank" className="card w-full max-w-96 max-sm:w-72 max-sm:h-72">
                            <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                                <img className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3" src={ecoexplor} alt="" />
                                <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
                                    eco-explorer
                                </p>
                            </div>
                        </a>
                        {/* baiker jon */}
                        <a href="https://kausar017.github.io/Biker-zon/" target="blank" className="card w-full max-w-96 max-sm:w-72 max-sm:h-72">
                            <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                                <img className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3" src={baiker} alt="" />
                                <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
                                    baiker zon
                                </p>
                            </div>
                        </a>
                        {/* eco explor */}
                        <a href="https://b-10-a10-cine-hub.netlify.app/" target="blank" className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 ">
                            <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                                <img className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3" src={chinehub} alt="" />
                                <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
                                    chinehub
                                </p>
                            </div>
                        </a>
                        {/* eco explor */}
                        <a href="https://b10-a11-food-link-project.netlify.app/" target="blank" className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 ">
                            <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                                <img className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3" src={foodlink} alt="" />
                                <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
                                    foodlink
                                </p>
                            </div>
                        </a>
                        {/* eco explor */}
                        <a href="https://kausar017.github.io/web-developer-protfolio/" target="blank" className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 ">
                            <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                                <img className="w-full min-h-[500px] transition  hover:scale-105 hover:opacity-60 p-3" src={mary} alt="" />
                                <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
                                    mary
                                </p>
                            </div>
                        </a>
                        {/* eco explor */}
                        <a href="https://kausar017.github.io/Assingment-3/" target="blank" className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 ">
                            <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                                <img className="w-full min-h-[500px] transition  hover:scale-105 hover:opacity-60 p-3" src={Rinterio} alt="" />
                                <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
                                    Rinterio
                                </p>
                            </div>
                        </a>

                    </div>
                </Marquee>
            </Fade>
        </div>
    );
};

export default MyProjects;

