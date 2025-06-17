import React from "react";
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";

const LoginPage = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      bgcolor={cyan[800]}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
      // fullWidth={true}  ------->you can place components inside a Stack and give them fullWidth={true}
      // fullWidth                ----------> only used in TextField,Button,Autocomplete,Select,OutlinedInput 
        direction={"row"}
        flex={7}
        component={Paper}
        height={"80%"}
        width={"90%"}
        // bgcolor={"linear-gradient(to right, #ff7e5f, #feb47b)'"} // it is not possible as in mui takes it as singlecolor
        boxShadow={3}
        borderRadius={3}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ background: "linear-gradient(to right, #006064, #00838f)" }}
      >
        <Box>
          <p>viswa</p>
        </Box>
        <Stack
        alignItems={"center"}
        // justifyContent={"center"}
        // justifyContent={"flex-end"}
          component={Paper}
          height={"60%"}
          width={"30%"}
        
        >
          <Typography variant="h4"> welcome back</Typography>
          <TextField 
          placeholder="enter email"
          fullWidth
          sx={{px:4}}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginPage;
