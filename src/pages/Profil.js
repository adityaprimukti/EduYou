import ProfileContainer from "../components/ProfileContainer";
import UserRoundIcon from "../components/UserRoundIcon";
import "./Profil.css";

const Profil = () => {
  return (
    <div className="profil">
      <ProfileContainer />
      <div className="profil2">
        <div className="profil2-child" />
        <div className="frame-parent1">
          <div className="frame2">
            <img className="frame-icon" alt="" src="/frame1@2x.png" />
            <div className="frame3">
              <div className="frame4">
                <b className="eveny-hogward1">Eveny Hogward</b>
                <div className="english1">English</div>
              </div>
            </div>
          </div>
          <div className="frame5">
            <div className="menunggu-jadwal">menunggu jadwal</div>
          </div>
        </div>
        <b className="permintaan-kursus-saya">PERMINTAAN KURSUS SAYA</b>
        <div className="profil2-inner">
          <div className="frame-parent2">
            <div className="foto-profil-parent">
              <b className="foto-profil">FOTO PROFIL</b>
              <UserRoundIcon
                userRoundIconUserRound="/user-round2.svg"
                userRoundIconWidth="215px"
                userRoundIconHeight="221px"
                userRoundIconPosition="absolute"
                userRoundIconTop="51px"
                userRoundIconLeft="21.5px"
              />
            </div>
            <button className="ubah-foto-profil-wrapper">
              <div className="ubah-foto-profil">Ubah Foto Profil</div>
            </button>
          </div>
        </div>
        <div className="profil2-inner1">
          <div className="identitas-diri-parent">
            <b className="identitas-diri">IDENTITAS DIRI</b>
            <div className="frame6">
              <div className="frame-parent3">
                <div className="frame-parent4">
                  <div className="username-parent">
                    <div className="username">Username</div>
                    <div className="shani-wrapper">
                      <div className="shani">Shani</div>
                    </div>
                  </div>
                  <div className="username-parent">
                    <div className="username">Nama</div>
                    <div className="shani-indira-wrapper">
                      <div className="shani">Shani Indira</div>
                    </div>
                  </div>
                  <div className="email-parent">
                    <div className="username">Email</div>
                    <div className="shaniindiragmailcom-wrapper">
                      <div className="shani">shaniindira@gmail.com</div>
                    </div>
                  </div>
                  <div className="email-parent">
                    <div className="username">Telepon</div>
                    <div className="wrapper">
                      <div className="shani">0823337809665</div>
                    </div>
                  </div>
                  <div className="email-parent">
                    <div className="password">Password</div>
                    <div className="sha-wrapper">
                      <div className="shani">sha*********</div>
                    </div>
                  </div>
                </div>
                <button className="ubah-foto-profil-wrapper">
                  <div className="ubah-foto-profil">Perbarui data</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
