import React from "react";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Welcome to JobTracker, your ultimate solution for efficient job
            hunting and tracking. Take control of your career with our powerful
            app designed to streamline your job search process. Whether you're
            actively seeking new opportunities or simply want to stay organized,
            JobTracker has got you covered. With our user-friendly interface,
            you can easily search and save job listings from various sources,
            track application deadlines, and monitor your progress throughout
            the hiring process. Stay ahead of the competition by setting
            reminders, receiving personalized job recommendations, and accessing
            valuable resources to enhance your job-seeking skills. Join
            thousands of satisfied users who have successfully landed their
            dream jobs with JobTracker. Start tracking your way to career
            success today!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
