import { useState } from "react";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import useStyles from "./styles";

export default function TextInput(props) {
  const classes = useStyles();
  const {
    name,
    label,
    variant,
    fullWidth,
    helperText,
    placeholder,
    type,
    size,
    multiline,
    value,
    startIcon,
    startImage,
    endIcon,
    onChange,
    style,
    rows,
  } = props;

  const [isFocused, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleVisibility = () => {
    if (showPassword === true) {
      setShowPassword(false);
      setInputType("password");
    } else {
      setShowPassword(true);
      setInputType("text");
    }
  };
  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      error={Boolean(helperText)}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      helperText={helperText}
      multiline={multiline}
      autoComplete={type === "password" ? "password" : undefined}
      value={value}
      rows={rows}
      onChange={onChange}
      style={style}
      autoFocus={false}
      type={type === "password" ? inputType : type}
      InputProps={{
        startAdornment: (startIcon || startImage) && (
          <InputAdornment position="start" name={value}>
            {startImage && (
              <img
                src={startImage}
                style={{ height: "32px", width: "32px", paddingRight: "1px" }}
              />
            )}
            {startIcon && <startIcon sx={{ color: "red" }} />}
          </InputAdornment>
        ),
        endAdornment:
          type === "password" ? (
            showPassword ? (
              <VisibilityOff
                onClick={handleVisibility}
                sx={{
                  color: typeof helperText === "string" ? "#ff0000" : "#121f40",
                }}
              />
            ) : (
              <RemoveRedEye
                onClick={handleVisibility}
                sx={{
                  color: typeof helperText === "string" ? "#ff0000" : "#121f40",
                }}
              />
            )
          ) : (
            endIcon && (
              <InputAdornment position="end">
                <endIcon />
              </InputAdornment>
            )
          ),
      }}
      InputLabelProps={{
        sx: { ml: (startIcon || startImage) && !isFocused && "85px" },
        shrink: isFocused || value,
      }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={helperText ? classes.error : classes.root}
    />
  );
}
