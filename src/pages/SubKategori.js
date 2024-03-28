import SubCategoryContainer from "../components/SubCategoryContainer";
import MentorSearchContainer1 from "../components/MentorSearchContainer1";
import PromotionContainer from "../components/PromotionContainer";
import UserListContainer from "../components/UserListContainer";
import "./SubKategori.css";
import { Link } from "react-router-dom/dist";

const SubKategori = () => {
  return (
    <div className="subkategori">
      <SubCategoryContainer />
      <MentorSearchContainer1 />
      <PromotionContainer />
      <div className="review">
        <div className="mantan-siswa-kami-memberikan-u-parent">
          <b className="mantan-siswa-kami-container">
            <p className="mantan-siswa-kami">{`Mantan siswa kami `}</p>
            <p className="mantan-siswa-kami">
              memberikan ulasan kepada guru Bahasa Inggris mereka
            </p>
          </b>
          <UserListContainer
            authorName="Hubber Hollan"
            fullName="Prananda Setya, "
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
        <Link to="/temukanmentor">
        <button className="lihat-lebih-banyak-wrapper1">
          <div className="lihat-lebih-banyak3">Lihat lebih banyak</div>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SubKategori;
