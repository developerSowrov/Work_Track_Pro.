import one from "../../assets/Job1-01.jpg";
import two from "../../assets/19874.jpg";
import three from "../../assets/5561930_21304.jpg";

const Banner = () => {
  return (
    <div>
      <div className="my-16 ">
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
      </div>
    </div>
  );
};

export default Banner;
