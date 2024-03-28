import UserCard from "./UserCard";
import DataFilterContainer from "./DataFilterContainer";
import UserExperienceClassContainer from "./UserExperienceClassContainer";
import "./OnlineStudyContainer1.css";
import { Link } from "react-router-dom";

const OnlineStudyContainer1 = () => {
  return (
    <div className="afterhome">
      <img className="afterhome-child" alt="" src="/rectangle-4.svg" />
      <img className="mask-group-icon14" alt="" src="/mask-group15@2x.png" />
      <b className="studying-online-is1">Studying Online is now much easier</b>
      <div className="at-eduyou-we1">
        At EduYou, we believe in the power of education that transcends
        boundaries. Our online platform is designed to bring the classroom
        experience to your fingertips, making learning a truly immersive and
        convenient journey.
      </div>
      <div className="vector-parent9">
        <img className="frame-child107" alt="" src="/rectangle-3.svg" />
        <div className="join-now1">Join Now</div>
      </div>
      <div className="logo-eduyou-07-1-group">
        <img
          className="logo-eduyou-07-11"
          alt=""
          src="/logo-eduyou07-11@2x.png"
        />
        <div className="frame-parent58">
          <div className="frame-wrapper51">
            <div className="temukan-mentor-group">
            <Link to="/temukanmentor">
              <div className="temukan-mentor1">Temukan Mentor</div>
              </Link>
              <Link to="/kelas">
              <div className="temukan-mentor1">Kelas</div>
              </Link>
              <Link to="/notifikasi">
              <div className="temukan-mentor1">Notifikasi</div>
              </Link>
              <Link to="/chat">
              <div className="temukan-mentor1">Chat</div>
              </Link>
            </div>
          </div>
          <UserCard teacherName="Hana Nazhifah" />
        </div>
      </div>
      <img className="afterhome-item" alt="" src="/group-9.svg" />
      <div className="afterhome-inner" />
      <div className="afterhome-child1" />
      <div className="afterhome-child2" />
      <DataFilterContainer />
      <UserExperienceClassContainer />
      <img className="vector-icon7" alt="" src="/vector5.svg" />
    </div>
  );
};

export default OnlineStudyContainer1;
