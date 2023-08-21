import React from 'react';
import {styled} from 'styled-components/native';

interface AddButtonProps {
  title: string;
  onPress: () => void;
}

export default function AddButton({title, onPress}: AddButtonProps) {
  return <AddButtonBlock title={title} onPress={onPress} />;
}

const AddButtonBlock = styled.Button`
  font-size: 24px;
  font-weight: bold;
`;
