import DataFilterContainer from "./DataFilterContainer";
import UserExperienceClassContainer from "./UserExperienceClassContainer";
import "./OnlineStudyContainer.css";
import { Link } from "react-router-dom";

const OnlineStudyContainer = () => {
  return (
    <div className="beforehome">
      <div className="vector-parent5">
        <img className="frame-child100" alt="" src="/rectangle-4.svg" />
        <img className="mask-group-icon13" alt="" src="/mask-group14@2x.png" />
        <div className="frame-parent52">
          <div className="studying-online-is-now-much-ea-parent">
            <b className="studying-online-is">
              Studying Online is now much easier
            </b>
            <div className="at-eduyou-we">
              At EduYou, we believe in the power of education that transcends
              boundaries. Our online platform is designed to bring the classroom
              experience to your fingertips, making learning a truly immersive
              and convenient journey.
            </div>
          </div>
          <button className="vector-parent6">
            <img className="frame-child101" alt="" src="/rectangle-3.svg" />
            <div className="join-now">Join Now</div>
          </button>
        </div>
        <div className="logo-eduyou-07-1-parent">
          <img
            className="logo-eduyou-07-1"
            alt=""
            src="/logo-eduyou07-1@2x.png"
          />
          <div className="frame-parent53">
            <div className="temukan-mentor-parent">
            <Link to="/temukanmentor">
              <div className="temukan-mentor">Temukan Mentor</div>
              </Link>
              <Link to="/kelas">
              <div className="temukan-mentor">Kelas</div>
              </Link>
              <Link to="/notifikasi">
              <div className="temukan-mentor">Notifikasi</div>
              </Link>
              <Link to="/chat">
              <div className="temukan-mentor">Chat</div>
              </Link>
            </div>
            <div className="frame-parent54">
            <Link to="/login">
              <button className="masuk-wrapper">
                <div className="masuk">Masuk</div>
              </button>
              </Link>
              <Link to="/register">
              <button className="daftar-wrapper">
                <div className="daftar1">Daftar</div>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <img className="frame-child102" alt="" src="/group-9.svg" />
        <div className="frame-child103" />
        <div className="frame-child104" />
        <div className="frame-child105" />
        <div className="frame-child106" />
        <DataFilterContainer />
        <UserExperienceClassContainer />
        <div className="frame-wrapper49">
          <div className="congratulastions-parent">
            <div className="temukan-mentor">Congratulastions</div>
            <div className="your-admission-completed">
              Your admission completed
            </div>
          </div>
        </div>
        <img className="vector-icon2" alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default OnlineStudyContainer;
