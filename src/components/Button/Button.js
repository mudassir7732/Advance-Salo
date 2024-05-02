import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import useStyles from "./styles";

export default function CustomButton(props) {
  const classes = useStyles();
  const {
    type,
    isLoading = false,
    disabled,
    size,
    title,
    fullWidth,
    onClick,
    iconName,
    imagePath,
    variant,
    startIcon,
    endIcon,
    style,
    className,
  } = props;
  return (
    <Box>
      {iconName ? (
        <IconButton style={style} className={className} onClick={onClick}>
          {iconName}
        </IconButton>
      ) : (
        <Button
          variant={variant}
          endIcon={iconName}
          onClick={onClick}
          type={type}
          fullWidth={fullWidth}
          size={size}
          disabled={disabled}
          // startIcon={startIcon}
          // endIcon={endIcon}
          style={style}
          className={variant === 'contained' ? classes.contained : classes.text}
        >
          {isLoading ? (
            <CircularProgress size={25} color="grey" />
          ) : (
            <Typography sx={{fontWeight:className == classes.text?'900':'0'}}>{title}</Typography>
          )}
        </Button>
      )}
    </Box>
  );
}
