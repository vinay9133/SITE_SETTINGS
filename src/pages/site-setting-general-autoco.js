import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import ComponentList from "../components/component-list";
import "./site-setting-general-autoco.css";

const SiteSettingGeneralAutoco = () => {
  const navigate = useNavigate();

  const onFeatureIconsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/site-setting-general-plan-view");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/site-setting-general-units-view");
  }, [navigate]);

  const onRectangleClick2 = useCallback(() => {
    navigate("/site-setting-general-miscellaneous-view");
  }, [navigate]);

  const onRectangleClick3 = useCallback(() => {
    navigate("/site-setting-general-telemetry-view");
  }, [navigate]);

  const onRectangleClick4 = useCallback(() => {
    navigate("/site-setting-general-rtk-view");
  }, [navigate]);

  const onRectangleClick5 = useCallback(() => {
    navigate("/site-setting-general-adsb-view");
  }, [navigate]);

  const onRectangleClick6 = useCallback(() => {
    navigate("/site-setting-general-brandimage-view");
  }, [navigate]);

  return (
    <div className="site-setting-general-autoco">
      <header className="topbar8">
        <div className="topbar-child6" />
        <div className="logo-container-wrapper">
          <div className="logo-container2">
            <div className="logo-placeholder">
              <div className="aquqairxlogo8" />
            </div>
            <div className="aquaairx-wrapper4">
              <div className="aquaairx8">
                <span>AquaAir</span>
                <b className="x8">X</b>
              </div>
            </div>
            <img className="menu-icon8" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status13">
          <div className="status2">
            <a className="disconnected8">Disconnected</a>
          </div>
          <img className="connection-icon7" loading="lazy" alt="" src="/vector.svg" />
        </div>
      </header>
      <main className="sidebar-wrapper">
        <PrimarySidebar />
        <div className="secondary-sidebar6">
          <div className="secondary-sidebar-child4" />
          <div className="sidebar-title2">
            <a className="general6">General:</a>
          </div>
          <div className="frame-parent2">
            <div className="feature-icons-parent"onClick={onFeatureIconsClick}>
              <a className="fly-view8">Fly View</a>
            </div>
            <div className="rectangle-parent31"onClick={onRectangleClick}>
              <div className="plan-view8">Plan View</div>
            </div>
            <div className="rectangle-parent32"onClick={onRectangleClick1}>
              <div className="units8">Units</div>
            </div>
            <div className="rectangle-parent33"onClick={onRectangleClick2}>
              <div className="miscellaneous8">Miscellaneous</div>
            </div>
            <div className="rectangle-parent34"onClick={onRectangleClick3} >
              <div className="telemetry-logs-from6">Telemetry Logs From Vehicle</div>
            </div>
            <div className="rectangle-parent35">
              <div className="autoconnect-to-devices6">AutoConnect to devices</div>
            </div>
            <div className="rectangle-parent36"onClick={onRectangleClick4}>
              <div className="rtk-gps8">RTK GPS</div>
            </div>
            <div className="rectangle-parent37"onClick={onRectangleClick5}>
              <div className="adsb-server8">ADSB Server</div>
            </div>
          </div>
        </div>
        <section className="frame-section">
          <div className="frame-child39" />
          <ComponentList />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralAutoco;
