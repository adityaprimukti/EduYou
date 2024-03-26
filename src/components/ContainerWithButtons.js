import "./ContainerWithButtons.css";

const ContainerWithButtons = () => {
  return (
    <div className="frame-parent56">
      <div className="user-round-group">
        <img className="user-round-icon2" alt="" src="/user-round.svg" />
        <div className="nama-pengguna1">Nama pengguna</div>
      </div>
      <div className="user-round-group">
        <div className="vector-frame">
          <img className="vector-icon6" alt="" src="/vector2.svg" />
        </div>
        <div className="kata-sandi1">Kata sandi</div>
      </div>
      <button className="masuk-container">
        <b className="masuk1">Masuk</b>
      </button>
      <button className="daftar-frame">
        <b className="daftar3">Daftar</b>
      </button>
    </div>
  );
};

export default ContainerWithButtons;
