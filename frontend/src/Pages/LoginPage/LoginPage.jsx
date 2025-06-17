import React from "react";
import { Box, Paper, Stack, TextField } from "@mui/material";
import { cyan } from "@mui/material/colors";

const LoginPage = () => {
  return (
   <Box
  border={1}
  bgcolor={cyan[800]}
  height="100vh"
  display="flex"                  // ✅ make Box a flex container
  justifyContent="center"        // ✅ center horizontally
  alignItems="center"            // ✅ center vertically
  component="form"
>
  <Stack
    component={Paper}
    border={1}
    height="80%"
    width="80%"
    maxWidth={500}                // ✅ optional: limit max width
    px={3}                        // ✅ padding inside Paper
    py={4}
  >
    {/* Form fields go here */}
  </Stack>
</Box>
  );
};

export default LoginPage;
