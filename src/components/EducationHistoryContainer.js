import "./EducationHistoryContainer.css";

const EducationHistoryContainer = () => {
  return (
    <div className="pendidikan-terakhir-parent">
      <b className="pendidikan-terakhir">Pendidikan Terakhir</b>
      <b className="asal-universitas">Asal Universitas</b>
      <b className="jurusan">Jurusan</b>
      <b className="ipk">{`IPK `}</b>
      <b className="upload-ijazah">Upload Ijazah</b>
      <div className="frame-child181" />
      <div className="upload-cv-parent">
        <b className="upload-cv">Upload CV</b>
        <div className="frame-child182" />
      </div>
      <div className="upload-foto-3x4-parent">
        <b className="upload-foto-3x4-container">
          <p className="upload-foto">{`Upload Foto `}</p>
          <p className="upload-foto">3x4</p>
        </b>
        <div className="frame-child183" />
      </div>
      <div className="frame-parent65">
        <div className="frame-child184" />
        <b className="upload-dokumen-pendukung-container">
          <p className="upload-foto">Upload</p>
          <p className="upload-foto">{`Dokumen `}</p>
          <p className="upload-foto">Pendukung</p>
        </b>
      </div>
      <b className="riwayat-pendidikan">RIWAYAT PENDIDIKAN</b>
    </div>
  );
};

export default EducationHistoryContainer;
