import { useMemo } from "react";
import "./OKCard.css";
import { Link } from "react-router-dom";

const OKCard = ({ confirmationMessage, propTop, propLeft, propLeft1 }) => {
  const frameButton1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const oKStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <Link to="/chatting">
      <button className="pembayaran-oke-inner" style={frameButton1Style}>
        <div className="vector-parent11">
          <img className="vector-parent11" alt="" src="/rectangle-3.svg" />
          <b className="ok1" style={oKStyle}>
            {confirmationMessage}
          </b>
        </div>
      </button>
    </Link>
  );
};

export default OKCard;
