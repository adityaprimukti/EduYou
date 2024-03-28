import "./MathContainer.css";
import { Link } from "react-router-dom";

const MathContainer = () => {
  return (
    <div className="home-kelas-inner3">
      <div className="group-parent3">
      <Link to="/subkategori">
        <button className="ellipse-parent10">
        
          <div className="group-child15" />
          <img className="calendar-1-icon1" alt="" src="/calendar-1.svg" />
        </button>
        </Link>
        <div className="math2">Math</div>
      </div>
    </div>
  );
};

export default MathContainer;
