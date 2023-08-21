import React, {ReactNode} from 'react';
import {styled} from 'styled-components/native';

interface UserListBoxProps {
  children: ReactNode;
}

export default function UserListBox({children}: UserListBoxProps) {
  return <UserListBoxBlock>{children}</UserListBoxBlock>;
}

const UserListBoxBlock = styled.View`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
