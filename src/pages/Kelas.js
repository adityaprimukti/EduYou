import "./Kelas.css";
import { Link } from "react-router-dom";

const Kelas = () => {
  return (
    <div className="kelas">
      <div className="kelas-child" />
      <img className="kelas-item" alt="" src="/group-56.svg" />
      <div className="write-your-keywoard">Write your keywoard</div>
      <button className="ellipse-parent">
        <div className="group-child" />
        <img className="group-item" alt="" src="/arrow-2.svg" />
        <img className="group-inner" alt="" src="/vector-5.svg" />
      </button>
      <div className="frame-group">
        <button className="lihat-lebih-banyak-container">
          <div className="sembunyikan">Lihat lebih banyak</div>
        </button>
        <button className="sembunyikan-wrapper">
          <div className="sembunyikan">Sembunyikan</div>
        </button>
      </div>
      <Link to="/temukanmentor">
      <button className="kelas-inner" />
      <div className="english">English</div>
      <div className="kelas-child1" />
      <button className="rectangle-button" />
      </Link>
      <div className="math">Math</div>
      <div className="kelas-child2" />
      <button className="kelas-child3" />
      <div className="recite">Recite</div>
      <div className="kelas-child4" />
      <button className="kelas-child5" />
      <div className="sing1">Sing</div>
      <div className="kelas-child6" />
      <button className="kelas-child7" />
      <div className="communication">Communication</div>
      <div className="kelas-child8" />
      <button className="kelas-child9" />
      <div className="leadership1">Leadership</div>
      <div className="kelas-child10" />
      <button className="kelas-child11" />
      <div className="germany">Germany</div>
      <div className="kelas-child12" />
      <button className="kelas-child13" />
      <div className="french">French</div>
      <div className="kelas-child14" />
      <button className="kelas-child15" />
      <div className="japan">Japan</div>
      <div className="kelas-child16" />
      <button className="kelas-child17" />
      <div className="design">Design</div>
      <div className="kelas-child18" />
      <button className="kelas-child19" />
      <div className="painting">Painting</div>
      <div className="kelas-child20" />
      <button className="kelas-child21" />
      <div className="programmer">Programmer</div>
      <div className="kelas-child22" />
      <button className="kelas-child23" />
      <div className="marketing">Marketing</div>
      <div className="kelas-child24" />
      <button className="kelas-child25" />
      <div className="biologi">Biologi</div>
      <div className="kelas-child26" />
      <button className="kelas-child27" />
      <div className="social-branding">Social Branding</div>
      <div className="kelas-child28" />
      <button className="kelas-child29" />
      <div className="musiceal-instrumental">
        <p className="musiceal">{`Musiceal `}</p>
        <p className="musiceal">Instrumental</p>
      </div>
      <div className="kelas-child30" />
      <button className="kelas-child31" />
      <div className="enterpreneurship">Enterpreneurship</div>
      <div className="kelas-child32" />
      <button className="kelas-child33" />
      <div className="business">Business</div>
      <div className="kelas-child34" />
    </div>
  );
};

export default Kelas;
