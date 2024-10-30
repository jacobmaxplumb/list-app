import { Box } from "@mui/material";
import { MenuBar } from "./components/MenuBar";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { GroceryList } from "./components/GroceryList";

function App() {
  const [isTodoOpen, setIsTodoOpen] = useState(true);
  console.log(isTodoOpen);
  return (
    <Box>
      <MenuBar setIsTodoOpen={setIsTodoOpen} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', padding: '20px'}}>{isTodoOpen ? <TodoList /> : <GroceryList />}</div>
    </Box>
  );
}

export default App;
