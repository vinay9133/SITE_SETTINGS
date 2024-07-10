import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import SafetyOptions from "../components/safety-options";
import "./site-setting-general-fly-vi.css";

const SiteSettingGeneralFlyVi = () => {
  const navigate = useNavigate();

  const onPlanViewContainerClick = useCallback(() => {
    navigate("/site-setting-general-plan-view");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/site-setting-general-units-view");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/site-setting-general-miscellaneous-view");
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
    <div className="site-setting-general-fly-vi">
      <header className="topbar">
        <div className="topbar-content-wrapper">
          <div className="topbar-content">
            <div className="aquqairxlogo-wrapper">
              <div className="aquqairxlogo" />
            </div>
            <div className="aquaairx-wrapper">
              <div className="aquaairx">
                <span>AquaAir</span>
                <b className="x">X</b>
              </div>
            </div>
            <img className="menu-icon" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status">
          <div className="connection-status1">
            <a className="disconnected">Disconnected</a>
          </div>
          <img className="connection-icon" loading="lazy" alt="" src="/vector.svg" />
        </div>
      </header>
      <main className="sidebar-container">
        <PrimarySidebar />
        <div className="secondary-sidebar">
          <div className="sidebar-title">
            <a className="general">General:</a>
          </div>
          <div className="view-settings">
            <div className="fly-view">
              <a className="fly-view1">Fly View</a>
            </div>
            <div className="plan-view" onClick={onPlanViewContainerClick}>
              <div className="plan-view1">Plan View</div>
            </div>
            <div className="units" onClick={onRectangleClick}>
              <div className="units1">Units</div>
            </div>
            <div className="miscellaneous" onClick={onRectangleClick1}>
              <div className="miscellaneous1">Miscellaneous</div>
            </div>
            <div className="logs" onClick={onRectangleClick2}>
              <div className="telemetry-logs-from">Telemetry Logs From Vehicle</div>
            </div>
            <div className="auto-connect" onClick={onRectangleClick3}>
              <div className="autoconnect-to-devices">AutoConnect to devices</div>
            </div>
            <div className="rtk-gps" onClick={onRectangleClick4}>
              <div className="rtk-gps1">RTK GPS</div>
            </div>
            <div className="adsb-server" onClick={onRectangleClick5}>
              <div className="adsb-server1">ADSB Server</div>
            </div>
          </div>
        </div>
        <section className="safety-settings">
          <SafetyOptions />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralFlyVi;
