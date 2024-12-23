import React from "react";
import "../index.css";
import PortfolioHersoSection from "../assets/Protfolio/ServicesHersoSection.png";

import HeroSectionService from "../components/ServiceComponents/HeroSectionService";
import ServicesImage1 from "../assets/Protfolio/ServicesImage1.png";
import ServicesImage2 from "../assets/Protfolio/ServicesImage2.png";
import ServicesImage3 from "../assets/Protfolio/ServicesImage3.png";
import ServicesImage4 from "../assets/Protfolio/ServicesImage4.png";
import ServicesImage5 from "../assets/Protfolio/ServicesImage5.png";
import PortfolioCard from "../components/PortfolioPage/PortfolioCard";
const PortfolioPage = () => {
  return (
    <div className="row Container">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <HeroSectionService img={PortfolioHersoSection} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <PortfolioCard
                img={ServicesImage1}
                text="Instagram and Facebook
Filters"
                options={[
                  { option: "Augmented Reality" },
                  { option: "ARkit" },
                  { option: "ARCore" },
                ]}
              />
              <PortfolioCard
                img={ServicesImage2}
                text="Instagram and Facebook
Filters"
                options={[
                  { option: "Augmented Reality" },
                  { option: "ARkit" },
                  { option: "ARCore" },
                ]}
              />
              <PortfolioCard
                img={ServicesImage3}
                text="Instagram and Facebook
Filters"
                options={[
                  { option: "Augmented Reality" },
                  { option: "ARkit" },
                  { option: "ARCore" },
                ]}
              />
              <PortfolioCard
                img={ServicesImage4}
                text="Instagram and Facebook
Filters"
                options={[
                  { option: "Augmented Reality" },
                  { option: "ARkit" },
                  { option: "ARCore" },
                ]}
              />
              <PortfolioCard
                img={ServicesImage5}
                text="Instagram and Facebook
Filters"
                options={[
                  { option: "Augmented Reality" },
                  { option: "ARkit" },
                  { option: "ARCore" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioPage;
