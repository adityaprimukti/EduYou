import { useMemo } from "react";
import "./MentorshipContainer.css";

const MentorshipContainer = ({ propTop }) => {
  const inginJadiMentorStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="inginjadimentor" style={inginJadiMentorStyle}>
      <div className="mask-group-parent4">
        <img className="mask-group-icon9" alt="" src="/mask-group7@2x.png" />
        <div className="frame-wrapper45">
          <div className="you-can-be-a-mentor-parent">
            <div className="you-can-be">You can be a Mentor</div>
            <button className="rectangle-parent9">
              <div className="frame-child81" />
              <div className="click-here-wrapper">
                <div className="click-here">Click Here</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipContainer;
