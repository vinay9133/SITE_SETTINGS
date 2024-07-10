import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import UnitsContainer from "../components/units-container";
import "./site-setting-general-units.css";

const SiteSettingGeneralUnits = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/site-setting-general-plan-view");
  }, [navigate]);

  const onRectangleClick2 = useCallback(() => {
    navigate("/site-setting-general-miscellaneous-view");
  }, [navigate]);

  const onRectangleClick3 = useCallback(() => {
    navigate("/site-setting-general-telemetry-view");
  }, [navigate]);

  const onRectangleClick4 = useCallback(() => {
    navigate("/site-setting-general-autoconnectview");
  }, [navigate]);

  const onRectangleClick5 = useCallback(() => {
    navigate("/site-setting-general-rtk-view");
  }, [navigate]);

  const onRectangleClick6 = useCallback(() => {
    navigate("/site-setting-general-adsb-view");
  }, [navigate]);


  return (
    <div className="site-setting-general-units">
      <header className="topbar3">
  
        <div className="topbar-content3">
          <div className="logo-container-parent">
            <div className="logo-container">
              <div className="aquqairxlogo3" />
            </div>
            <div className="aquaairx-frame">
              <div className="aquaairx3">
                <span>AquaAir</span>
                <b className="x3">X</b>
              </div>
            </div>
            <img className="menu-icon3" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status6">
          <div className="connection-status-child1" />
          <div className="status">
            <a className="disconnected3">Disconnected</a>
          </div>
          <img
            className="connection-icon3"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </header>
      <main className="sidebar-container1">
        <PrimarySidebar />
        <div className="secondary-sidebar3">
          <div className="sidebar-title1">
            <a className="general3">General:</a>
          </div>
          <div className="setting-categories">
            <div className="rectangle-parent13" onClick={onRectangleClick}>
              <a className="fly-view4">Fly View</a>
            </div>
            <div className="rectangle-parent14" onClick={onRectangleClick1}>
              <div className="plan-view4">Plan View</div>
            </div>
            <div className="rectangle-parent15">
              <div className="units4">Units</div>
            </div>
            <div className="rectangle-parent16" onClick={onRectangleClick2}>
              <div className="miscellaneous4">Miscellaneous</div>
            </div>
            <div className="rectangle-parent17" onClick={onRectangleClick3}>
              <div className="telemetry-logs-from3">
                Telemetry Logs From Vehicle
              </div>
            </div>
            <div className="rectangle-parent18" onClick={onRectangleClick4}>
              <div className="autoconnect-to-devices3">
                AutoConnect to devices
              </div>
            </div>
            <div className="rectangle-parent19" onClick={onRectangleClick5}>
              <div className="rtk-gps4">RTK GPS</div>
            </div>
            <div className="rectangle-parent20" onClick={onRectangleClick6}>
              <div className="adsb-server4">ADSB Server</div>
            </div>

          </div>
        </div>
        <section className="units-settings">
          <div className="units-settings-child" />
          <UnitsContainer />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralUnits;
