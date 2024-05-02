import { useState } from "react";
import styled from "@emotion/styled";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useStyles from "./styles";

const MySelect = styled(Select)({
  marginTop: "7px",
  borderRadius: "50px",
  borderColor: "red",
  height: "56px",
  // minWidth: "28.6vw !important",
});

export default function CustomSelect(props) {
  const [isFocused, setFocus] = useState(false);
  const {
    name,
    label,
    value,
    variant,
    style,
    onChange,
    options,
    error,
    helperText,
    fullWidth
  } = props;
  const classes = useStyles();
  return (
    <FormControl style={style}>
      <InputLabel sx={{ color: error && "red", mt: "6px" }}>{label}</InputLabel>
      <MySelect
        name={name}
        displayEmpty
        value={value}
        label={label}
        variant={variant}
        onChange={onChange}
        error={error}
        fullWidth={fullWidth}
        className={helperText ? classes.error : classes.root}
        style={style}
      >
        {options?.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </MySelect>
      {error && (
        <Box
          sx={{
            color: "#ff0000",
            textAlign: "left",
            margin: "5px 0px 8px 13px",
            fontSize: " 0.75rem",
            fontWeight: 400,
          }}
        >
          {helperText}
        </Box>
      )}
    </FormControl>
  );
}
