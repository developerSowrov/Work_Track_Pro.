import Banner from "../../components/Banner/Banner";
import Blog from "../../components/blog/Blog";
import Faqs from "../../components/faq/Faqs";
import Features from "../../components/features/Features";
import Job from "../../components/job/Job";
import Service from "../../components/service/Service";
import Teams from "../../components/team/Teams";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Teams></Teams>
      <Job></Job>
      <Service></Service>
      <Testimonial></Testimonial>
      <Features></Features>
      <Blog></Blog>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;
