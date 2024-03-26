import UserCard from "./UserCard";
import "./ProfileContainer.css";

const ProfileContainer = () => {
  return (
    <div className="profil1">
      <button className="vector-parent12">
        <img className="group-child29" alt="" src="/arrow-21.svg" />
        <button className="ellipse-parent18">
          <div className="group-child30" />
          <img className="group-child31" alt="" src="/vector-51.svg" />
        </button>
      </button>
      <b className="profil-saya">PROFIL SAYA</b>
      <UserCard
        teacherName="EduTeacher"
        propPosition="absolute"
        propTop="66px"
        propLeft="1588.6px"
        propWidth="188px"
      />
      <div className="frame17">
        <div className="frame-parent64">
          <div className="mask-group-wrapper">
            <img
              className="mask-group-icon27"
              alt=""
              src="/mask-group25@2x.png"
            />
          </div>
          <div className="shani-indira-parent">
            <div className="shani-indira4">Shani Indira</div>
            <div className="edustudent">EduStudent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
