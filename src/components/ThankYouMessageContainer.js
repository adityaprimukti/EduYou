import { useMemo } from "react";
import "./ThankYouMessageContainer.css";

const ThankYouMessageContainer = ({ propTop, propLeft }) => {
  const frameDiv6Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="rectangle-parent35" style={frameDiv6Style}>
      <div className="frame-child172" />
      <div className="frame-child173" />
      <div className="thank-you-so2">
        "Thank you so much for your help. It's exactly what I've been looking
        for. You won't regret it. It really saves me time and effort."
      </div>
      <b className="shani-indira3">Shani Indira</b>
      <div className="hari-lalu">2 hari lalu</div>
      <div className="frame-child174" />
      <img className="mask-group-icon26" alt="" src="/mask-group23@2x.png" />
      <img className="frame-child175" alt="" src="/star-22.svg" />
      <img className="frame-child176" alt="" src="/star-22.svg" />
      <img className="frame-child177" alt="" src="/star-22.svg" />
      <img className="frame-child178" alt="" src="/star-22.svg" />
      <img className="frame-child179" alt="" src="/star-22.svg" />
    </div>
  );
};

export default ThankYouMessageContainer;
