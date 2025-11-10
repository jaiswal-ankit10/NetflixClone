import React from "react";
import facebook_icon from "../assets/facebook_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import youtube_icon from "../assets/youtube_icon.png";
const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-20">
      <div className="footer-icon flex gap-2">
        <img src={facebook_icon} alt="facebook" width={30} />
        <img src={instagram_icon} alt="instagram" width={30} />
        <img src={twitter_icon} alt="twitter" width={30} />
        <img src={youtube_icon} alt="youtube" width={30} />
      </div>
      <div className="footer-links  mt-6 text-gray-400 text-lg font-bold">
        <ul className="grid grid-cols-4 gap-4">
          <li>Audio and Subtitles</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>

          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p className="copyright mt-10">© 1997-2025 Netflix, Inc</p>
    </div>
  );
};

export default Footer;
