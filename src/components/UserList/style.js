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
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 500px;
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
