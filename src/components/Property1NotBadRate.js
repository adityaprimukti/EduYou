import { useMemo } from "react";
import "./Property1NotBadRate.css";

const Property1NotBadRate = ({
  grade,
  grade1,
  grade2,
  grade3,
  grade4,
  property1NotBadRate3Width,
  property1NotBadRate3Height,
  property1NotBadRate3Position,
  property1NotBadRate3Top,
  property1NotBadRate3Left,
  property1NotBadRate3BackgroundColor,
  gradeIconRight,
  gradeIconLeft,
}) => {
  const property1NotBadRate3Style = useMemo(() => {
    return {
      width: property1NotBadRate3Width,
      height: property1NotBadRate3Height,
      position: property1NotBadRate3Position,
      top: property1NotBadRate3Top,
      left: property1NotBadRate3Left,
      backgroundColor: property1NotBadRate3BackgroundColor,
    };
  }, [
    property1NotBadRate3Width,
    property1NotBadRate3Height,
    property1NotBadRate3Position,
    property1NotBadRate3Top,
    property1NotBadRate3Left,
    property1NotBadRate3BackgroundColor,
  ]);

  const gradeIconStyle = useMemo(() => {
    return {
      right: gradeIconRight,
      left: gradeIconLeft,
    };
  }, [gradeIconRight, gradeIconLeft]);

  return (
    <div className="property-1notbad-rate3" style={property1NotBadRate3Style}>
      <img className="grade-icon" alt="" src={grade} />
      <img className="grade-icon1" alt="" src={grade1} />
      <img className="grade-icon2" alt="" src={grade2} style={gradeIconStyle} />
      <img className="grade-icon3" alt="" src={grade3} />
      <img className="grade-icon4" alt="" src={grade4} />
    </div>
  );
};

export default Property1NotBadRate;
