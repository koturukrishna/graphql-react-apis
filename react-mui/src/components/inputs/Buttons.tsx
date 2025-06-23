import { Button, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const Buttons = () => {
  const handelSubmit = () => {
    console.log("Hello Krishna");
  };
  return (
    <div>
      <h1>these are buttons</h1>
      <Stack direction={"row"} spacing={5}>
        <Button
          variant="contained"
          onClick={handelSubmit}
          startIcon={<SendIcon />}
        >
          Hello
        </Button>
        <Button variant="text" onClick={handelSubmit}>
          Hello
        </Button>
        <Button variant="outlined" onClick={handelSubmit}>
          Hello
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
