import React from "react";
import PatternGeneration from "./pattern-generation";
import PropTypes from "prop-types";
import "./safety-options.css";

const SafetyOptions = ({ className = "" }) => {
  return (
    <div className={`safety-options ${className}`}>
      <div className="safety-options-child" />
      <div className="checklist-options">
        <div className="checklist-settings">
          <input className="checklist-components" type="checkbox" />
          <div className="use-pre-flight-checklist">Use Pre-Flight checklist</div>
        </div>
        <div className="checklist-settings1">
          <input className="frame-input" type="checkbox" />
          <div className="enforce-pre-flight-checklist">Enforce Pre-Flight checklist</div>
        </div>
        <div className="location-settings">
          <div className="distance-options">
            <div className="distance-components">
              <input className="component-14" type="checkbox" />
              <input className="component-13" type="checkbox" />
              <input className="component-12" type="checkbox" />
              <input className="component-11" type="checkbox" />
              <input className="component-10" type="checkbox" />
              <input className="component-9" type="checkbox" />
            </div>
          </div>
          <div className="map-settings">
            <div className="keep-map-centered">Keep Map Centered on vehicle</div>
            <div className="show-telemetry-log">Show Telemetry Log Replay Status Bar</div>
            <div className="virtual-joystick">Virtual Joystick</div>
            <div className="use-vertical-instrument">Use Vertical Instrument Panel</div>
            <div className="show-additional-heading">Show Additional heading indicators on compass</div>
            <div className="lock-compass-nose-up">Lock Compass Nose-Up</div>
          </div>
        </div>
        <div className="joystick-settings">
          <div className="joystick-options">
            <div className="joystick-components">
              <input className="component-8" type="checkbox" />
              <input className="component-7" type="checkbox" />
              <input className="component-6" type="checkbox" />
            </div>
          </div>
          <div className="camera-settings">
            <div className="camera-options">
              <div className="show-simple-camera">Show Simple Camera controls(DIGICAM_CONTROL)</div>
              <div className="update-home-position">
                Update home position based on device location.This will affect return to home
              </div>
              <div className="enable-custom-actions">Enable Custom Actions</div>
            </div>
            <b className="guided-command-setting">Guided Command Setting</b>
          </div>
        </div>
        <div className="checklist-settings2">
          <div className="minimum-altitude">Minimum Altitude</div>
          <div className="checklist-settings-child" />
        </div>
        <div className="checklist-settings3">
          <div className="minimum-altitude1">Minimum Altitude</div>
          <div className="checklist-settings-item" />
        </div>
        <div className="checklist-settings4">
          <div className="go-to-location">Go To Location Max Distance</div>
          <div className="checklist-settings-inner" />
        </div>
        <div className="video-settings-wrapper">
          <b className="video-settings">Video Settings</b>
        </div>
        <div className="video-options">
          <div className="video-source">
            <div className="video-format">
              <div className="format-options">
                <div className="source">Source</div>
                <div className="udp-port">UDP Port</div>
                <div className="aspect-ratio">Aspect Ratio</div>
                <div className="record-file-format">Record File Format</div>
                <div className="video-decode-priority">Video Decode Priority</div>
              </div>
              <PatternGeneration
                useMAVCMDCONDITIONGATEFor="Disable When Disarmed"
                missionsDoNotRequireTakeo="Low Latency Mode"
                propGap="10px"
                propAlignSelf="stretch"
              />
            </div>
          </div>
          <div className="dropdown-settings">
            <div className="dropdown-options">
              <div className="drop-down">
                <select name="videosettings" id="videosettings">
                  <option value="Video Stream Disabled">Video Stream Disabled</option>
                  <option value="RTSP">RTSP Video Stream</option>
                  <option value="UDP h.264">UDP h.264 Video Stream</option>
                  <option value="UDP h.265">UDP h.265 Video Stream</option>
                  <option value="IntegratedCamera">IntegratedCamera</option>
                  <option value="3DR"> 3DR Solo(requires restart)</option>
                  <option value="parrot">Parrot Discovery</option>
                  <option>Herelink Hotspot</option>
                  <option>Yuneec Mantis G</option>
                  <option>MPEG-TS(h.264) Video Stream</option>
                </select>
              </div>
              <div className="drop-down">
                <select name="udpport" id="udpport">
                  <option value="default">Default Port</option>
                  <option value="port1">Port 1</option>
                  <option value="port2">Port 2</option>
                </select>
              </div>
              <div className="drop-down">
                <select name="aspectratio" id="aspectratio">
                  <option value="16:9">16:9</option>
                  <option value="4:3">4:3</option>
                  <option value="1:1">1:1</option>
                </select>
              </div>
              <div className="drop-down">
                <select name="recordfileformat" id="recordfileformat">
                  <option value="mp4">MP4</option>
                  <option value="avi">AVI</option>
                  <option value="mov">MOV</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recording-settings">
        <input className="auto-delete-option" type="checkbox" />
        <div className="auto-delete-saved-recordings">Auto-Delete Saved Recordings</div>
      </div>
    </div>
  );
};

SafetyOptions.propTypes = {
  className: PropTypes.string,
};

export default SafetyOptions;
