import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

export default function CheckboxesCom() {
  const [checkedValues, setCheckedValues] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    console.log("Value is", value);

    if (checked) {
      setCheckedValues((values) => [...values, value]);
    }
    if (checked === false) {
      setCheckedValues((values) =>
        values.filter((todo) => {
          if (todo === value) {
            return false;
          } else {
            return true;
          }
        })
      );
    }
  };

  console.log(checkedValues);

  return (
    <>
      <FormControlLabel
        value={"reading"}
        id="reding"
        control={<Checkbox onChange={handleChange} />}
        label="Reading"
        labelPlacement="start"
      />
      <FormControlLabel
        value={"swimming"}
        id="swimming"
        control={<Checkbox onChange={handleChange} />}
        label="Swimming"
        labelPlacement="start"
      />
      <pre>{JSON.stringify(checkedValues, null)}</pre>
    </>
  );
}
