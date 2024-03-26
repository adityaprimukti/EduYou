import EventCardContainer from "../components/EventCardContainer";
import DropdownContainer from "../components/DropdownContainer";
import "./PendaftaranTutoring.css";

const PendaftaranTutoring = () => {
  return (
    <div className="pendaftaran-tutoring">
      <button className="vector-parent">
        <img className="arrow-icon" alt="" src="/arrow-2.svg" />
        <img className="group-child1" alt="" src="/group-274@2x.png" />
      </button>
      <EventCardContainer />
      <b className="daftarkan-diri-anda">DAFTARKAN DIRI ANDA</b>
      <b className="nama-lengkap">Nama Lengkap</b>
      <div className="pendaftaran-tutoring-child" />
      <b className="sesi">Sesi</b>
      <div className="chevron-down-wrapper">
        <DropdownContainer />
      </div>
      <b className="alamat">Alamat</b>
      <div className="pendaftaran-tutoring-item" />
      <b className="no-hp">No Hp</b>
      <div className="pendaftaran-tutoring-inner" />
      <b className="tanggal">Tanggal</b>
      <div className="calendar-1-wrapper">
        <img className="calendar-1-icon" alt="" src="/calendar-11.svg" />
      </div>
      <b className="rp-150000-container">
        <span>{`Rp 150.000 `}</span>
        <span className="jam">/ jam</span>
      </b>
      <img className="rectangle-icon" alt="" src="/rectangle-3.svg" />
      <button className="selanjutnya">Selanjutnya</button>
    </div>
  );
};

export default PendaftaranTutoring;
