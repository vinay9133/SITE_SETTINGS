import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./component-list.css";

const ComponentList = ({ className = "" }) => {
  return (
    <div className={`component-list1 ${className}`}>
      <div className="component-list-child" />
      <div className="component-types-parent">
        <input className="component-types" type="checkbox" />
        <div className="pixhawk">Pixhawk</div>
        <input className="component-types1" type="checkbox" />
        <div className="sik-radio">SIK Radio</div>
        <input className="component-types2" type="checkbox" />
        <div className="px4-flow">PX4 Flow</div>
        <input className="component-types3" type="checkbox" />
        <div className="librepilot">LibrePilot</div>
        <input className="component-types4" type="checkbox" />
        <div className="udp">UDP</div>
        <input className="component-types5" type="checkbox" />
        <div className="rtk-gps10">RTK GPS</div>
        <input className="component-types6" type="checkbox" />
        <div className="zero-conf">Zero-Conf</div>
      </div>
      <div className="device-dropdown-wrapper">
        <FormControl
          className="device-dropdown"
          variant="default"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "492px",
            height: "29px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "29px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "29px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "29px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "29px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <FormHelperText />
        </FormControl>
      </div>
    </div>
  );
};

ComponentList.propTypes = {
  className: PropTypes.string,
};

export default ComponentList;
