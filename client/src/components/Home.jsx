import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box>
        <Typography display="flex" flexDirection="column" alignItems="center">
          <Button
            LinkComponent={Link}
            to="/books"
            sx={{ marginTop: 15, background: "grey" }}
            variant="contained"
          >
            <Typography variant="h3">View all Products</Typography>
          </Button>
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
