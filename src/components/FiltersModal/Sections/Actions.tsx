import { FC } from 'react';
import {
  Button,
  DialogActions
} from '@mui/material';

interface ActionsProps {
  setOpen: (value: boolean) => void;
  handleSubmit: (value: React.FormEvent) => void
}

export const Actions: FC<ActionsProps> = ({ setOpen, handleSubmit }) => {
  return (
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={handleSubmit}>Apply</Button>
    </DialogActions>
  );
};
