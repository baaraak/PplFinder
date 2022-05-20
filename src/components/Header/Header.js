import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Header = ({ children }) => {
  return (
    <S.Header>
      <Text size="64px" bold>
        {children}
      </Text>
    </S.Header>
  );
};

export default Header;
