import { FC } from 'react';
import { InputLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';

interface EarthDateFieldProps {
  value: string;
  setValue: (value: string | null) => void
}

export const EarthDateField: FC<EarthDateFieldProps> = ({ value, setValue }) => {
  return (
    <>
      <InputLabel sx={{ paddingBottom: '8px' }}>Earth Date</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          name='earth-date'
          size='small'
          value={value}
          onChange={(value) => setValue(value)}
        />
      </LocalizationProvider>
    </>
  );
};
