import TutorSearchContainer from "../components/TutorSearchContainer";
import PromotionContainer1 from "../components/PromotionContainer1";
import UserListContainer from "../components/UserListContainer";
import "./TemukanMentor.css";

const TemukanMentor = () => {
  return (
    <div className="temukanmentor">
      <TutorSearchContainer />
      <PromotionContainer1 />
      <div className="review-2">
        <div className="mantan-siswa-kami-memberikan-u-group">
          <b className="mantan-siswa-kami-container1">
            <p className="mantan-siswa-kami1">{`Mantan siswa kami `}</p>
            <p className="mantan-siswa-kami1">
              memberikan ulasan kepada guru Bahasa Inggris mereka
            </p>
          </b>
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
            propLeft="0px"
            propTop="291px"
          />
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
            propLeft="784px"
            propTop="291px"
          />
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
            propLeft="784px"
            propTop="641px"
          />
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
            propLeft="0px"
            propTop="641px"
          />
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
            propLeft="0px"
            propTop="991px"
          />
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
            propLeft="784px"
            propTop="991px"
          />
        </div>
        <button className="lihat-lebih-banyak-wrapper2">
          <div className="lihat-lebih-banyak4">Lihat lebih banyak</div>
        </button>
      </div>
    </div>
  );
};

export default TemukanMentor;
