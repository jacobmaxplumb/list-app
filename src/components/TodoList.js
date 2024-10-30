import {
  Box,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const items = [1, 2, 3];

export const TodoList = () => {
  return (
    <>
      <Box sx={{ maxWidth: 1000, minWidth: 500, margin: 1, display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          id="outlined-basic"
          label="Todo Item"
          variant="outlined"
          size="small"
          sx={{width: '80%'}}
        />
        <Button variant="contained">Add</Button>
      </Box>
      <Card sx={{ maxWidth: 1000, minWidth: 500, margin: 1 }}>
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                style={{ cursor: "pointer" }}
                primary="Single-line item"
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};
