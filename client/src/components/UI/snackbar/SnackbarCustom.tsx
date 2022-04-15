import React, { FC } from "react";
import { Alert, Snackbar } from "@mui/material";

interface SnackbarCustomProps {
  text: string;
  status: "success" | "error" | "info" | "warning";
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
  handleClose: () => void;
}

const SnackbarCustom: FC<SnackbarCustomProps> = ({
  open,
  vertical,
  horizontal,
  text,
  status,
  handleClose,
}) => {
  return (
    <Snackbar
      open={open}
      sx={{ zIndex: "99999" }}
      autoHideDuration={5000}
      anchorOrigin={{ vertical, horizontal }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCustom;
