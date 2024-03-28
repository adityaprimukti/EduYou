import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BeforeLogin from "./pages/BeforeLogin";
import Registrasi from "./pages/Registrasi";
import Login from "./pages/Login";
import Kelas from "./pages/Kelas";
import AfterLogin from "./pages/AfterLogin";
import PendaftaranTutoring from "./pages/PendaftaranTutoring";
import Pembayaran from "./pages/Pembayaran";
import SubKategori from "./pages/SubKategori";
import TemukanMentor from "./pages/TemukanMentor";
import Mentor from "./pages/Mentor";
import Notifikasi from "./pages/Notifikasi";
import Chat from "./pages/Chat";
import Checkout from "./pages/Checkout";
import PembayaranOke from "./pages/PembayaranOke";
import Profil from "./pages/Profil";
import NotifDaftarMentor from "./pages/NotifDaftarMentor";
import Chatting from "./pages/Chatting";
import Ulasan from "./pages/Ulasan";
import Ulasandikirim from "./pages/Ulasandikirim";
import PendaftaranMentor from "./pages/PendaftaranMentor";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/kelas":
        title = "";
        metaDescription = "";
        break;
      case "/afterlogin":
        title = "";
        metaDescription = "";
        break;
      case "/pendaftaran-tutoring":
        title = "";
        metaDescription = "";
        break;
      case "/pembayaran":
        title = "";
        metaDescription = "";
        break;
      case "/subkategori":
        title = "";
        metaDescription = "";
        break;
      case "/temukanmentor":
        title = "";
        metaDescription = "";
        break;
      case "/mentor":
        title = "";
        metaDescription = "";
        break;
      case "/notifikasi":
        title = "";
        metaDescription = "";
        break;
      case "/chat":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/pembayaranoke":
        title = "";
        metaDescription = "";
        break;
      case "/profil":
        title = "";
        metaDescription = "";
        break;
      case "/notifdaftarmentor":
        title = "";
        metaDescription = "";
        break;
      case "/chatting":
        title = "";
        metaDescription = "";
        break;
      case "/ulasan":
        title = "";
        metaDescription = "";
        break;
      case "/ulasandikirim":
        title = "";
        metaDescription = "";
        break;
      case "/pendaftaranmentor":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BeforeLogin />} />
      <Route path="/register" element={<Registrasi />} />
      <Route path="/login" element={<Login />} />
      <Route path="/kelas" element={<Kelas />} />
      <Route path="/afterlogin" element={<AfterLogin />} />
      <Route path="/pendaftaran-tutoring" element={<PendaftaranTutoring />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/subkategori" element={<SubKategori />} />
      <Route path="/temukanmentor" element={<TemukanMentor />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/notifikasi" element={<Notifikasi />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pembayaranoke" element={<PembayaranOke />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/notifdaftarmentor" element={<NotifDaftarMentor />} />
      <Route path="/chatting" element={<Chatting />} />
      <Route path="/ulasan" element={<Ulasan />} />
      <Route path="/ulasandikirim" element={<Ulasandikirim />} />
      <Route path="/pendaftaranmentor" element={<PendaftaranMentor />} />
    </Routes>
  );
}
export default App;
