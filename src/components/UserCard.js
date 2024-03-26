import { useMemo } from "react";
import UserRoundIcon from "./UserRoundIcon";
import "./UserCard.css";

const UserCard = ({
  teacherName,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const frameButtonStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  const hanaNazhifahStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <button className="frame-wrapper50" style={frameButtonStyle}>
      <div className="frame-parent57">
        <div className="user-round-wrapper">
          <UserRoundIcon
            userRoundIconUserRound="/user-round1.svg"
            userRoundIconWidth="61px"
            userRoundIconHeight="59px"
            userRoundIconPosition="relative"
            userRoundIconTop="unset"
            userRoundIconLeft="unset"
          />
        </div>
        <div className="hana-nazhifah" style={hanaNazhifahStyle}>
          {teacherName}
        </div>
      </div>
    </button>
  );
};

export default UserCard;
