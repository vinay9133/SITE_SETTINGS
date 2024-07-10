import { useMemo } from "react";
import PropTypes from "prop-types";
import "./pattern-generation.css";

const PatternGeneration = ({
  className = "",
  useMAVCMDCONDITIONGATEFor,
  missionsDoNotRequireTakeo,
  propGap,
  propAlignSelf,
}) => {
  const patternGenerationStyle = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propGap, propAlignSelf]);

  return (
    <div
      className={`pattern-generation ${className}`}
      style={patternGenerationStyle}
    >
      <div className="generation-checkbox">
        <input className="checkbox-container" type="checkbox" />
        <div className="use-mav-cmd-condition-gate-for">
          {useMAVCMDCONDITIONGATEFor}
        </div>
      </div>
      <div className="takeoff-item">
        <input className="takeoff-checkbox" type="checkbox" />
        <div className="missions-do-not">{missionsDoNotRequireTakeo}</div>
      </div>
    </div>
  );
};

PatternGeneration.propTypes = {
  className: PropTypes.string,
  useMAVCMDCONDITIONGATEFor: PropTypes.string,
  missionsDoNotRequireTakeo: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default PatternGeneration;
