import { Modal, Box, Typography, Button } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  p: 3,
  borderRadius: 2,
};

export default function DescriptionModal({ open, description, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Description</Typography>

        <Typography sx={{ mt: 2 }}>
          {description}
        </Typography>

        <Button sx={{ mt: 2 }} onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
