import PropTypes from "prop-types";
import "./units-container.css";

const UnitsContainer = ({ className = "" }) => {
  return (
    <div className={`units-container ${className}`}>
      
      <div className="unit-types">
        <div className="unit">Horizontal Distance</div>
        <div className="unit">Vertical Distance</div>
        <div className="unit">Area</div>
        <div className="unit">Speed</div>
        <div className="unit">Temperature</div>
      </div>
      <div className="unit-dropdowns">
        <div className="dropdown">
        
          <select className="dropdown-select">
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="dropdown-select">
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="dropdown-select">
            <option value="square-meters">Square Meters</option>
            <option value="acres">Acres</option>
            <option value="hectares">Hectares</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="dropdown-select">
            <option value="kmph">km/h</option>
            <option value="mph">mph</option>
            <option value="mps">m/s</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="dropdown-select">
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
        </div>
      </div>
    </div>
  );
};

UnitsContainer.propTypes = {
  className: PropTypes.string,
};

export default UnitsContainer;
