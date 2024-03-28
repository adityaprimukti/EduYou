import "./ContainerWithButtonsAndEnglish.css";
import { Link } from "react-router-dom";

const ContainerWithButtonsAndEnglish = () => {
  return (
    <div className="home-kelas-inner2">
      <div className="group-parent2">
      <Link to="/subkategori">
        <button className="ellipse-parent9">
          <div className="group-child14" />
          <img
            className="svgrepo-iconcarrier"
            alt=""
            src="/svgrepo-iconcarrier.svg"
          />
        </button>
        </Link>
        <div className="english3">English</div>
      </div>
    </div>
  );
};

export default ContainerWithButtonsAndEnglish;
