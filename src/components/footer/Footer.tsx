import facebook from "../../assets/brand-companey/Facebook/Vector.png";
import twitter from "../../assets/brand-companey/Twitter/Vector.png";
import instagram from "../../assets/brand-companey/Instagram/Group.png";
import linkedin from "../../assets/brand-companey/LinkedIn/Group.png";
import Image from "next/image";
import "./Footer.scss";
const PublicFooter = () => {
  return (
    <footer className="container">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-text">
            <p className="footer-text">Javohir Zafar</p>
            <p className="footer-text">javohirjumayev7777@gmail.com</p>
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/javohir.jumayev.7503">
              {" "}
              <Image src={facebook} alt="" />
            </a>
            <a href="https://t.me/javohir_zafar0vich">
              <Image src={twitter} alt="" />
            </a>
            <a href="https://www.instagram.com/javohir_zafar0vich">
              {" "}
              <Image src={instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/javoxir-jumayev-01a91b235">
              <Image src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
