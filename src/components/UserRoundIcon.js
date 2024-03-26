import { useMemo } from "react";
import "./UserRoundIcon.css";

const UserRoundIcon = ({
  userRoundIconUserRound,
  userRoundIconWidth,
  userRoundIconHeight,
  userRoundIconPosition,
  userRoundIconTop,
  userRoundIconLeft,
}) => {
  const userRoundIconStyle = useMemo(() => {
    return {
      width: userRoundIconWidth,
      height: userRoundIconHeight,
      position: userRoundIconPosition,
      top: userRoundIconTop,
      left: userRoundIconLeft,
    };
  }, [
    userRoundIconWidth,
    userRoundIconHeight,
    userRoundIconPosition,
    userRoundIconTop,
    userRoundIconLeft,
  ]);

  return (
    <img
      className="user-round-icon"
      alt=""
      src={userRoundIconUserRound}
      style={userRoundIconStyle}
    />
  );
};

export default UserRoundIcon;
