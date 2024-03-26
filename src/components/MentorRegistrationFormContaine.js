import "./MentorRegistrationFormContaine.css";

const MentorRegistrationFormContaine = () => {
  return (
    <div className="pendaftaran-mentor">
      <b className="form-pendaftaran-mentor">FORM PENDAFTARAN MENTOR</b>
      <img
        className="pendaftaran-mentor-child"
        alt=""
        src="/group-1524@2x.png"
      />
      <div className="pendaftaran-mentor-item" />
      <b className="isilah-form-di">Isilah form di bawah ini dengan benar</b>
      <div className="pendaftaran-mentor-inner" />
      <div className="pendaftaran-mentor-child1" />
      <b className="pilih-kategori">Pilih Kategori</b>
      <b className="judul-kursus">Judul Kursus</b>
      <b className="minimal-12-kata">Minimal 12 kata</b>
      <b className="minimal-40-kata">Minimal 40 kata</b>
      <div className="contoh-learn-english-from-nat-wrapper">
        <div className="contoh-learn-english">
          Contoh. Learn English from native speaker in Bandung who won multiple
          speech competition
        </div>
      </div>
      <div className="pendaftaran-mentor-child2" />
      <b className="pilih-sesi-anda">Pilih Sesi Anda</b>
      <b className="harga-kursus-per">Harga Kursus Per Jam</b>
      <b className="minimal-40-kata1">Minimal 40 kata</b>
      <b className="tentang-anda">Tentang Anda</b>
      <div className="contoh-saya-seorang">
        Contoh. Saya seorang profesional photographer dan videographer yang
        menggunakan waktu luang saya untuk mengajar bahasa inggris dan dari
        EduYou saya berharap saya dapat berbagi ilmu kepada teman-teman dengan
        pengalaman yang saya miliki dan keahlian saya sebagai native speaker
        dengan pencapaian sebagai pemenang berbagai perlombaan dalam bidang
        bahasa inggris.
      </div>
      <b className="tentang-kursus-anda">Tentang Kursus Anda</b>
      <div className="dalam-kursus-ini-container1">
        <span>{`Dalam kursus ini, saya akan menyediakan kelas `}</span>
        <b>{`ONLINE `}</b>
        <span>{`dan `}</span>
        <b>{`OFFLINE. `}</b>
        <span className="metode-pengajaran-yang1">
          Metode pengajaran yang saya lakukan adalah dengan memulainya
          menggunakan pendekatan yang teman-teman inginkan yang lebih berfokus
          kepada conversational skill seperti pada simulai obrolan harian,
          obrolan pekerjaan, presentasi dan juga debat dengan menggunakan media
          yang diinginkan teman-teman secara online atau daring.
        </span>
      </div>
      <b className="mentor3">MENTOR</b>
    </div>
  );
};

export default MentorRegistrationFormContaine;
