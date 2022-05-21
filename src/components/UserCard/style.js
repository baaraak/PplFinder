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

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  &:hover ${IconButtonWrapper} {
    opacity: 1;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const UserPicture = styled.img`
  border-radius: 45%;

  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
`;
