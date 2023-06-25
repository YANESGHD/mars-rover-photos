import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import styled from '@emotion/styled';

export const StyledDateField = () => {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField size="small"/>
      </LocalizationProvider>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 10px;
`;
