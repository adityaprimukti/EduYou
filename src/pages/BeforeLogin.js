import MentorSearchContainer from "../components/MentorSearchContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import MentorshipContainer from "../components/MentorshipContainer";
import ZoomClassContainer from "../components/ZoomClassContainer";
import ContainerWithButtonsAndEnglish from "../components/ContainerWithButtonsAndEnglish";
import MathContainer from "../components/MathContainer";
import ReciteContainer from "../components/ReciteContainer";
import CommunicationContainer from "../components/CommunicationContainer";
import GermanyContainer from "../components/GermanyContainer";
import FrenchContainerButtons from "../components/FrenchContainerButtons";
import PresentContainer from "../components/PresentContainer";
import EndDiscussionContainer from "../components/EndDiscussionContainer";
import OnlineStudyContainer from "../components/OnlineStudyContainer";
import "./BeforeLogin.css";
import { Link } from "react-router-dom";

const BeforeLogin = () => {
  return (
    <div className="beforelogin">
      <MentorSearchContainer />
      <TestimonialContainer />
      <MentorshipContainer />
      <ZoomClassContainer />
      <div className="solution">
        <div className="all-in-one-solution-parent">
          <b className="all-in-one-solution">
            <span>All-In-One</span>
            <span className="solution1"> Solution</span>
          </b>
          <div className="skilline-is-one">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </div>
        </div>
        <div className="home-kelas-parent">
          <div className="home-kelas">
            <ContainerWithButtonsAndEnglish />
            <MathContainer />
            <ReciteContainer />
            <CommunicationContainer />
            <div className="home-kelas-inner">
              <button className="group-parent">
                <img className="frame-child" alt="" src="/group-251.svg" />
                <div className="leadership">Leadership</div>
              </button>
            </div>
            <GermanyContainer />
            <FrenchContainerButtons />
            <button className="home-kelas-child">
              <div className="group-container">
                <img className="frame-child" alt="" src="/group-252.svg" />
                <div className="leadership">Sing</div>
              </div>
            </button>
            <div className="users-1" />
          </div>
          <Link to="/kelas">
          <button className="lihat-lebih-banyak-wrapper">
            <div className="lihat-lebih-banyak">Lihat lebih banyak</div>
          </button>
          </Link>
        </div>
      </div>
      <div className="about">
        <div className="frame-parent">
          <div className="frame">
            <div className="frame1">
              <div className="frame-inner" />
              <div className="apa-itu-eduyou-container">
                <span>Apa itu EduYou</span>
                <span className="span">?</span>
              </div>
            </div>
          </div>
          <div className="eduyou-adalah-platform">
            EduYou adalah platform pembelajaran online inovatif yang dirancang
            untuk menjadikan pendidikan mudah diakses, menarik, dan dapat
            disesuaikan dengan gaya hidup Anda. Ini menawarkan beragam kursus
            yang diajarkan oleh para ahli di berbagai bidang. Dengan LearnEase,
            Anda dapat belajar sesuai kecepatan Anda sendiri, berinteraksi
            dengan sesama pelajar, dan memperoleh keterampilan berharga melalui
            pelajaran praktis dan interaktif.
          </div>
          <div className="ellipse-div" />
          <div className="frame-child1" />
          <img className="polygon-icon" alt="" src="/polygon-3.svg" />
          <div className="rectangle-div" />
          <PresentContainer />
          <EndDiscussionContainer />
          <img className="group-icon" alt="" src="/group-105@2x.png" />
        </div>
      </div>
      <OnlineStudyContainer />
    </div>
  );
};

export default BeforeLogin;
