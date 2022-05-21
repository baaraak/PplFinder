import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Title = ({ children }) => {
  return (
    <S.Title>
      <Text size="64px" bold>
        {children}
      </Text>
    </S.Title>
  );
};

export default Title;
