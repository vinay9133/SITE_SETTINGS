import React, { useState } from "react";
import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  const [hostAddress, setHostAddress] = useState("127.0.0.1");
  const [serverPort, setServerPort] = useState("30003");

  const getNetworkData = async () => {
    try {
      const response = await fetch("https://example.com/api/network-data");
      const data = await response.json();
      setHostAddress(data.hostAddress);
      setServerPort(data.serverPort);
    } catch (error) {
      console.error("Error fetching network data:", error);
    }
  };

  return (
    <div className={`rectangle-parent53 ${className}`}>
      <div className="frame-child54" />
      <div className="note-these-setting">
        Note: These setting are not meant for use with an ASDB transponder which
        is situated on the vehicle
      </div>
      <div className="frame-wrapper">
        <div className="frame-parent5">
          <input className="frame-input1" type="checkbox" />
          <div className="connect-to-adsb">Connect to ADSB SBS server</div>
        </div>
      </div>
      <div className="input-fields-wrapper">
        <div className="input-fields">
          <div className="field-labels">
            <div className="host-address">Host Address</div>
            <div className="server-port">Server Port</div>
          </div>
          <div className="separators-parent">
            <div className="separators">

              <div className="separator">{hostAddress}</div>
            </div>
            <div className="separators1">
              <div className="div1">{serverPort}</div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={getNetworkData} className="get-address-button">
        Get Host and Server Port Address
      </button>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
