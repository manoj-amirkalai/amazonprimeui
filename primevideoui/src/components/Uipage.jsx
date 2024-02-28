import React from "react";
import "./Uipage.css";

const Uipage = () => {
  return (
    <div className="container">
      <div className="nav">
        <h1>prime video</h1>
        <div className="nav1">
          <p>Home</p>
          <p>Store</p>
          <p>Live Tv</p>
          <p>Categories</p>
        </div>
        <div className="nav2">
          <p>Search</p>
          <p>Try for free</p>
          <p>EN</p>
          <p>Sign in</p>
        </div>
      </div>
      <div className="home1">
        <div className="one">
          <div className="content">
            <h3> Welcome to Prime Video</h3>
            <p>
              Watch the latest movies, TV shows, and award-winning Amazon
              Originals
            </p>
            <button>Sign In to join Prime</button>
          </div>
          <div className="image">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="two">
          <div style={{ marginTop: "-20px" }} className="content content2">
            <h3>Movie rentals on Prime Video</h3>{" "}
            <p>Early Access to new movies, before digital subscription</p>
            <button>Rent now</button>
          </div>
          <div className="image">
            <img
              className="image2"
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="home2">
          {" "}
          <div style={{ marginTop: "-20px" }} className="contentimg">
            <h1>
              Your favorite channels all
              <br /> in one place{" "}
            </h1>
            <p>
              With Prime Video Channels, find shows and movies from your
              favorite channels allin one place. Enjoy with an add-on
              subscription to Channels of your choice
            </p>{" "}
          </div>
          <div className="imagecol">
            <div className="col">
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"
                alt=""
              />{" "}
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"
                alt=""
              />
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"
                alt=""
              />
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png"
                alt=""
              />
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Anime.jpg"
                alt=""
              />{" "}
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"
                alt=""
              />
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"
                alt=""
              />
            </div>{" "}
            <div className="col">
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png"
                alt=""
              />{" "}
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png"
                alt=""
              />
              <img
                className="colimg"
                src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>{" "}
        <div className="three">
          <div className="image3">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg"
              alt=""
            />
          </div>
          <div className="content3">
            <h1>Even better with Fire TV Stick </h1>
            <p>
              The biggest movies and TV shows are always better on a big screen.
              Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
              Press the voice button on the remote and say the name of the title
              you want to watch to find it in seconds.
            </p>
            <button className="button3">Get Started</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <img
        className="footimg"
          src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
          alt=""
        />
        <div className="foot">
          <p>Terms and Privacy Notice</p>
          <p>Send us feedback</p>
          <p>Help</p>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Uipage;
