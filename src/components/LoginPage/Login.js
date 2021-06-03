import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../Redux/Actions/Actions';

export default function Login() {

 const dispatch = useDispatch()

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '738518457688-uqg6gt0liupknfl6nn33mfncrnuk01qc.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const handleGoogleSingIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({userInfo});
      console.log(userInfo.user);
      dispatch(setUserInfo(userInfo.user));

      // console.log("39",loggedUser);

      // isAdminHandle(userInfo);
      // userInfo.user.id && navigation.push("Admin");
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <Text> Log in to Enroll</Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSingIn}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
