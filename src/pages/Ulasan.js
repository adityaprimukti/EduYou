import OKCard from "../components/OKCard";
import Property1NotBadRate from "../components/Property1NotBadRate";
import "./Ulasan.css";

const Ulasan = () => {
  return (
    <div className="ulasan">
      <button className="ellipse-parent1">
        <div className="group-child11" />
        <img className="group-child12" alt="" src="/arrow-2.svg" />
        <img className="group-child13" alt="" src="/vector-5.svg" />
      </button>
      <b className="ulasan1">ULASAN</b>
      <div className="bagikan-pengalaman-menarikumu-wrapper">
        <b className="bagikan-pengalaman-menarikumu">
          Bagikan pengalaman menarikumu di sini ...
        </b>
      </div>
      <b className="bagaimana-sesi-belajar">
        Bagaimana sesi belajar yang kamu dapatkan? Apakah menyenangkan?
      </b>
      <div className="eveny-howard-parent">
        <b className="eveny-howard1">Eveny Howard</b>
        <img className="frame-child20" alt="" src="/group-1523@2x.png" />
      </div>
      <OKCard
        confirmationMessage="Kirim"
        propTop="1189px"
        propLeft="1520px"
        propLeft1="73px"
      />
      <Property1NotBadRate
        grade="/grade.svg"
        grade1="/grade1.svg"
        grade2="/grade2.svg"
        grade3="/grade3.svg"
        grade4="/grade4.svg"
        property1NotBadRate3Width="806px"
        property1NotBadRate3Height="112px"
        property1NotBadRate3Position="absolute"
        property1NotBadRate3Top="629px"
        property1NotBadRate3Left="557px"
        property1NotBadRate3BackgroundColor="#fff"
        gradeIconRight="43.49%"
        gradeIconLeft="43.47%"
      />
    </div>
  );
};

export default Ulasan;
