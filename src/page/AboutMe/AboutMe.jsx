import image from '../../assets/userimg/kausae img.png'

const AboutMe = () => {
    return (
        <>
            <div>
                <h1 className='text-center text-white text-4xl font-semibold'>About Me</h1>
                <div className="border-b-2 w-full max-w-60 mx-auto"></div>
            </div>

            <div className="lg:hero min-h- max-sm:pt-14 z-[50]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-white">
                        <h3>"Hi there! I’m Md. <span className='text-orange-400'>Kausar Mia</span>, a passionate and dedicated Frontend Developer with expertise in JavaScript, React, and modern web technologies.
                            I enjoy solving problems and am always eager to learn new things. My goal is to create user-friendly and efficient web applications that make a positive impact on people's lives.

                            I completed my SSC in 2019 and HSC in 2021. Currently, I hold a diploma degree in Computer Science. Programming is my passion, and I aspire to become a successful Full-Stack Developer in the future.</h3>
                        <div>
                            <span> Skills:</span>
                            <p> 1) Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS</p>
                            <p> 2) Backend: Node.js (currently learning)</p>
                            <p> 3) Tools: Git, VS Code, Figma</p>
                            Feel free to get in touch to discuss your projects. My goal is to ensure better services for everyone through technology."
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-full lg:max-w-[1200px] md:w-96' src={image} alt="" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutMe;