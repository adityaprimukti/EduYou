import { useMemo } from "react";
import "./ZoomClassContainer.css";

const ZoomClassContainer = ({ propTop }) => {
  const footerStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="frame13">
        <div className="footer1">
          <div className="logo-eduyou-07-2-parent">
            <img
              className="logo-eduyou-07-23"
              alt=""
              src="/logo-eduyou07-2@2x.png"
            />
            <div className="frame-child82" />
            <div className="virtual-class-for">Virtual Class for Zoom</div>
          </div>
          <div className="frame14">
            <div className="frame-parent50">
              <div className="careers-parent">
                <div className="careers">Careers</div>
                <div className="frame-child83" />
                <div className="privacy-policy">Privacy Policy</div>
                <div className="frame-child83" />
                <div className="terms-conditions">{`Terms & Conditions`}</div>
              </div>
              <div className="webbers-team">{`© 2024 Webbers Team. `}</div>
            </div>
            <div className="english-math-recite-sing-commu-parent">
              <div className="english-math-recite-container">
                <ul className="english-math-recite-sing-commu">
                  <li className="musical-instrumental">English</li>
                  <li className="musical-instrumental">Math</li>
                  <li className="musical-instrumental">Recite</li>
                  <li className="musical-instrumental">Sing</li>
                  <li className="musical-instrumental">Communication</li>
                  <li>leadership</li>
                </ul>
              </div>
              <div className="frame15">
                <div className="marketing-biologi-social-container">
                  <ul className="english-math-recite-sing-commu">
                    <li className="musical-instrumental">Marketing</li>
                    <li className="musical-instrumental">Biologi</li>
                    <li className="musical-instrumental">Social Branding</li>
                    <li className="musical-instrumental">
                      Musical Instrumental
                    </li>
                    <li className="musical-instrumental">Enterpreneurship</li>
                    <li>Business</li>
                  </ul>
                </div>
                <div className="frame16">
                  <div className="germany-french-japan-container">
                    <ul className="english-math-recite-sing-commu">
                      <li className="musical-instrumental">Germany</li>
                      <li className="musical-instrumental">French</li>
                      <li className="musical-instrumental">Japan</li>
                      <li className="musical-instrumental">Design</li>
                      <li className="musical-instrumental">Painting</li>
                      <li>Programmer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomClassContainer;
