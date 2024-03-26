import EnglishLearningContainer2 from "../components/EnglishLearningContainer2";
import UserListContainer from "../components/UserListContainer";
import ThankYouMessageContainer from "../components/ThankYouMessageContainer";
import "./Mentor.css";

const Mentor = () => {
  return (
    <div className="mentor">
      <EnglishLearningContainer2 />
      <div className="review-3">
        <UserListContainer
          authorName="Shani Indira"
          fullName=" "
          propLeft="208px"
          propTop="104px"
        />
        <ThankYouMessageContainer />
        <ThankYouMessageContainer propTop="454px" propLeft="992px" />
        <ThankYouMessageContainer propTop="454px" propLeft="208px" />
        <UserListContainer
          authorName="Shani Indira"
          fullName=" "
          propLeft="206px"
          propTop="866px"
        />
        <ThankYouMessageContainer propTop="866px" propLeft="990px" />
        <ThankYouMessageContainer propTop="1216px" propLeft="990px" />
        <ThankYouMessageContainer propTop="1216px" propLeft="206px" />
        <UserListContainer
          authorName="Shani Indira"
          fullName=" "
          propLeft="206px"
          propTop="1625px"
        />
        <ThankYouMessageContainer propTop="1625px" propLeft="990px" />
        <ThankYouMessageContainer propTop="1975px" propLeft="990px" />
        <ThankYouMessageContainer propTop="1975px" propLeft="206px" />
        <button className="lihat-lebih-banyak-wrapper3">
          <div className="lihat-lebih-banyak5">Lihat lebih banyak</div>
        </button>
      </div>
    </div>
  );
};

export default Mentor;
