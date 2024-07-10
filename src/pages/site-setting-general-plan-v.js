import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import AltitudeDistance from "../components/altitude-distance";
import "./site-setting-general-plan-v.css";

const SiteSettingGeneralPlanV = () => {
  const navigate = useNavigate();

  const onFlyviewclick = useCallback(() => {
    navigate("/");
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
    <div className="site-setting-general-plan-v">
      <header className="topbar4">
        <div className="topbar-child2" />
        <div className="frame-div">
          <div className="frame-group">
            <div className="aquqairxlogo-frame">
              <div className="aquqairxlogo4" />
            </div>
            <div className="aquaairx-wrapper1">
              <div className="aquaairx4">
                <span>AquaAir</span>
                <b className="x4">X</b>
              </div>
            </div>
            <img className="menu-icon4" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status7">
          <div className="connection-status8">
            <a className="disconnected4">Disconnected</a>
          </div>
          <img
            className="connection-icon4"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </header>
      <main className="sidebar">
        <PrimarySidebar />
        <div className="secondary-sidebar4">
          <div className="secondary-sidebar-child2" />
          <div className="general-heading">
            <a className="general4">General:</a>
          </div>
          <div className="fly-view-parent">
            <div className="fly-view5" onClick={onFlyviewclick}>
              <a className="fly-view6">Fly View</a>
            </div>
            <div className="plan-view5">
              
              <div className="plan-view6">Plan View</div>
            </div>
            <div className="units5" onClick={onRectangleClick}>
              <div className="units6">Units</div>
            </div>
            <div className="miscellaneous5" onClick={onRectangleClick1}>
              <div className="miscellaneous6">Miscellaneous</div>
            </div>
            <div className="logs1" onClick={onRectangleClick2}>
              <div className="telemetry-logs-from4">
                Telemetry Logs From Vehicle
              </div>
            </div>
            <div className="autoconnect" onClick={onRectangleClick3}>   
              <div className="autoconnect-to-devices4">
                AutoConnect to devices
              </div>
            </div>
            <div className="rtk-gps5" onClick={onRectangleClick4}>
              <div className="rtk-gps6">RTK GPS</div>
            </div>
            <div className="adsb-server5" onClick={onRectangleClick5}>
              <div className="adsb-server6">ADSB Server</div>
            </div>
          </div>
        </div>
        <section className="mission-settings">
          <div className="mission-settings-child" />
          <AltitudeDistance />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralPlanV;
