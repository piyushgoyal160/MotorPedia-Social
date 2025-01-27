import "./front.css";
import imgSrc from "/instagram.png";
import imgSrc2 from "/linkedin.png";
import imgSrc3 from "/facebook.png";

export default function Front() {
  return (
    <div className="main">
      <h1>Social Media Handles</h1>
      <p>
        Motorpedia is a comprehensive platform designed for automobile
        enthusiasts, buyers, and industry professionals. It provides detailed
        information on vehicles, expert reviews, comparisons, and the latest
        automotive trends. With a user-friendly interface and tools like
        personalized recommendations and advanced comparisons, Motorpedia makes
        exploring and choosing vehicles effortless.
      </p>
      <div className="containers">
        <a
          target="_blank"
          href="https://www.instagram.com/motorpedia_in/"
          className="instagram child"
        >
          <div className="image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Logo"
              className="logo"
            />
            <span>Instagram</span>
          </div>
          {/* <p>
            Empowering Dealership | Automotive Sector Excellence Innovating the
            future of car sales and service #motorpedia Explore Our #Cars
            Collections.
          </p> */}
          <div className="post">
            <img src={imgSrc} alt="img" className="image-post" />
            {/* <h4 className="caption">
              <a href="https://www.instagram.com/reel/DEMXbcBKc-S/?igsh=MTFpY243cDlwZTZjZA==">
                Visit our Instagram Here
              </a>
            </h4> */}
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/motorpedia/"
          className="linkedin child"
        >
          <div className="image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="LinkedIn Logo"
              className="logo"
            />
            <span>Linkedin</span>
          </div>
          {/* <p>
            MotorPedia is transforming auto dealerships by integrating AI to
            optimize operations, improve customer experiences, and drive
            unparalleled success.
          </p> */}
          <div className="post">
            <img src={imgSrc2} alt="img" className="image-post" />
            {/* <h4 className="caption">
              <a href="https://www.linkedin.com/posts/motorpedia_happyrepublicday-indiaat76-motorpedia-activity-7288985187093295105-38ld?utm_source=social_share_send&utm_medium=android_app&utm_campaign=copy_link">
                Visit our Linkedin Here
              </a>
            </h4> */}
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/Motorpediain"
          className="Facebook child"
        >
          <div className="image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook Logo"
              className=" facebook logo"
            />
            <span>Facebook</span>
          </div>
          {/* <p>
            Creating tech solutions for dealers to ensure smooth operations and
            deliver high-quality, reliable used vehicles to buyers and improve
            customer experiences.
          </p> */}
          <div className="post">
            <img src={imgSrc3} alt="img" className="image-post" />
            {/* <h4 className="caption">
              <a href="https://www.facebook.com/photo/?fbid=122160939038289572&set=ecnf.61558687177686">
                Visit our Facebook Here
              </a>
            </h4> */}
          </div>
        </a>
      </div>
    </div>
  );
}
