import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PrimarySidebar from "../components/primary-sidebar";
import SecondarySidebar from "../components/secondary-sidebar";
import FrameComponent from "../components/frame-component";
import "./site-setting-general-a-d-s-b-v.css";

const SiteSettingGeneralADSBV = () => {
  const navigate = useNavigate();

  return (
    <div className="site-setting-general-adsb-v">
      <header className="topbar6">
        <div className="topbar-content5">
          <div className="frame-container">
            <div className="aquqairxlogo-wrapper1">
              <div className="aquqairxlogo6" />
            </div>
            <div className="aquaairx-wrapper3">
              <div className="aquaairx6">
                <span>AquaAir</span>
                <b className="x6">X</b>
              </div>
            </div>
            <img className="menu-icon6" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status10">
          <div className="connection-status-child4" />
          <div className="connection-status11">
            <a className="disconnected6">Disconnected</a>
          </div>
          <img
            className="connection-icon5"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </header>
      <main className="primary-sidebar-parent">
        <PrimarySidebar />
        <SecondarySidebar  />
        <section className="a-d-s-b-setting">
          <div className="a-d-s-b-setting-child" />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralADSBV;
