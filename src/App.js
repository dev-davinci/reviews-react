import Review from "./components/Review";
import { Box, Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" fontSize="h2.fontSize" my={3}>
        Reviews
      </Box>
      <Grid container direction="row" justify="center">
        <Review />
      </Grid>
    </>
  );
}

export default App;
