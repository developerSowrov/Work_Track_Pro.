// import React from 'react';

import Banner from "../../components/Banner/Banner";
import Blog from "../../components/blog/Blog";
import Job from "../../components/job/Job";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Job></Job>
      <Testimonial></Testimonial>
      <Blog></Blog>
    </div>
  );
};

export default Home;
