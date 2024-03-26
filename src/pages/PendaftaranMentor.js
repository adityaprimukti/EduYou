import MentorRegistrationFormContaine from "../components/MentorRegistrationFormContaine";
import EducationHistoryContainer from "../components/EducationHistoryContainer";
import IdentityFormContainer from "../components/IdentityFormContainer";
import "./PendaftaranMentor.css";

const PendaftaranMentor = () => {
  return (
    <div className="pendaftaranmentor">
      <MentorRegistrationFormContaine />
      <div className="pendaftaran-mentoring-2">
        <div className="frame-parent5">
          <EducationHistoryContainer />
          <div className="sertifikat-dan-yang">
            *Sertifikat dan yang lainnya
          </div>
          <IdentityFormContainer />
          <button className="frame-wrapper">
            <div className="vector-parent4">
              <img className="vector-parent4" alt="" src="/rectangle-32.svg" />
              <b className="daftar">DAFTAR</b>
            </div>
          </button>
          <div className="frame-child22" />
          <div className="frame-child23" />
          <div className="frame-child24" />
          <div className="frame-child25" />
        </div>
      </div>
    </div>
  );
};

export default PendaftaranMentor;
