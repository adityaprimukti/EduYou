import { useMemo } from "react";
import "./Property1TrueIcon.css";

const Property1TrueIcon = ({
  property1TrueIconProperty,
  property1TrueIconWidth,
  property1TrueIconHeight,
  property1TrueIconPosition,
  property1TrueIconTop,
  property1TrueIconRight,
  property1TrueIconBottom,
  property1TrueIconLeft,
  property1TrueIconMaxHeight,
}) => {
  const property1TrueIconStyle = useMemo(() => {
    return {
      width: property1TrueIconWidth,
      height: property1TrueIconHeight,
      position: property1TrueIconPosition,
      top: property1TrueIconTop,
      right: property1TrueIconRight,
      bottom: property1TrueIconBottom,
      left: property1TrueIconLeft,
      maxHeight: property1TrueIconMaxHeight,
    };
  }, [
    property1TrueIconWidth,
    property1TrueIconHeight,
    property1TrueIconPosition,
    property1TrueIconTop,
    property1TrueIconRight,
    property1TrueIconBottom,
    property1TrueIconLeft,
    property1TrueIconMaxHeight,
  ]);

  return (
    <img
      className="property-1true-icon"
      alt=""
      src={property1TrueIconProperty}
      style={property1TrueIconStyle}
    />
  );
};

export default Property1TrueIcon;
