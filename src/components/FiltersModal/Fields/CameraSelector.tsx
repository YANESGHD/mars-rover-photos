import { FC } from 'react';
import {
  Grid,
  InputLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import { cameras } from '../../../constants';

interface CameraSelectorProps {
  roverSelected: string;
  value: string;
  setValue: (value: string) => void
}

export const CameraSelector: FC<CameraSelectorProps> = ({ roverSelected, value, setValue }) => {
  return (
    <>
      <InputLabel sx={{ paddingTop: '20px' }}>Cameras</InputLabel>
      <RadioGroup
        name='camera-options'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <Grid container spacing={2}>
          {cameras.map((camera) => (
            <Grid item xs={12} sm={6} key={camera.key}>
              <FormControlLabel
                value={camera.key}
                control={<Radio />}
                label={camera.name}
                disabled={!camera.rovers.includes(roverSelected)}
                sx={{
                  paddingTop: '5px',
                  fontSize: '12px',
                  color: 'rgba(0, 0, 0, 0.6);'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </>
  );
};
