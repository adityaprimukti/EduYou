import { useMemo } from "react";
import "./CameraIcon.css";

const CameraIcon = ({
  cameraIconCamera,
  cameraIconWidth,
  cameraIconOverflow,
  cameraIconHeight,
  cameraIconPosition,
  cameraIconTop,
  cameraIconLeft,
}) => {
  const cameraIconStyle = useMemo(() => {
    return {
      width: cameraIconWidth,
      overflow: cameraIconOverflow,
      height: cameraIconHeight,
      position: cameraIconPosition,
      top: cameraIconTop,
      left: cameraIconLeft,
    };
  }, [
    cameraIconWidth,
    cameraIconOverflow,
    cameraIconHeight,
    cameraIconPosition,
    cameraIconTop,
    cameraIconLeft,
  ]);

  return (
    <img
      className="camera-icon"
      alt=""
      src={cameraIconCamera}
      style={cameraIconStyle}
    />
  );
};

export default CameraIcon;
