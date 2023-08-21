import {Text, View} from 'react-native';
import React from 'react';
import {styled} from 'styled-components/native';

interface UserCardProps {
  name: string;
  count: number;
  contract: boolean;
}

export default function UserCard({...props}: UserCardProps) {
  const {name, count, contract} = props;
  return (
    <UserCardBlock>
      <UserInfoBlock>
        <View>
          <UserName>{name}</UserName>
        </View>
        <UserWorkingCountBlock>
          <UserWorkingCount>총 근무 일 수:</UserWorkingCount>
          <UserWorkingCount>{count}</UserWorkingCount>
        </UserWorkingCountBlock>
      </UserInfoBlock>
      <UserContractBlock>
        <Text>계약 상태 :</Text>
        <Text>{contract ? '계약 중' : '계약 종료'}</Text>
      </UserContractBlock>
    </UserCardBlock>
  );
}

const UserCardBlock = styled.View`
  padding: 0 8px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: black;
`;

const UserInfoBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const UserWorkingCountBlock = styled.View`
  flex-direction: row;
`;

const UserWorkingCount = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const UserContractBlock = styled.View`
  margin-top: 8px;
  padding: 8px 0;
  border-top-width: 1px;
  border-color: silver;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* & > Text {
    font-weight: bold;
  } */
`;
