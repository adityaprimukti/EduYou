import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout1">
      <button className="group-button">
        <img className="group-child6" alt="" src="/arrow-2.svg" />
        <img className="group-child7" alt="" src="/group-1522@2x.png" />
      </button>
      <b className="checkout2">CHECKOUT</b>
      <b className="nama-no-alamat-container">
        <p className="virtual-number-account">Nama</p>
        <p className="no1">{`No     `}</p>
        <p className="virtual-number-account">Alamat</p>
      </b>
      <b className="shani-indira-082333656778-container1">
        <p className="virtual-number-account">Shani Indira</p>
        <p className="no1">{`082333656778     `}</p>
        <p className="virtual-number-account">
          Jln Hayamwuruk no 12 Bantul Yogyakarta
        </p>
      </b>
      <b className="rp-1500001">{`Rp 150.000 `}</b>
      <div className="virtual-number-account-9200101-parent">
        <div className="virtual-number-account-container">
          <p className="virtual-number-account">
            <b>
              <span>Virtual Number Account</span>
            </b>
          </p>
          <p className="eduyou">
            <b>
              <span>92001017719697760</span>
            </b>
          </p>
          <p className="virtual-number-account">
            <b>
              <span>Virtual Account Name</span>
            </b>
          </p>
          <p className="eduyou">
            <b>
              <span>EduYou</span>
            </b>
          </p>
          <p className="virtual-number-account">
            <b>
              <span>Amount to Pay</span>
            </b>
          </p>
          <p className="eduyou">
            <b>
              <span>IDR 150.000</span>
            </b>
          </p>
        </div>
        <img className="bri-icon" alt="" src="/bri1@2x.png" />
      </div>
      <div className="checkout-child" />
      <b className="eveny-howard-3-container">
        <p className="virtual-number-account">Eveny Howard</p>
        <p className="virtual-number-account">3 Juni 2024</p>
        <p className="virtual-number-account">Online</p>
      </b>
      <b className="mentor-tanggal-sesi-container">
        <p className="virtual-number-account">Mentor</p>
        <p className="virtual-number-account">Tanggal</p>
        <p className="virtual-number-account">Sesi</p>
      </b>
      <b className="invoice-0932836652738">Invoice: #0932836652738</b>
      <b className="lakukan-pembayaran-sebelum">
        *Lakukan pembayaran sebelum pukul 08.00 lalu klik OK
      </b>
      <button className="vector-parent2">
        <img className="frame-child17" alt="" src="/rectangle-3.svg" />
        <b className="ok">OK</b>
      </button>
    </div>
  );
};

export default Checkout;
