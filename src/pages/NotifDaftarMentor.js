import "./NotifDaftarMentor.css";

const NotifDaftarMentor = () => {
  return (
    <div className="notifdaftarmentor">
      <div className="notifdaftarmentor-child" />
      <b className="pendaftaran-mentor-dikirim">PENDAFTARAN MENTOR DIKIRIM</b>
      <b className="lamaranmu-akan-kami-container">
        <p className="lamaranmu-akan-kami">{`Lamaranmu akan kami proses terlebih dahulu. `}</p>
        <p className="lamaranmu-akan-kami">
          Segala pemberitahuan akan kami kirimkan melalui notifikasi.
        </p>
        <p className="lamaranmu-akan-kami">{`Cek secara berkala. `}</p>
        <p className="lamaranmu-akan-kami">Terimakasih, Semoga Sukses!!</p>
      </b>
      <button className="vector-parent3">
        <img className="frame-child18" alt="" src="/rectangle-3.svg" />
        <b className="kembali">Kembali</b>
      </button>
      <img className="logo-eduyou-07-21" alt="" src="/logo-eduyou07-2@2x.png" />
    </div>
  );
};

export default NotifDaftarMentor;
