import PropTypes from "prop-types";
import "./outdoor-image-container.css";

const OutdoorImageContainer = ({ className = "" }) => {
  return (
    <div className={`outdoor-image-container ${className}`}>
      <div className="outdoor-image-container-child" />
      <div className="image-preview">
        <div className="preview-content">
          <div className="outdoor-image">Indoor Image</div>
          <div className="image-placeholder">
            <div className="image-rect" />
            <div className="browse-button-container">
              <div className="browse-button-container-child" />
              <b className="browse1">Browse</b>
            </div>
          </div>
        </div>
      </div>
      <div className="indoor-image">
        <div className="indoor-image-label-container">
          <div className="outdoor-image1">Outdoor Image</div>
        </div>
        <div className="image-rect-indoor" />
        <div className="browse-button-indoor-container">
          <div className="browse-button-indoor-container-child" />
          <b className="browse2">Browse</b>
        </div>
      </div>
      <div className="reset-container">
        <div className="reset-button">
          <div className="reset-default-brand">Reset Default Brand Image</div>
        </div>
      </div>
    </div>
  );
};

OutdoorImageContainer.propTypes = {
  className: PropTypes.string,
};

export default OutdoorImageContainer;
