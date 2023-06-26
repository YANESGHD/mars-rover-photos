import { FC } from 'react';
import { InputLabel, TextField } from '@mui/material';

interface SolDateFieldProps {
  value: string;
  setValue: (value: string) => void
}

export const SolDateField: FC<SolDateFieldProps> = ({ value, setValue }) => {
  return (
    <>
      <InputLabel>Sol Date</InputLabel>
      <TextField
        name='sol-date'
        margin='dense'
        placeholder='e.g. 1000'
        id='name'
        type='number'
        variant='outlined'
        size='small'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};
