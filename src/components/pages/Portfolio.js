import React from "react";
import weatherImage from "../../assets/images/weather_app.jpg";
import exprecipesImage from "../../assets/images/expRecipes.jpg";
import astrologicImage from "../../assets/images/astroLOGIC.jpg";
import Explorot from "../../assets/images/Explorot.jpg";
import sparklePlaceholder from "../../assets/images/sparklePlaceholder.png";

const Card = ({ imageSrc, title, description, link, color }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card bg-${color}`}>
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title text-white">{title}</h5>
          <p className="card-text text-white">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            View Project
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div
      style={{
        margin: "70px",
        width: "max-width",
        height: "fit-content",
        paddingBottom: "100px",
      }}
    >
      <h1>SOME OF MY PROJECTS:</h1>
      <div className="row">
      <Card
          imageSrc={Explorot}
          title="Explorot"
          description="LEARN THE TAROT WITH NUMEROLOGY, ASTROLOGY, AND MEANINGS!"
          link="https://explorot.herokuapp.com/"
          target="_blank"
          color="primary"
        />
       
        <Card
          imageSrc={exprecipesImage}
          title="Project 2: ExpRecipes"
          description="SEARCH FOR RECIPES AND ADD INGREDIENTS TO YOUR GROCERY LIST!"
          link="https://joshuaelitate.github.io/ExpRecipe/"
          color="danger"
        />
        <Card
          imageSrc={astrologicImage}
          title="Project 3: AstroLOGIC"
          description="MAKE AN ACCOUNT TO VIEW ASTROLOGICAL INFORMATION AND HOROSCOPE!"
          link="https://astrologic.herokuapp.com/"
          target="_blank"
          color="warning"
        />
         <Card
          imageSrc={weatherImage}
          title="Project 1: Weather App"
          description="FIVE DAY WEATHER FORECAST WHEN YOU SEARCH ANY CITY!"
          link="https://rcass13.github.io/weather-module-6/"
          target="_blank"
          color="success"
        />
        <Card
          imageSrc={sparklePlaceholder}
          title="Project 5 Coming Soon!"
          description="Working on beefing up the portfolio! Check back again soon <3"
          link="#"
          target="_blank"
          color="info"
        />
        <Card
          imageSrc={sparklePlaceholder}
          title="Project 6 Coming Soon!"
          description="Working on beefing up the portfolio! Check back again soon <3"
          link="#"
          target="_blank"
          color="primary"
        />
      </div>
    </div>
  );
}
