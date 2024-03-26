import ContainerWithButtons from "../components/ContainerWithButtons";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-child" />
      <div className="vector1" />
      <div className="masuk-akun">Masuk akun</div>
      <img className="logo-eduyou-07-41" alt="" src="/logo-eduyou07-4@2x.png" />
      <ContainerWithButtons />
    </div>
  );
};

export default Login;
