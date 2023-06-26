import { FC } from 'react';
import { DialogContent } from '@mui/material';
import { EarthDateField, SolDateField, CameraSelector } from '../Fields';

interface ContentProps {
  roverSelected: string;
  dateTypeSelected: string;
  earthValueEntered: string;
  setEarthValueEntered: (value: string | null) => void;
  solValueEntered: string;
  setSolValueEntered: (value: string) => void;
  cameraSelected: string;
  setCameraSelected: (value: string) => void
}

export const Content: FC<ContentProps> = ({
  roverSelected,
  dateTypeSelected,
  earthValueEntered,
  setEarthValueEntered,
  solValueEntered,
  setSolValueEntered,
  cameraSelected,
  setCameraSelected
}) => {
  return (
    <DialogContent sx={{ paddingTop: '20px' }}>
      {dateTypeSelected === 'Earth Date'
        ? (
        <EarthDateField
          value={earthValueEntered}
          setValue={setEarthValueEntered}
        />
          )
        : (
        <SolDateField value={solValueEntered} setValue={setSolValueEntered} />
          )}
      <CameraSelector
        roverSelected={roverSelected}
        value={cameraSelected}
        setValue={setCameraSelected}
      />
    </DialogContent>
  );
};
