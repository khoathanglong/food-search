import { Container } from "@mui/material";
import { RestaurantSearch } from "./components/RestaurantSearch";

function App() {
  return (
    <Container className="App" maxWidth="md">
      <RestaurantSearch />
    </Container>
  );
}

export default App;
