import PropTypes from "prop-types";
import "./content-panel.css";

const ContentPanel = ({ className = "" }) => {
  return (
    <div className={`content-panel ${className}`}>
      <div className="content-panel-child" />
      <div className="component-list-wrapper">
        <div className="component-list">
          <input className="component-26" type="checkbox" />
          <input className="component-27" type="checkbox" />
          <input className="component-28" type="checkbox" />
        </div>
      </div>
      <div className="log-options">
        <div className="save-log-after">Save log after each flight</div>
        <div className="save-logs-even">
          Save logs even if vehicle was not armed
        </div>
        <div className="save-csv-log">Save CSV log of telemetry data</div>
      </div>
    </div>
  );
};

ContentPanel.propTypes = {
  className: PropTypes.string,
};

export default ContentPanel;
