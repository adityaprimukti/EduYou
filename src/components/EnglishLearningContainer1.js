import { useMemo } from "react";
import "./EnglishLearningContainer1.css";

const EnglishLearningContainer1 = ({ imageDimensions, propLeft }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="group-parent9" style={frameDiv3Style}>
      <img className="frame-child139" alt="" src={imageDimensions} />
      <div className="mask-group-parent10">
        <img className="mask-group-icon20" alt="" src="/mask-group21@2x.png" />
        <button className="mask-group">
          <img
            className="portrait-teacher-giving-online-icon"
            alt=""
            src="/portraitteachergivingonlineclass-1@2x.png"
          />
        </button>
        <div className="rectangle-parent25">
          <div className="frame-child140" />
          <div className="eveny-howard4">Eveny Howard</div>
          <div className="instructor1">Instructor</div>
          <div className="rectangle-parent26">
            <div className="frame-child141" />
            <div className="frame-child142" />
            <div className="frame-child143" />
          </div>
        </div>
      </div>
      <div className="english-learn-english-container">
        <b>English</b>
        <span>{`- learn english from a native speaker in Bandung who won multiple... `}</span>
      </div>
      <b className="rp-12000000">Rp 120.000,00</b>
      <b className="kursus-pertama-gratis6">Kursus pertama gratis</b>
      <img className="frame-child144" alt="" src="/star-7.svg" />
      <div className="ulasan9">
        <b>{`5 `}</b>
        <span>(150 ulasan)</span>
      </div>
    </div>
  );
};

export default EnglishLearningContainer1;
