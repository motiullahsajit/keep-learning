import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, Button, View} from 'react-native';
import HomeDataLoad from './src/components/HomePage/HomeDataLoad';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import Login from './src/components/LoginPage/Login';
import EnrolledCourse from './src/components/BookPage/EnrolledCourse';
import {setUserInfo} from './src/Redux/Actions/Actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Home from './src/components/HomePage/Home';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => {
    return state.course.userInfo;
  });
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(setUserInfo({}));
    } catch (error) {
      console.error(error);
    }
  };
  console.log(userInfo);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {userInfo.email ? (
            <>
              <Stack.Screen
                name="Courses"
                options={{
                  headerRight: () => (
                    <View style={{flexDirection: 'row'}}>
                      <View style={{paddingTop: 5}}>
                        <Text>{userInfo.name} </Text>
                      </View>
                      <View style={{paddingRight: 5}}>
                        <Button title="logout" onPress={signOut} />
                      </View>
                    </View>
                  ),
                }}
                component={HomeDataLoad}
              />
              <Stack.Screen
                name="Enrolled"
                options={{
                  headerRight: () => <Text>{userInfo.name} </Text>,
                }}
                component={EnrolledCourse}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
