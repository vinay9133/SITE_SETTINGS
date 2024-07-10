import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./secondary-sidebar.css";

const SecondarySidebar = ({ className = "", onGroupContainerClick8 }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/site-setting-general-plan-view");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/site-setting-general-units-view");
  }, [navigate]);

  const onGroupContainerClick3 = useCallback(() => {
    navigate("/site-setting-general-miscellaneous-view");
  }, [navigate]);

  const onGroupContainerClick4 = useCallback(() => {
    navigate("/site-setting-general-telemetry-view");
  }, [navigate]);

  const onGroupContainerClick5 = useCallback(() => {
    navigate("/site-setting-general-autoconnectview");
  }, [navigate]);

  const onGroupContainerClick6 = useCallback(() => {
    navigate("/site-setting-general-rtk-view");
  }, [navigate]);

  const onGroupContainerClick7 = useCallback(() => {
    navigate("/site-setting-general-adsb-view");
  }, [navigate]);

  return (
    <div className={`secondary-sidebar7 ${className}`}>
      <div className="general-wrapper">
        <a className="general8">General:</a>
      </div>
      <div className="frame-parent4">
        <div className="rectangle-parent44" onClick={onGroupContainerClick}>
          <a className="fly-view9">Fly View</a>
        </div>
        <div className="rectangle-parent45" onClick={onGroupContainerClick1}>
          <div className="plan-view9">Plan View</div>
        </div>
        <div className="rectangle-parent46" onClick={onGroupContainerClick2}>
          <div className="units9">Units</div>
        </div>
        <div className="rectangle-parent47" onClick={onGroupContainerClick3}>
          <div className="miscellaneous9">Miscellaneous</div>
        </div>
        <div className="rectangle-parent48" onClick={onGroupContainerClick4}>
          <div className="telemetry-logs-from7">Telemetry Logs From Vehicle</div>
        </div>
        <div className="rectangle-parent49" onClick={onGroupContainerClick5}>
          <div className="autoconnect-to-devices7">AutoConnect to devices</div>
        </div>
        <div className="rectangle-parent50" onClick={onGroupContainerClick6}>
          <div className="rtk-gps9">RTK GPS</div>
        </div>
        <div className="rectangle-parent51" onClick={onGroupContainerClick7}>
          <div className="frame-child52" />
          <div className="adsb-server9">ADSB Server</div>
        </div>

      </div>
    </div>
  );
};

SecondarySidebar.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onGroupContainerClick7: PropTypes.func,
};

export default SecondarySidebar;
