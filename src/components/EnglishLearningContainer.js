import { useMemo } from "react";
import "./EnglishLearningContainer.css";
import { Link } from "react-router-dom";

const EnglishLearningContainer = ({
  imageDimensionsId,
  propLeft,
  propTop,
  propHeight,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const ulasanStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="group-parent10" style={frameDiv4Style}>
      <img className="frame-child145" alt="" src={imageDimensionsId} />
      <button className="mask-group-parent11">
        <Link to="/pendaftaran-tutoring">
          <img
            className="mask-group-icon21"
            alt=""
            src="/mask-group21@2x.png"
          />

          <img
            className="mask-group-icon22"
            alt=""
            src="/mask-group22@2x.png"
          />
        </Link>
        <div className="rectangle-parent27">
          <div className="frame-child146" />
          <div className="eveny-howard5">Eveny Howard</div>
          <div className="instructor2">Instructor</div>
          <div className="rectangle-parent28">
            <div className="frame-child147" />
            <div className="frame-child148" />
            <div className="frame-child149" />
          </div>
        </div>
      </button>
      <div className="english-learn-english-container1">
        <b>English</b>
        <span>{`- learn english from a native speaker in Bandung who won multiple... `}</span>
      </div>
      <b className="rp-120000001">Rp 120.000,00</b>
      <b className="kursus-pertama-gratis7">Kursus pertama gratis</b>
      <img className="frame-child150" alt="" src="/star-7.svg" />
      <div className="ulasan10" style={ulasanStyle}>
        <b>{`5 `}</b>
        <span>(150 ulasan)</span>
      </div>
    </div>
  );
};

export default EnglishLearningContainer;
