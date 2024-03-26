import { useMemo } from "react";
import "./UserListContainer.css";

const UserListContainer = ({ authorName, fullName, propLeft, propTop }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="rectangle-parent30" style={frameDiv5Style}>
      <div className="frame-child156" />
      <div className="frame-child157" />
      <div className="thank-you-so1">
        "Thank you so much for your help. It's exactly what I've been looking
        for. You won't regret it. It really saves me time and effort."
      </div>
      <b className="hubber-hollan">{authorName}</b>
      <div className="prananda-setya-2-container">
        <b>{fullName}</b>
        <span>2 hari lalu</span>
      </div>
      <div className="frame-child158" />
      <img className="mask-group-icon23" alt="" src="/mask-group23@2x.png" />
      <img className="frame-child159" alt="" src="/star-22.svg" />
      <img className="frame-child160" alt="" src="/star-22.svg" />
      <img className="frame-child161" alt="" src="/star-22.svg" />
      <img className="frame-child162" alt="" src="/star-22.svg" />
      <img className="frame-child163" alt="" src="/star-22.svg" />
    </div>
  );
};

export default UserListContainer;
