import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const CustomText = () => {
  const [textColor, setTextColor] = useState("#05cd2d");

  return (
    <>
      <div
        style={{
          fontSize: "13px",
          color: textColor,
        }}
      >
        <TypeAnimation
          sequence={[
            "JavaScript HTML CSS",
            800,
            () => setTextColor("#04d9ff"),
            "React ReactRedux MUI TypeScript ReactThree",
            800,
            () => setTextColor("#f19e45"),
            "NodeJS MongoDB Mongoose",
            1000,
            () => setTextColor("#05cd2d"),
            "",
          ]}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default CustomText;
