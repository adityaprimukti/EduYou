import OKCard from "../components/OKCard";
import "./Ulasandikirim.css";

const Ulasandikirim = () => {
  return (
    <div className="ulasandikirim">
      <div className="ulasandikirim-child" />
      <b className="ulasan-dikirim">ULASAN DIKIRIM</b>
      <b className="terimakasih-ulasanmu-sangat-container">
        <p className="terimakasih-ulasanmu-sangat">
          Terimakasih! Ulasanmu sangat berarti untuk kami.
        </p>
        <p className="terimakasih-ulasanmu-sangat">{`Semoga harimu menyenangkan `}</p>
      </b>
      <OKCard
        confirmationMessage="Kembali"
        propTop="684px"
        propLeft="851px"
        propLeft1="53px"
      />
      <img className="logo-eduyou-07-22" alt="" src="/logo-eduyou07-2@2x.png" />
    </div>
  );
};

export default Ulasandikirim;
