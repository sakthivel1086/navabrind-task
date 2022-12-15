import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({
  variant,
  color,
  disabled,
  size,
  clickEvent,
  buttonText,
}) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        disabled={disabled}
        size={size}
        onClick={(e) => clickEvent(e)}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default ButtonComponent;
