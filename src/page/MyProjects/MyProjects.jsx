import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
const MyProjects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./Detals.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);

  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <h1 className="text-center text-white text-4xl font-semibold">
            My Projects
          </h1>
          <div className="border-b-2 w-full max-w-60 mx-auto"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <Marquee pauseOnHover={true}>
          <div className="py-10 flex  gap-3 items-center">
            {data?.map((item, i) => (
              <div
                key={i}
                target="blank"
                className="card w-full max-w-96 max-sm:w-72 max-sm:h-72"
              >
                <div className="bg-black/20 relative rounded-md group overflow-hidden border">
                  <img
                    className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3"
                    src={item?.image}
                    alt={item?.image}
                  />
                  <div className="text-xl text-white absolute font-bold bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out w-full  bg-black/50 p-2 rounded-lg uppercase">
                    <div className="flex flex-col justify-center gap-5">
                      <a
                        href={item?.Live_Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm text-white hover:bg-white/30"
                      >
                        {item?.name}
                        <FaArrowUpRightFromSquare />
                      </a>
                      <Link
                        className="btn btn-outline btn-sm text-white hover:bg-white/30"
                        to={item?.github_Client}
                        target="_blank"
                      >
                        github_Client <FaArrowUpRightFromSquare />
                      </Link>
                      {item?.github_sirver && (
                        <Link
                          className="btn btn-outline btn-sm text-white hover:bg-white/30"
                          to={item?.github_sirver}
                          target="_blank"
                        >
                          github_sirver <FaArrowUpRightFromSquare />
                        </Link>
                      )}
                      <Link
                        to={`/detals/${item?.id}`}
                        className="btn btn-outline btn-sm text-white hover:bg-white/30"
                      >
                        Detals <FaArrowUpRightFromSquare />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MyProjects;

// className="text-xl text-white font-bold bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase"

// <Marquee pauseOnHover={true}>
// <div className="py-10 flex  gap-3 items-center">
//   {/* eco explor */}
//   <div
//     href="https://eco-explorer-assingment9.netlify.app/"
//     target="blank"
//     className="card w-full max-w-96 max-sm:w-72 max-sm:h-72"
//   >
//     <div className="bg-black/20 relative rounded-md group overflow-hidden border">
//       <img
//         className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3"
//         src={ecoexplor}
//         alt=""
//       />
//       <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
//         eco-explorer
//       </p>
//     </div>
//   </div>
//   {/* baiker jon */}
//   <a
//     href="https://kausar017.github.io/Biker-zon/"
//     target="blank"
//     className="card w-full max-w-96 max-sm:w-72 max-sm:h-72"
//   >
//     <div className="bg-black/20 relative rounded-md group overflow-hidden border">
//       <img
//         className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3"
//         src={baiker}
//         alt=""
//       />
//       <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
//         baiker zon
//       </p>
//     </div>
//   </a>
//   {/* chinehub */}
//   <a
//     href="https://b-10-a10-cine-hub.netlify.app/"
//     target="blank"
//     className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 "
//   >
//     <div className="bg-black/20 relative rounded-md group overflow-hidden border">
//       <img
//         className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3"
//         src={chinehub}
//         alt=""
//       />
//       <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
//         chinehub
//       </p>
//     </div>
//   </a>
//   {/* foodlink */}
//   <a
//     href="https://b10-a11-food-link-project.netlify.app/"
//     target="blank"
//     className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 "
//   >
//     <div className="bg-black/20 relative rounded-md group overflow-hidden border">
//       <img
//         className="w-full min-h-[500px] object-cover transition hover:scale-105 hover:opacity-60 p-3"
//         src={foodlink}
//         alt=""
//       />
//       <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
//         foodlink
//       </p>
//     </div>
//   </a>
//   {/*mary */}
//   <a
//     href="https://kausar017.github.io/web-developer-protfolio/"
//     target="blank"
//     className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 "
//   >
//     <div className="bg-black/20 relative rounded-md group overflow-hidden border">
//       <img
//         className="w-full min-h-[500px] transition  hover:scale-105 hover:opacity-60 p-3"
//         src={mary}
//         alt=""
//       />
//       <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
//         mary
//       </p>
//     </div>
//   </a>
//   {/* Rinterio */}
//   <a
//     href="https://kausar017.github.io/Assingment-3/"
//     target="blank"
//     className="card w-full max-w-96 max-sm:w-72 max-sm:h-72 "
//   >
//     <div className="bg-black/20 relative rounded-md group overflow-hidden border">
//       <img
//         className="w-full min-h-[500px] transition  hover:scale-105 hover:opacity-60 p-3"
//         src={Rinterio}
//         alt=""
//       />
//       <p className="text-xl text-white font-bold absolute bottom-[-250px] group-hover:bottom-4 transition-all duration-300 ease-in-out  bg-black/50 p-2 rounded-lg uppercase">
//         Rinterio
//       </p>
//     </div>
//   </a>
// </div>
// </Marquee>
