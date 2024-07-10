import { useCallback } from "react";
import PrimarySidebar from "../components/primary-sidebar";
import { useNavigate } from "react-router-dom";
import Survey from "../components/survey";
import "./site-setting-general-r-t-k-vi.css";

const SiteSettingGeneralRTKVi = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/site-setting-general-plan-view");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/site-setting-general-units-view");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/site-setting-general-miscellaneous-view");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/site-setting-general-telemetry-view");
  }, [navigate]);

  const onGroupContainerClick3 = useCallback(() => {
    navigate("/site-setting-general-autoconnectview");
  }, [navigate]);

  const onRectangleClick2 = useCallback(() => {
    navigate("/site-setting-general-adsb-view");
  }, [navigate]);

  const onGroupContainerClick4 = useCallback(() => {
    navigate("/site-setting-general-brandimage-view");
  }, [navigate]);

  return (
    <div className="site-setting-general-rtk-vi">
      <header className="topbar7">
        <div className="topbar-child5" />
        <div className="topbar-content-wrapper1">
          <div className="topbar-content6">
            <div className="topbar-left1">
              <div className="aquqairxlogo7" />
            </div>
            <div className="brand-name">
              <div className="aquaairx7">
                <span>AquaAir</span>
                <b className="x7">X</b>
              </div>
            </div>
            <img className="menu-icon7" loading="lazy" alt="" src="/menu.svg" />
          </div>
        </div>
        <div className="connection-status12">
          <div className="connection-status-child5" />
          <div className="status1">
            <a className="disconnected7">Disconnected</a>
          </div>
          <img
            className="connection-icon6"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </header>
      <main className="content1">
        <PrimarySidebar />
        <div className="secondary-sidebar5">
          <div className="secondary-sidebar-child3" />
          <div className="general-header">
            <a className="general5">General:</a>
          </div>
          <div className="frame-parent1">
            <div className="rectangle-parent22"onClick={onRectangleClick}>
              <a className="fly-view7">Fly View</a>
            </div>
            <div className="rectangle-parent23"onClick={onRectangleClick1}>
              <div className="plan-view7">Plan View</div>
            </div>
            <div className="rectangle-parent24" onClick={onGroupContainerClick}>
              <div className="units7">Units</div>
            </div>
            <div
              className="rectangle-parent25"onClick={onGroupContainerClick1}>
              <div className="miscellaneous7">Miscellaneous</div>
            </div>
            <div className="rectangle-parent26"onClick={onGroupContainerClick2}>
              <div className="telemetry-logs-from5">Telemetry Logs From Vehicle</div>
            </div>
            <div className="rectangle-parent27" onClick={onGroupContainerClick3}>
              <div className="autoconnect-to-devices5">AutoConnect to devices</div>
            </div>
            <div className="rectangle-parent28">
              <div className="rtk-gps7">RTK GPS</div>
            </div>
            <div className="rectangle-parent29"onClick={onRectangleClick2}>
              <div className="adsb-server7">ADSB Server</div>
            </div>
          </div>
        </div>
        <section className="content-right">
          <div className="content-right-child" />
          <Survey />
        </section>
      </main>
    </div>
  );
};

export default SiteSettingGeneralRTKVi;
