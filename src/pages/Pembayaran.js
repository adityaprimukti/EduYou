import EventCardContainer from "../components/EventCardContainer";
import ContainerWrapper from "../components/ContainerWrapper";
import "./Pembayaran.css";

const Pembayaran = () => {
  return (
    <div className="pembayaran">
      <button className="vector-group">
        <img className="group-child2" alt="" src="/arrow-2.svg" />
        <img className="group-child3" alt="" src="/group-273@2x.png" />
      </button>
      <EventCardContainer frameDivTop="202px" />
      <b className="pembayaran1">PEMBAYARAN</b>
      <div className="metode-pembayaran-transfer-container">
        <p className="metode-pembayaran-transfer-ba">
          <b>Metode Pembayaran: Transfer Bank</b>
        </p>
        <p className="metode-pembayaran-transfer-ba">Pilih Bank</p>
      </div>
      <b className="nama-no-tanggal-container">
        <p className="metode-pembayaran-transfer-ba">Nama</p>
        <p className="no">{`No     `}</p>
        <p className="metode-pembayaran-transfer-ba">Tanggal</p>
        <p className="metode-pembayaran-transfer-ba">Sesi</p>
        <p className="metode-pembayaran-transfer-ba">Alamat</p>
      </b>
      <b className="shani-indira-082333656778-container">
        <p className="metode-pembayaran-transfer-ba">Shani Indira</p>
        <p className="no">{`082333656778     `}</p>
        <p className="metode-pembayaran-transfer-ba">3 Juni 2024</p>
        <p className="metode-pembayaran-transfer-ba">Online</p>
        <p className="metode-pembayaran-transfer-ba">
          Jln Hayamwuruk no 12 Bantul Yogyakarta
        </p>
      </b>
      <b className="rp-150000">{`Rp 150.000 `}</b>
      <ContainerWrapper />
      <button className="vector-container">
        <img className="frame-child4" alt="" src="/rectangle-3.svg" />
        <b className="checkout">CheckOut</b>
      </button>
    </div>
  );
};

export default Pembayaran;
