import OKCard from "../components/OKCard";
import "./PembayaranOke.css";

const PembayaranOke = () => {
  return (
    <div className="pembayaran-oke">
      <div className="pembayaran-oke-child" />
      <b className="pembayaran-berhasil">PEMBAYARAN BERHASIL</b>
      <b className="terimakasih-telah-menghubungi-container">
        <p className="terimakasih-telah-menghubungi">{`Terimakasih telah menghubungi kami. `}</p>
        <p className="terimakasih-telah-menghubungi">Selamat Belajar!!</p>
      </b>
      <OKCard confirmationMessage="OK" />
      <img className="bri-icon1" alt="" src="/bri1@2x.png" />
      <img className="logo-eduyou-07-2" alt="" src="/logo-eduyou07-2@2x.png" />
    </div>
  );
};

export default PembayaranOke;
