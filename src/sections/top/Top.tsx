import { Button } from "../../components/button/Button";
import { Navbar } from "../../components/navbar/Navbar";
import img from "../../assets/illustration-mockups.svg";
import "./Top.scss";

export const Top = () => {
  return (
    <div className="top-container">
      <Navbar />
      <div className="top-feature-container">
        <div className="top-feature-container-left">
          <h1 className="top-feature-header">
            Build The Community Your Fans Will Love
          </h1>
          <span className="top-feature-description">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </span>
          <Button label="Get Started For Free" type="secondary" />
        </div>
        <div className="top-feature-container-right">
          <img src={img} alt="img" className="top-feature-image" />
        </div>
      </div>
    </div>
  );
};
