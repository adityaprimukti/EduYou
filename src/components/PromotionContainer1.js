import "./PromotionContainer1.css";

const PromotionContainer1 = () => {
  return (
    <div className="promotion-2">
      <div className="promotion-2-child" />
      <div className="promotion-2-item" />
      <div className="promotion-2-inner" />
      <b className="guru-kami-memiliki1">
        Guru kami memiliki nilai ulasan rata-rata 5 dan memiliki lebih dari 100
        ulasan
      </b>
      <b className="harga-terbaik-991">
        Harga terbaik: 99% guru menawarkan kursus gratis pada pertemuan pertama
        dan rata-rata tarif Rp 102.000 / jam
      </b>
      <b className="secepat-kilat-guru-guru1">
        Secepat kilat: Guru-guru kami biasanya merespon kurang dari 4 jam
      </b>
      <div className="div2">
        <b>
          <span>5</span>
        </b>
        <span>
          <b>/</b>
          <span className="span2">5</span>
        </span>
      </div>
      <b className="rp-102000-container1">
        <span>{`Rp 102.000 `}</span>
        <span className="jam3">{`/ jam `}</span>
      </b>
      <b className="jam4">4 Jam</b>
      <img className="promotion-2-child1" alt="" src="/star-11.svg" />
    </div>
  );
};

export default PromotionContainer1;
