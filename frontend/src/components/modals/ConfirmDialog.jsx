import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  p: 3,
  borderRadius: 2,
};

export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal open={open} onClose={onCancel}>
      <Box sx={style}>
        <Typography variant="h6">{title}</Typography>
        <Typography sx={{ mt: 1 }}>{message}</Typography>

        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
