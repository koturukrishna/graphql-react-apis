import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box sx={{ mt: 3 }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(_event: React.SyntheticEvent<Element, Event>, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <br />
      <Typography component={"h2"}>Feedback: {value}</Typography>
    </Box>
  );
}
