import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
type DataCheckbox = {
  label: string;
};
export type FilterCheckboxProps = {
  data: DataCheckbox[];
  style? : any;
};
export const FilterCheckbox = ({ data, style  }: FilterCheckboxProps) => {
  return (
    <FormGroup sx={style}>
      {data.map(({ label }, key : React.Key) => {
        return (
          <FormControlLabel
            key={key}
            control={<Checkbox />}
            label={label}
          />
        );
      })}
    </FormGroup>
  );
};
