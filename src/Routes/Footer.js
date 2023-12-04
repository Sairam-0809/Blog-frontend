import React from "react";
import "./Footer.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="companyName"><Link className="compLink" to="/">The Siren</Link></div>
        <div className="socialMedia">
          <a href="https://www.instagram.com/" style={{color:"crimson"}}><InstagramIcon/></a>
          <a href="https://twitter.com/" style={{color:"lightblue"}}><TwitterIcon/></a>
          <a href="https://wa.me/" style={{color:"green"}}><WhatsAppIcon/></a>
          <a href="https://youtube.com/" style={{color:"red"}}><YouTubeIcon/></a>
        </div>
        <div className="appLinks">
          <h3>Download App</h3>
          <div className="appIcons">
            <a href="https://play.google.com/store"><AndroidIcon/></a>
            <a href="https://www.apple.com/app-store/"><AppleIcon/></a>
          </div>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footerLinks">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
        <div className="copyright">© 2023 The Siren. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
