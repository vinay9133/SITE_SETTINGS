import PatternGeneration from "./pattern-generation";
import PropTypes from "prop-types";
import "./altitude-distance.css";

const AltitudeDistance = ({ className = "" }) => {
  return (
    <div className={`altitude-distance ${className}`}>
      <div className="altitude-distance-container">
        <div className="setting-fields">
          <label className="default-mission-altitude" >
            Default Mission Altitude
          </label>
          <input type="text" className="setting-inputs" />
        </div>
        <div className="setting-fields1">
          <label className="vtol-transition-distance">
            VTOL Transition Distance
          </label>
          <input type="text" className="setting-inputs" />
        </div>
      </div>
      <PatternGeneration
        useMAVCMDCONDITIONGATEFor="Use MAV_CMD_CONDITION_GATE for pattern generation"
        missionsDoNotRequireTakeo="Missions Do Not Require Takeoff Item"
      />
    </div>
  );
};

AltitudeDistance.propTypes = {
  className: PropTypes.string,
};

export default AltitudeDistance;
