import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import ContentPanel from "../components/content-panel";
import "./site-setting-general-teleme.css";

const SiteSettingGeneralTeleme = () => {
  const navigate = useNavigate();

  const onPanelIconsClick = useCallback(() => {
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
    <div className="site-setting-general-teleme">
      <header className="topbar1">
 
        <div className="topbar-content1">
          <div className="frame-parent">
            <div className="aquqairxlogo-container">
              <div className="aquqairxlogo1" />
            </div>
            <div className="aquaairx-container">
              <div className="aquaairx1">
                <span>AquaAir</span>
                <b className="x1">X</b>
              </div>
            </div>
            <img className="menu-icon1" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status2">
          <div className="connection-status-item" />
          <div className="connection-status3">
            <a className="disconnected1">Disconnected</a>
          </div>
          <img
            className="connection-icon1"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </header>
      <main className="sidebar-layout">
        <PrimarySidebar />
        <div className="secondary-sidebar1">
          <div className="details-header">
            <a className="general1">General:</a>
          </div>
          <div className="setting-panels">
            <div className="fly-view-parent"onClick={onPanelIconsClick}>
              <a className="fly-view2">Fly View</a>
            </div>
            <div className="planview-parent" onClick={onRectangleClick}>
              <div className="plan-view2">Plan View</div>
            </div>
            <div className="unit-parent" onClick={onRectangleClick1}>
              <div className="units2">Units</div>
            </div>
            <div className="misc-parent"onClick={onRectangleClick2}>
              <div className="miscellaneous2">Miscellaneous</div>
            </div>
            <div className="logs-parent">
              <div className="telemetry-logs-from1">Telemetry Logs From Vehicle</div>
            </div>
            <div className="auto-parent"onClick={onRectangleClick3}>
              <div className="autoconnect-to-devices1">
                AutoConnect to devices
              </div>
            </div>
            <div className="rtk-parent"onClick={onRectangleClick4}>
              <div className="rtk-gps2">RTK GPS</div>
            </div>
            <div className="adsb-parent"onClick={onRectangleClick5}>
              <div className="adsb-server2">ADSB Server</div>
            </div>
            
          </div>
        </div>
        <section className="settings-content">
          <div className="settings-content-child" />
          <ContentPanel />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralTeleme;
