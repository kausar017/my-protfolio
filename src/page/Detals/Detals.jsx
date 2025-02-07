import { Fade } from "react-awesome-reveal";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuCircleArrowOutUpLeft } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"; // ✅ react-scroll এর পরিবর্তে react-router-dom

export default function Detals() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="text-white container mx-auto py-10">
      {data ? (
        <div
          className="hero min-h-[900px]"
          style={{
            backgroundImage: `url(${data?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay"></div>

          <div className="text-white text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
            <h1 className="mb-5 text-5xl font-bold">{data?.name}</h1>
            <p className="text-2xl">Technology Client Side</p>

            {/* Technology Section */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg font-semibold text-gray-200 mt-5">
              {data?.technology_client_side?.map((tech, index) => (
                <Fade delay={10} duration={2000} direction="up">
                  <div
                    key={index}
                    className="p-3 bg-white/20 rounded-lg shadow-md backdrop-blur-sm text-center"
                  >
                    {tech}
                  </div>
                </Fade>
              ))}
            </div>

            {data?.technology_server_side && (
              <div>
                <p className="text-2xl mt-3">Technology Server Side</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg font-semibold text-gray-200 mt-5">
                  <Fade delay={10} duration={2000} direction="up">
                    {data?.technology_server_side?.map((tech, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white/20 rounded-lg shadow-md backdrop-blur-sm text-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </Fade>
                </div>
              </div>
            )}

            {/* Buttons */}
            <Fade delay={10} duration={2000} direction="up">
              <div className="space-x-3 pt-5">
                <a
                  href={data?.Live_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white/20 rounded-lg shadow-md backdrop-blur-sm"
                >
                  Live <FaArrowUpRightFromSquare />
                </a>

                <Link
                  to="/"
                  className="btn bg-white/20 rounded-lg shadow-md backdrop-blur-sm"
                >
                  <LuCircleArrowOutUpLeft /> Back To Home
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
