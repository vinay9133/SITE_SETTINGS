import PropTypes from "prop-types";
import "./primary-sidebar.css";

const PrimarySidebar = ({ className = "" }) => {
  return (
    <div className={`primary-sidebar ${className}`}>
      <div className="bg" />
      <div className="navigation-header">
        <div className="site-title">
          <img className="back-icon" loading="lazy" alt="" src="/back.svg" />
          <div className="site-setting">Site Setting</div>
        </div>
      </div>
      <img className="decor-icon" loading="lazy" alt="" src="/decor.svg" />
      <div className="frame-parent3">
        <div className="rectangle-parent39">
          <div className="frame-child40" />
          <a className="general7">General</a>
        </div>
        <div className="rectangle-parent40">
          <div className="frame-child41" />
          <a className="comm-links">Comm Links</a>
        </div>
        <div className="settings-list">
          <div className="rectangle-parent41">
            <div className="frame-child42" />
            <div className="offline-maps">Offline Maps</div>
          </div>
          <div className="rectangle-parent42">
            <div className="mavlink">MAVLink</div>
          </div>
          <div className="rectangle-parent43">
            <div className="frame-child44" />
            <div className="console">Console</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PrimarySidebar.propTypes = {
  className: PropTypes.string,
};

export default PrimarySidebar;
