import UserCardContainer from "./UserCardContainer";
import "./PresentContainer.css";

const PresentContainer = () => {
  return (
    <div className="group-parent8">
      <img className="frame-child88" alt="" src="/group-67.svg" />
      <div className="present-wrapper">
        <b className="present">Present</b>
      </div>
      <div className="call-parent">
        <b className="call">Call</b>
        <img className="phone-1-icon" alt="" src="/phone-1.svg" />
      </div>
      <UserCardContainer
        dimensionsAndTimestamps="/mask-group8@2x.png"
        personName="Adam Levin"
      />
      <UserCardContainer
        dimensionsAndTimestamps="/mask-group9@2x.png"
        personName="Tamara Clarke"
        propLeft="418.7px"
        propTop="81px"
        propWidth="88.6px"
        propWidth1="66.8px"
      />
      <img className="frame-child89" alt="" src="/group-101@2x.png" />
      <UserCardContainer
        dimensionsAndTimestamps="/mask-group10@2x.png"
        personName="Humbert Holland"
        propLeft="418.7px"
        propTop="243.1px"
        propWidth="103.3px"
        propWidth1="81.5px"
      />
      <UserCardContainer
        dimensionsAndTimestamps="/mask-group11@2x.png"
        personName="Patricia Mendoza"
        propLeft="602.5px"
        propTop="243.1px"
        propWidth="100.7px"
        propWidth1="79px"
      />
      <div className="frame-child90" />
    </div>
  );
};

export default PresentContainer;
