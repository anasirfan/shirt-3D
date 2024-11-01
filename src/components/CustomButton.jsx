import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";
const CustomButton = ({ type, title, customeStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderwidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customeStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
