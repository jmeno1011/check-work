import React, {ReactNode} from 'react';
import {styled} from 'styled-components/native';

interface TitleProps {
  children: ReactNode;
}

export default function Title({children}: TitleProps) {
  return (
    <TitleBlock>
      <TitleText>{children}</TitleText>
    </TitleBlock>
  );
}

const TitleBlock = styled.View`
  margin-top: 16px;
  padding: 16px;
`;

const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
