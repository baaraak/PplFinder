import styled from "styled-components";

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

export const Empty = styled.div`
  font-size: 2rem;
  font-style: italic;
  text-align: center;
  opacity: 0.5;
`;
