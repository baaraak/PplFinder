import React from "react";
import * as S from "./style";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <S.Page>{children}</S.Page>
    </S.Container>
  );
};

export default Layout;
