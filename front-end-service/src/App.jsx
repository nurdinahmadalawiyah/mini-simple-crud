import Dashboard from "./views/dashboard.jsx";
import {Box, Container} from "@mui/material";

function App() {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <Container>
              <Box sx={{my: 4}}>
                  <Dashboard/>
              </Box>
          </Container>
      </Box>
  )
}

export default App
