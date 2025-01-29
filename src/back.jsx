import "./back.css";
import { useState } from "react";
import imgSrc1 from "/instagram.png";
import imgSrc2 from "/linkedin.png";
import imgSrc3 from "/facebook.png";
import imgSrc4 from "/youtube.png";
import imgSrc5 from "/twitter.png";
import imgSrc6 from "/ourapps.png";
import imgSrc7 from "/motorpediaWebsite.png";
import imgSrc8 from "/dealers.png";

import imgLogo from "/motorpediaLogo.jpeg";
import appsLogo from "/appsLogo.png";
import dealersLogo from "/dealersLogo.jpg";

const socialMediaData = [
  {
    name: "Instagram",
    image: imgSrc1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    link: "https://www.instagram.com/motorpedia_in/",
  },
  {
    name: "LinkedIn",
    image: imgSrc2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    link: "https://www.linkedin.com/company/motorpedia/",
  },
  {
    name: "Facebook",
    image: imgSrc3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    link: "https://www.facebook.com/Motorpediain",
  },
  {
    name: "YouTube",
    image: imgSrc4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
    link: "https://www.youtube.com/@MotorPedia_IN",
  },
  {
    name: "Twitter",
    image: imgSrc5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    link: "https://x.com/Motorpedia_in?t=R-TGOPpYRMrYwmS0Yq3HPg&s=09",
  },
  {
    name: "Our Apps",
    image: imgSrc6,
    logo: appsLogo,
    link: "https://themotorpedia.com/download-apps",
  },
  {
    name: "Classifieds",
    image: imgSrc7,
    logo: imgLogo,
    link: "https://themotorpedia.com/",
  },
  {
    name: "Dealers",
    image: imgSrc8,
    logo: dealersLogo,
    link: "https://themotorpedia.com/dealer-services/",
  },
];

export default function Back() {
  const [isMore, setIsMore] = useState(false);

  const description = `MotorPedia is a one-stop destination for automobile enthusiasts, buyers, and industry professionals. This comprehensive platform offers detailed information on a wide range of vehicles, including specifications, expert reviews, and comparisons. It keeps users updated with the latest automotive trends and innovations. Featuring a user-friendly interface, Motorpedia provides personalized recommendations, advanced comparison tools, and in-depth insights to make exploring, analyzing, and selecting vehicles seamless and enjoyable for everyone.`;

  return (
    <div className="main">
      <h1>Social Media Handles</h1>
      <p>
        <span className="description">
          {isMore ? description : description.slice(0, 250) + "..."}
        </span>
        <span className="see-more" onClick={() => setIsMore(!isMore)}>
          {isMore ? "Show less" : "Show more"}
        </span>
      </p>
      <div className="containers">
        {socialMediaData.map((social, index) => (
          <a
            key={index}
            target="_blank"
            href={social.link}
            className={`${social.name.toLowerCase()} child`}
          >
            <div className="outer-card">
              <div className="header">
                <img
                  src={social.logo}
                  alt={`${social.name} Logo`}
                  className="logo"
                />
                <h2>{social.name}</h2>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img
                      src={social.image}
                      alt={social.name}
                      className="image-post"
                    />
                  </div>
                  <div className="card-back">
                    <img
                      src={social.logo}
                      alt={`${social.name} Logo`}
                      className="logo"
                    />
                  </div>
                </div>
              </div>
              <button>Visit now</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
