/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Title from './src/components/Title/Title';
import {User} from './types';
import UserListBox from './src/components/UserList/UserListBox/UserListBox';
import UserCard from './src/components/UserList/UserCard/UserCard';
import {userWorkList} from './data';
import AddButton from './src/components/AddButton/AddButton';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [userList, setUserList] = useState<User[]>([]);

  const onPressAdd = () => {
    Alert.alert('추가하기');
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

export default App;
