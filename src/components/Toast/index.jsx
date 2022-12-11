import React from "react";
import { Alert, Snackbar } from "@mui/material";

const Toast = ({ severity, open, setOpen, text }) => (
  <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
    <Alert
      onClose={() => setOpen(false)}
      severity={severity}
      variant="filled"
      sx={{ width: "100%" }}
    >
      {text}
    </Alert>
  </Snackbar>
);

export default Toast;
