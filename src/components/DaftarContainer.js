import "./DaftarContainer.css";
import { Link } from "react-router-dom";

const DaftarContainer = () => {
  return (
    <div className="frame-parent55">
      <div className="user-round-parent">
        <img className="user-round-icon1" alt="" src="/user-round.svg" />
        <div className="nama-pengguna">Nama pengguna</div>
      </div>
      <div className="user-round-parent">
        <div className="vector-wrapper">
          <img className="vector-icon3" alt="" src="/vector2.svg" />
        </div>
        <div className="kata-sandi">Kata sandi</div>
      </div>
      <div className="user-round-parent">
        <div className="vector2">
          <img className="vector-icon4" alt="" src="/vector3.svg" />
        </div>
        <div className="email1">Email</div>
      </div>
      <div className="user-round-parent">
        <div className="vector3">
          <img className="vector-icon5" alt="" src="/vector4.svg" />
        </div>
        <div className="kata-sandi">Nomor telepon</div>
      </div>
      <Link to="/login">
      <button className="daftar-container">
        <b className="daftar2">Daftar</b>
      </button>
      </Link>
      <Link to="/login">
      <button className="masuk-akun-wrapper">
        <b className="masuk-akun1">Masuk akun</b>
      </button>
      </Link>
    </div>
  );
};

export default DaftarContainer;
