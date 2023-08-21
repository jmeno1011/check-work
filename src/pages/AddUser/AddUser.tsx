import {View, TextInput, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Title from '../../components/Title/Title';

export default function AddUser() {
  const [name, setName] = useState<string>('');
  const onChangeName = (newName: string) => {
    setName(newName);
  };
  return (
    <View>
      <Title>유저 추가</Title>
      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{marginRight: 8, fontSize: 20}}>이름:</Text>
        <TextInput
          style={{fontSize: 20}}
          placeholder="이름을 입력해주세요"
          onChangeText={newName => onChangeName(newName)}
          defaultValue={name}
        />
      </View>
      <Button title="추가하기" />
    </View>
  );
}
