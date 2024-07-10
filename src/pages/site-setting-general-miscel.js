import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import SettingsDetailsContent from "../components/settings-details-content";
import "./site-setting-general-miscel.css";

const SiteSettingGeneralMiscel = () => {
  const navigate = useNavigate();

  const onOptionLabelsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/site-setting-general-plan-view");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/site-setting-general-units-view");
  }, [navigate]);

  const onRectangleClick2 = useCallback(() => {
    navigate("/site-setting-general-telemetry-view");
  }, [navigate]);

  const onRectangleClick3 = useCallback(() => {
    navigate("/site-setting-general-autoconnectview");
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
    <div className="site-setting-general-miscel">
      <header className="topbar2">
        <div className="topbar-inner" />
        <div className="topbar-content-container">
          <div className="topbar-content2">
            <div className="topbar-left">
              <div className="aquqairxlogo2" />
            </div>
            <div className="brand">
              <div className="aquaairx2">
                <span>AquaAir</span>
                <b className="x2">X</b>
              </div>
            </div>
            <img className="menu-icon2" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status4">
          <div className="connection-status-inner" />
          <div className="connection-status5">
            <a className="disconnected2">Disconnected</a>
          </div>
          <img
            className="connection-icon2"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </header>
      <main className="content">
        <PrimarySidebar />
        <div className="secondary-sidebar2">
          <div className="sidebar-secondary-header">
            <a className="general2">General:</a>
          </div>
          <div className="settings-options">
            <div className="rectangle-parent4"onClick={onOptionLabelsClick}>
              <a className="fly-view3">Fly View</a>
            </div>
            <div className="rectangle-parent5" onClick={onRectangleClick}>
              <div className="plan-view3">Plan View</div>
            </div>
            <div className="rectangle-parent6"onClick={onRectangleClick1}>
              <div className="units3">Units</div>
            </div>
            <div className="rectangle-parent7">
              <div className="miscellaneous3">Miscellaneous</div>
            </div>
            <div className="rectangle-parent8"onClick={onRectangleClick2}>
              <div className="telemetry-logs-from2"> Telemetry Logs From Vehicle</div>
            </div>
            <div className="rectangle-parent9"onClick={onRectangleClick3}>
              <div className="autoconnect-to-devices2">
                AutoConnect to devices
              </div>
            </div>
            <div className="rectangle-parent10"onClick={onRectangleClick4}>
              <div className="rtk-gps3">RTK GPS</div>
            </div>
            <div className="rectangle-parent11"onClick={onRectangleClick5}>
              <div className="adsb-server3">ADSB Server</div>
            </div>
          </div>
        </div>
        <section className="settings-details">
          <SettingsDetailsContent />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralMiscel;
