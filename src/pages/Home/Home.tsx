import {
  ScrollView,
  useColorScheme,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {User} from '../../../types';
import Title from '../../components/Title/Title';
import AddButton from '../../components/AddButton/AddButton';
import UserListBox from '../../components/UserList/UserListBox/UserListBox';
import UserCard from '../../components/UserList/UserCard/UserCard';
import {userWorkList} from '../../../data';

export default function Home({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'Home'>) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [userList, setUserList] = useState<User[]>([]);

  const onPressAdd = () => {
    Alert.alert('추가하기');
    navigation.navigate('Add User');
  };
  useEffect(() => {
    setUserList(userWorkList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Title>일정</Title>
        <AddButton title={'추가하기'} onPress={onPressAdd} />
        <UserListBox>
          {userList.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              count={user.workingCount}
              contract={user.contract}
            />
          ))}
        </UserListBox>
      </ScrollView>
    </SafeAreaView>
  );
}
