import { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ButtonGroup, Dialog, DialogContent, DialogActions, Grid, InputLabel, Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { dateTypes, cameras } from '../../constants';
import styled from '@emotion/styled';
import { StyledDateField } from './DateField';
import { useFilterContext, useRoverContext } from '../../contexts';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import moment from 'moment';

interface FiltersProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Filters: FC<FiltersProps> = ({ open, setOpen }) => {
  const [dateTypeSelected, setDateTypeSelected] = useState('Earth Date');
  const [earthValueEntered, setEarthValueEntered] = useState<any>();
  const [solValueEntered, setSolValueEntered] = useState<any>('');
  const [cameraSelected, setCameraSelected] = useState('');
  const { roverSelected } = useRoverContext();
  const { setFilters } = useFilterContext(); 

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const payload: any = {}

    if (cameraSelected) {
      payload.camera = cameraSelected.toLowerCase();
    }

    if (dateTypeSelected === 'Earth Date' && earthValueEntered?.$d) {
      payload.earth_date = moment(earthValueEntered.$d).format('YYYY-MM-DD');
    } 
    
    if (dateTypeSelected === 'Sol Date' && solValueEntered) {
      payload.sol = solValueEntered;
    }

    setFilters(payload);
    handleClose();
  };

  useEffect(() => {
    setEarthValueEntered('');
    setSolValueEntered('');
    setCameraSelected('');
  }, [roverSelected]);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Container>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
              {dateTypes.map((type) => (
                <StyledButton
                  key={type}
                  isSelected={type === dateTypeSelected}
                  onClick={() => setDateTypeSelected(type)}>
                  {type}
                </StyledButton>
              ))}
            </ButtonGroup>
          </DialogTitle>
          <DialogContent sx={{ paddingTop: '20px' }}>
            {dateTypeSelected === 'Earth Date' ? (
              <>
                <InputLabel>
                  Earth Date
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateField name='earth-date' size="small" value={earthValueEntered} onChange={(value) => setEarthValueEntered(value)} />
                </LocalizationProvider>
              </>
            ) : (
              <>
                <InputLabel>
                  Sol Date
                </InputLabel>
                <TextField
                  name='sol-date'
                  margin="dense"
                  placeholder='e.g. 1000'
                  id="name"
                  type="number"
                  variant="outlined"
                  size="small"
                  value={solValueEntered}
                  onChange={(event) => setSolValueEntered(event.target.value)}
                />
              </>
            )}

            <InputLabel sx={{ paddingTop: '20px' }}>
              Cameras
            </InputLabel>
            <RadioGroup
              aria-label="opciones"
              name="opciones"
              value={cameraSelected}
              onChange={(event) => setCameraSelected(event.target.value)}
            >
              <Grid container spacing={2}>
                {cameras.map((camera) => (
                  <Grid item xs={12} sm={6} key={camera.key}>
                    <FormControlLabel
                      value={camera.key}
                      control={<Radio />}
                      label={camera.name}
                      disabled={!(camera.rovers).includes(roverSelected)}
                      sx={{ paddingTop: '5px', fontSize: '12px', color: 'rgba(0, 0, 0, 0.6);'}}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Apply</Button>
          </DialogActions>
        </Container>
      </Dialog>
    </>
  );
};

const StyledButton = styled(Button) <{ isSelected: boolean }>`
  height: 30px;
  width: 100px;
  border-radius: 19px;
  padding: 10px;
  font-size: 12px;
  box-shadow: 20px;
  border-color: black !important;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')} !important;
  background-color: ${({ isSelected }) => (isSelected ? '#BB3896' : '#FDECEF')} !important;
`;

const Container = styled.div`
  background-color: #FDECEF;
`;
