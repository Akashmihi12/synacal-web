import React from "react";

type DivideLineProps = {
  color?: string;
  thickness?: string;
  width?: string;
  margin?: string;
};

const DivideLine: React.FC<DivideLineProps> = ({
  color = "#000",
  thickness = "1px",
  width = "100%",
  margin = "16px 0",
}) => {
  return (
    <hr
      style={{
        border: "none",
        borderTop: `${thickness} solid ${color}`,
        width: width,
        margin: margin,
      }}
    />
  );
};

export default DivideLine;
