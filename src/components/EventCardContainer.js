import { useMemo } from "react";
import "./EventCardContainer.css";

const EventCardContainer = ({ frameDivTop }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div className="eveny-howard-group" style={frameDiv2Style}>
      <b className="eveny-howard2">Eveny Howard</b>
      <b className="sesi-ke-1">Sesi ke 1 gratis</b>
      <img className="frame-child108" alt="" src="/group-152@2x.png" />
      <div className="ulasan-parent">
        <div className="ulasan8">
          <b>{`5 `}</b>
          <span>(150 ulasan)</span>
        </div>
        <img className="frame-child109" alt="" src="/star-21.svg" />
      </div>
    </div>
  );
};

export default EventCardContainer;
