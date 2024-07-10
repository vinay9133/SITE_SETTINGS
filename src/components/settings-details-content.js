import React, { useState } from "react";
import PropTypes from "prop-types";
import "./settings-details-content.css";

const SettingsDetailsContent = ({ className = "" }) => {
  const [uiScaling, setUiScaling] = useState(50);
  const [path, setPath] = useState("");

  const handleUiScalingChange = (increment) => {
    setUiScaling((prev) => Math.max(50, prev + increment)); 
  };

  const handleBrowse = (event) => {
    const filePath = event.target.files[0]?.path || "";
    setPath(filePath);
  };

  return (
    <div className={`settings-details-content ${className}`}>

      <div className="settings-controls">
        <div className="controls-container-parent">
          <div className="controls-container">
            <div className="control-labels">
              <div className="langage">Language</div>
              <div className="color-scheme">Color Scheme</div>
              <div className="map-provider">Map Provider</div>
              <div className="map-type">Map Type</div>
              <div className="stream-gcs-position">Stream GCS Position</div>
              <div className="ui-scaling">UI Scaling</div>
            </div>
            <div className="control-options">
              <div className="drop-down-parent">
                <select className="drop-down">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <select className="drop-down">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
                <select className="drop-down">
                  <option>Google Maps</option>
                  <option>Bing Maps</option>
                  <option>OpenStreetMap</option>
                </select>
                <select className="drop-down">
                  <option>Satellite</option>
                  <option>Terrain</option>
                  <option>Hybrid</option>
                </select>
                <select className="drop-down">
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <div className="value-controls">
                  <button className="plus" onClick={() => handleUiScalingChange(10)}>+</button>
                  <div className="value-slider">{uiScaling.toFixed(1)}x</div>
                  <button className="minus" onClick={() => handleUiScalingChange(-10)}>-</button>
                </div>
              </div>
            </div>
          </div>
          <div className="components-container-parent">
            <div className="components-container">
              <div className="components">
                <input className="component-22" type="checkbox" />
                <input className="component-23" type="checkbox" />
                <input className="component-24" type="checkbox" />
                <input className="component-25" type="checkbox" />
              </div>
            </div>
            <div className="action-buttons">
              <div className="mute-all-audio">Mute all audio output</div>
              <div className="check-for-internet">Check for Internet connection</div>
              <div className="clear-all-settings">Clear all settings on next start</div>
              <div className="enable-remote-id">Enable Remote ID</div>
            </div>
          </div>
        </div>
      </div>
      <div className="application-settings">
        <div className="path-settings">
          <div className="application-loadsave-path">Application Load/Save Path</div>
          <input className="path-value" type="text" value={path} readOnly />
        </div>
        <div className="browse-button">
          <label className="browse-container">
            <div className="browse">BROWSE</div>
            <input type="file" style={{ display: "none" }} onChange={handleBrowse} />
          </label>
        </div>
      </div>
    </div>
  );
};

SettingsDetailsContent.propTypes = {
  className: PropTypes.string,
};

export default SettingsDetailsContent;
