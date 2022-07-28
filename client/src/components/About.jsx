import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is crud application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          using MERN
        </Typography>
      </Box>
    </div>
  );
};

export default About;
