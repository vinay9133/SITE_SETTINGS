import PropTypes from "prop-types";
import { useState } from "react";
import "./survey.css";

const Survey = ({ className = "" }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <form className={`survey ${className}`}>
      <div className="survey-child" />
      <div className="survey-inputs">
        <div className="survey-button">
          <div className="survey-action">
            <div className="survey-trigger">
              <input
                className="component-61"
                type="radio"
                checked={selectedOption === "perform-survey"}
                onChange={() => handleOptionChange("perform-survey")}
              />
            </div>
            <div className="perform-survey-in">Perform Survey-In</div>
          </div>
        </div>
        <div className="survey-labels">
          <div className="survey-in-accuracy">
            Survey in accuracy (U-blox only)
          </div>
          <input
            className={`survey-fields text-input ${selectedOption === "perform-survey" ? "editable" : "disabled"}`}
            type="text"
            disabled={selectedOption !== "perform-survey"}
          />
        </div>
        <div className="survey-labels1">
          <div className="minimum-observation-time">
            Minimum observation time
          </div>
          <input
            className={`survey-labels-child text-input ${selectedOption === "perform-survey" ? "editable" : "disabled"}`}
            type="text"
            disabled={selectedOption !== "perform-survey"}
          />
        </div>
      </div>
      <div className="base-position">
        <div className="position-inputs">
          <div className="base-position-button">
            <div className="position-action">
              <div className="position-trigger">
                <input
                  className="component-2"
                  type="radio"
                  checked={selectedOption === "use-specified-base"}
                  onChange={() => handleOptionChange("use-specified-base")}
                />
              </div>
              <div className="use-specified-base">
                Use Specified Base Position
              </div>
            </div>
          </div>
          <div className="position-labels">
            <div className="base-position-latitude">Base Position Latitude</div>
            <input
              className={`position-fields text-input ${selectedOption === "use-specified-base" ? "editable" : "disabled"}`}
              type="text"
              disabled={selectedOption !== "use-specified-base"}
            />
          </div>
          <div className="position-labels1">
            <div className="base-position-longitude">Base Position Longitude</div>
            <input
              className={`position-labels-child text-input ${selectedOption === "use-specified-base" ? "editable" : "disabled"}`}
              type="text"
              disabled={selectedOption !== "use-specified-base"}
            />
          </div>
          <div className="position-labels2">
            <div className="base-position-alt">Base Position Alt (WGS84)</div>
            <input
              className={`position-labels-item text-input ${selectedOption === "use-specified-base" ? "editable" : "disabled"}`}
              type="text"
              disabled={selectedOption !== "use-specified-base"}
            />
          </div>
          <div className="position-labels3">
            <div className="base-position-accuracy">Base Position Accuracy</div>
            <input
              className={`position-accuracy text-input ${selectedOption === "use-specified-base" ? "editable" : "disabled"}`}
              type="text"
              disabled={selectedOption !== "use-specified-base"}
            />
          </div>
        </div>
        <div className="save-position">
          <button className="save-action" type="button">
            <div className="save-current-base">Save Current Base Position</div>
          </button>
        </div>
      </div>
    </form>
  );
};

Survey.propTypes = {
  className: PropTypes.string,
};

export default Survey;
