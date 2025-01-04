
const Education = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-white text-4xl font-semibold'>Education</h1>
                <div className="border-b-2 w-full max-w-60 mx-auto"></div>
                <p className="w-full max-w-[1000px] mx-auto text-center text-white py-5 px-5">I completed my Higher Secondary Certificate (HSC) in 2021 from Gouripur Tsc College, achieving a GPA of 4.90. Currently, I am pursuing a Diploma in Computer Science at Sherpur Polytechnic Institute, with an expected completion in 2024. My academic journey reflects a strong commitment to learning and a passion for technology, which drives me to excel in my studies.

                </p>
            </div>
            <div className="md:flex justify-center items-center px-3 py-10 gap-5 max-sm:space-y-4">
                {/* HSC Card */}
                <div className="card bg-black/20 border-2 text-white shadow-xl transition hover:scale-105">
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-semibold">HSC</h2>
                        <p className="text-lg">Year: 2021</p>
                        <p className="text-lg">Institution: Gouripur Tsc College</p>
                        <p className="text-lg">Result: GPA 4.90</p>
                    </div>
                </div>

                {/* Diploma Card */}
                <div className="card bg-black/20 border-2 text-white shadow-xl transition hover:scale-105">
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-semibold">Diploma in Computer Science</h2>
                        <p className="text-lg">Year: 2024</p>
                        <p className="text-lg">Institution: Sherpur Politechnic Institute</p>
                        <p className="text-lg">Result: Grade A</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;