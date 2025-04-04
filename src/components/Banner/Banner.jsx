import one from "../../assets/Job1-01.jpg";
import two from "../../assets/19874.jpg";
import three from "../../assets/5561930_21304.jpg";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation - 1742759872447.json";
const Banner = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-[#79554833]">
      {/* <div className="my-16 ">
        <div className="carousel rounded-box w-full">
          <div className="carousel-item w-full">
            <img
              src={two}
              className="w-full object-cover h-[500px]"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={three}
              className="w-full object-cover h-[500px]"
              alt="Tailwind CSS  Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={one}
              className="w-full object-cover h-[500px]"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div> */}
      <div className="hero  w-11/12 mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie options={defaultOption}></Lottie>
          <div>
            <h1 className="text-5xl font-bold">Simplify Your Tasks!</h1>
            <p className="py-6">
              A powerful platform that streamlines your business operations,
              saves time, and boosts productivity. Manage tasks effortlessly and
              stay organized.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
