import { useMemo } from "react";
import "./UserCardContainer.css";

const UserCardContainer = ({
  dimensionsAndTimestamps,
  personName,
  propLeft,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const adamLevinStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="mask-group-parent5" style={frameDivStyle}>
      <img className="mask-group-icon10" alt="" src={dimensionsAndTimestamps} />
      <div className="adam-levin-parent" style={frameDiv1Style}>
        <div className="adam-levin2" style={adamLevinStyle}>
          {personName}
        </div>
        <div className="rectangle-parent10">
          <div className="frame-child85" />
          <div className="frame-child86" />
          <div className="frame-child87" />
        </div>
      </div>
    </div>
  );
};

export default UserCardContainer;
