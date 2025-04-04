import Banner from "../../components/Banner/Banner";
import Blog from "../../components/blog/Blog";
import Faqs from "../../components/faq/Faqs";
import Features from "../../components/features/Features";
import Job from "../../components/job/Job";
import Service from "../../components/service/Service";
import Teams from "../../components/team/Teams";
import Testimonial from "../../components/testimonial/Testimonial";
// import PopularChart from "../char/PopularChart";
// import Charts from "../char/PopularChart";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Teams></Teams>
        <Job></Job>
        <Service></Service>
        <Testimonial></Testimonial>
        {/* <Features></Features> */}
        <Blog></Blog>
        <Faqs></Faqs>
      </div>
      {/* <PopularChart></PopularChart> */}
    </div>
  );
};

export default Home;
