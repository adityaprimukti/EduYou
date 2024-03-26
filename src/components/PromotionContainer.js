import "./PromotionContainer.css";

const PromotionContainer = () => {
  return (
    <div className="promotion">
      <div className="frame-parent63">
        <div className="rectangle-parent29">
          <div className="frame-child152" />
          <div className="frame-child153" />
          <div className="frame-child154" />
        </div>
        <b className="guru-kami-memiliki">
          Guru kami memiliki nilai ulasan rata-rata 5 dan memiliki lebih dari
          100 ulasan
        </b>
        <b className="harga-terbaik-99">
          Harga terbaik: 99% guru menawarkan kursus gratis pada pertemuan
          pertama dan rata-rata tarif Rp 102.000 / jam
        </b>
        <b className="secepat-kilat-guru-guru">
          Secepat kilat: Guru-guru kami biasanya merespon kurang dari 4 jam
        </b>
        <div className="div1">
          <b>
            <span>5</span>
          </b>
          <span>
            <b>/</b>
            <span className="span1">5</span>
          </span>
        </div>
        <b className="rp-102000-container">
          <span>{`Rp 102.000 `}</span>
          <span className="jam1">{`/ jam `}</span>
        </b>
        <b className="jam2">4 Jam</b>
        <img className="frame-child155" alt="" src="/star-11.svg" />
      </div>
    </div>
  );
};

export default PromotionContainer;
