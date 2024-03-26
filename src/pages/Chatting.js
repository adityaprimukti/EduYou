import CameraIcon from "../components/CameraIcon";
import "./Chatting.css";

const Chatting = () => {
  return (
    <div className="chatting">
      <div className="eveny-hogward-parent">
        <b className="eveny-hogward2">Eveny Hogward</b>
        <img className="mask-group-icon1" alt="" src="/mask-group26@2x.png" />
      </div>
      <div className="container">
        <img className="icon" alt="" src="/3483089-1@2x.png" />
      </div>
      <div className="chatting-child" />
      <b className="tulis-pesan">Tulis Pesan ...</b>
      <button className="ellipse-container">
        <div className="group-child8" />
        <img className="group-child9" alt="" src="/arrow-2.svg" />
        <img className="group-child10" alt="" src="/vector-5.svg" />
      </button>
      <div className="menit-lalu">12 menit lalu</div>
      <img className="pesawat-2-icon" alt="" src="/pesawat-2@2x.png" />
      <div className="halo-eveny-nama-saya-shani-da-wrapper">
        <b className="halo-eveny-nama-container">
          <p className="halo-eveny">Halo Eveny,</p>
          <p className="halo-eveny">
            Nama saya SHANI dan saya sedang mencari seorang guru Bahasa Inggris.
          </p>
          <p className="halo-eveny">
            Saya ingin mengambil kursus secara online / daring.
          </p>
          <p className="halo-eveny">
            Idealnya, saya ingin memulai kursus sesegera mungkin.
          </p>
          <p className="halo-eveny">
            Apakah Anda setuju dengan hal ini ? Bisakah Anda menghubungi saya
            agar kita bisa mendiskusikan ini lebih lanjut ?
          </p>
          <p className="halo-eveny">Semoga hari Anda menyenangkan,</p>
          <p className="halo-eveny">Sampai nanti, SHANI</p>
        </b>
      </div>
      <div className="haii-terimakasih-sudah-menghub-parent">
        <b className="haii-terimakasih-sudah-container">
          <p className="halo-eveny">{`Haii terimakasih sudah menghubungi. Pesanmu ini dibalas `}</p>
          <p className="halo-eveny">
            otomatis, tunggu beberapa saat lagi yaa!!
          </p>
        </b>
        <b className="b">20.30</b>
      </div>
      <CameraIcon
        cameraIconCamera="/camera.svg"
        cameraIconWidth="86px"
        cameraIconOverflow="unset"
        cameraIconHeight="75px"
        cameraIconPosition="absolute"
        cameraIconTop="968px"
        cameraIconLeft="26px"
      />
      <div className="parent">
        <b className="b1">{`20.30   `}</b>
        <img className="frame-child19" alt="" src="/group-260.svg" />
      </div>
    </div>
  );
};

export default Chatting;
