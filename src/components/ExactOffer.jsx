import { Box, Card } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ContentContext } from "../context/ContentContext";

const ExactOffer = () => {
  const contentContext = useContext(ContentContext);
  useEffect(() => {
    if(contentContext !== undefined){
        if (contentContext.component !== null) {
            
        }
    }
  }, [contentContext]);

  return (
    <Box width={"300px"} height={"400px"}>
      test
    </Box>
  );
};

export default ExactOffer;
