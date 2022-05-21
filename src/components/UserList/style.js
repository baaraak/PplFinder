import styled from "styled-components";
import {
  Checkbox,
  Chip,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 90%;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: auto;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormControlStyled = styled(FormControl)`
  width: 100%;

  .MuiChip-root {
    margin-right: 5px;
  }
`;
