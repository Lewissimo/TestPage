import { Box, Typography, Modal, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ExactOffer = ({ open, handleClose, service }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%", // Szerokość 90% dla małych ekranów
          maxWidth: "1500px", // Maksymalna szerokość dla dużych ekranów
          maxHeight: "90%", // Maksymalna wysokość
          height: 'auto', // Automatyczna wysokość
          bgcolor: "#031B31",
          color: "#FDD13C",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "row",
          outline: "none",
          overflowY: "auto", // Dodaj przewijanie pionowe, jeśli treść przekracza wysokość
          "@media (max-width: 600px)": { // Stylizacja dla małych ekranów
            flexDirection: "column",
            width: "95%",
            height: "auto",
          }
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "33%" }, paddingRight: { xs: 0, sm: 2 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {service.image ? (
            <img src={service.image} alt={service.title} style={{ width: "80%", maxHeight: '300px', objectFit: 'cover' }} />
          ) : (
            service.icon && React.cloneElement(service.icon, { sx: { fontSize: 100, color: "#FDD13C" } })
          )}
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "67%" }, paddingLeft: { xs: 0, sm: 2 } }}>
          <Typography id="service-modal-title" variant="h4" component="div" gutterBottom>
            {service.title}
          </Typography>
          <List>
            {service.description.split('\n').map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{ color: "#FDD13C", fontSize: 12 }} /> {/* Ikona kropki */}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default ExactOffer;
