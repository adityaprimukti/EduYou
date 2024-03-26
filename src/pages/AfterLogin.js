import OnlineStudyContainer1 from "../components/OnlineStudyContainer1";
import TestimonialContainer from "../components/TestimonialContainer";
import MentorshipContainer from "../components/MentorshipContainer";
import ZoomClassContainer from "../components/ZoomClassContainer";
import ContainerWithButtonsAndEnglish from "../components/ContainerWithButtonsAndEnglish";
import MathContainer from "../components/MathContainer";
import ReciteContainer from "../components/ReciteContainer";
import CommunicationContainer from "../components/CommunicationContainer";
import GermanyContainer from "../components/GermanyContainer";
import FrenchContainerButtons from "../components/FrenchContainerButtons";
import MentorSearchContainer from "../components/MentorSearchContainer";
import "./AfterLogin.css";

const AfterLogin = () => {
  return (
    <div className="afterlogin">
      <OnlineStudyContainer1 />
      <TestimonialContainer propTop="3786px" />
      <MentorshipContainer propTop="4810px" />
      <ZoomClassContainer propTop="5834px" />
      <div className="solution2">
        <div className="all-in-one-solution-group">
          <b className="all-in-one-solution1">
            <span>All-In-One</span>
            <span className="solution3"> Solution</span>
          </b>
          <div className="skilline-is-one1">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </div>
        </div>
        <div className="home-kelas-group">
          <div className="home-kelas1">
            <ContainerWithButtonsAndEnglish />
            <MathContainer />
            <ReciteContainer />
            <CommunicationContainer />
            <div className="frame-div">
              <button className="frame-button">
                <img className="frame-child2" alt="" src="/group-251.svg" />
                <div className="leadership2">Leadership</div>
              </button>
            </div>
            <GermanyContainer />
            <FrenchContainerButtons />
            <button className="home-kelas-inner1">
              <div className="group-parent1">
                <img className="frame-child2" alt="" src="/group-252.svg" />
                <div className="leadership2">Sing</div>
              </div>
            </button>
            <div className="users-11" />
          </div>
          <button className="lihat-lebih-banyak-frame">
            <div className="lihat-lebih-banyak2">Lihat lebih banyak</div>
          </button>
        </div>
      </div>
      <MentorSearchContainer frameTop="2048px" frameLeft="-32px" />
    </div>
  );
};

export default AfterLogin;
