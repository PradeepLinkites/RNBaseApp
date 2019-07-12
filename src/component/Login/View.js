import React, {Component} from 'react';
import { 
  StyleSheet, 
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  Platform,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Image,
  BackHandler

   } from 'react-native';
// import firebase from 'firebase';
// require("firebase/messaging")
import { TextInput, Card } from 'react-native-paper';
import { AppStyles, AppColors, AppSizes, AppFonts } from '@theme/';
import { NavigationActions } from 'react-navigation';
// import Permissions from 'react-native-permissions'
// import FCM, { NotificationActionType } from "react-native-fcm";


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      error: {},
      isLoading: false,
      token: ''
    };
  }

  // componentWillMount(){    
  //   AsyncStorage.getItem('@User', (err, result) => { 
  //     var result = result;
  //     if (result !== null && result !== '') {
  //   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DashBoard' })]);
  //     }
  //   });
  // }

  // async componentDidMount(){
  //   FCM.getInitialNotification().then(notif => {})
  //   try {
  //     let result = await FCM.requestPermissions({
  //       badge: false,
  //       sound: true,
  //       alert: true
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
    
  //   FCM.getFCMToken().then(token => {
  //     this.setState({token})
  //   })

  //   if(Platform.OS === 'ios'){
  //     Permissions.request('location').then(response => {})
  //   }else{
  //     try {
  //       await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
  //         'title': 'Allow "reporting"',
  //         'message': 'to access your location while you are using the app.'
  //       })
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  // }
  
  // componentWillReceiveProps(nextProps){
  //   if('loginData' in nextProps && 'data' in nextProps.loginData){
  //     this.setState({isLoading: false})
  //     if(nextProps.loginData.data.success == true ){
  //       if('id' in nextProps.loginData.data.data){
  //         const id = nextProps.loginData.data.data.id
  //         AsyncStorage.setItem('@User', id);
  //         this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DashBoard' })]);
  //       }
  //     }else{
  //       if('message' in nextProps.loginData.data){
  //         const error = {
  //           login: nextProps.loginData.data.message
  //         }
  //         this.setState({error})
  //       }
  //     }
  //   }
  // }

  forgotPassword(){
    this.props.navigation.navigate('Signup')
  }

  login(){
    this.props.navigation.navigate('DashBoard')
    Keyboard.dismiss();
    // const validateEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    // const {user_name, password} = this.state;
    // const error = {};
    
    // if(user_name == '' || !validateEmail.test(user_name)){
    //   error.user_name = 'Invalid Username'
    // }if(password == ''){
    //   error.password = 'Invalid Password'
    // }

    // this.setState({error})
    // if(!Object.keys(error).length){
    // const formData={}
    // formData.username= user_name
    // formData.password= password
    // formData.device_token = this.state.token
    // this.props.login(formData)
    // this.setState({isLoading: true})
    // }
  }

  render() {
    const {
      user_name,
      password,
      error,
      isLoading
    } = this.state

    return (
      <View style={AppStyles.container}>
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
          <View style={AppStyles.formContainer}>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Text style={styles.text1}>Welcome to React Native App</Text>
            <Text style={styles.text2}>Get Started for Free</Text>
            <Text style={styles.text3}>Note that for network and data images, you will need to manually specify the dimensions of your image!</Text>
            <TextInput
              ref={(ref) => { this.emailInput = ref; }}
              style={'user_name' in error ? AppStyles.errTextInput : AppStyles.textInput}
              placeholder={'Email/Mobile Number'}
              placeholderTextColor={AppColors.text.textInput}
              autoCapitalize = 'none'
              onChangeText={(user_name) => this.setState({user_name})}
              value={user_name}
              onSubmitEditing={()=> this.passwordInput.focus()}
            />
            { 'user_name' in error  &&
              <View style={{width: '100%', justifyContent:'flex-start'}}>
                <Text style={{color: 'red'}}>{error.user_name}</Text>
              </View>
            }

            <TextInput
              ref={(ref) => { this.passwordInput = ref; }}
              style={'password' in error ? AppStyles.errTextInput : AppStyles.textInput}
              placeholder={'Password'}
              placeholderTextColor={AppColors.text.textInput}
              autoCapitalize = 'none'
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={password}
              onSubmitEditing={this.login.bind(this)}
            />
            { 'password' in error  &&
            <View style={{width: '100%', justifyContent:'flex-start'}}>
              <Text style={{color: 'red'}}>{error.password}</Text>
            </View>
            }           
              <Text style={styles.text4} onPress={()=> this.props.navigation.navigate('ForgotPassword')}>Forgot Password ?</Text>
            {'login' in error &&
              <Text style={styles.errText}>{error.login}</Text>
            }
            <TouchableOpacity disabled={isLoading} onPress={this.login.bind(this)} style={AppStyles.buttons}>
              {isLoading == false ?
                <Text style={AppStyles.buttonText}>Sign In</Text>
                :
                <ActivityIndicator size="small" color="#FFFFFF" />
              }
            </TouchableOpacity>
            <Text style={styles.text1}>'Not registered? <Text style={styles.text4} onPress={this.forgotPassword.bind(this)}>Create an account'</Text></Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  text1: {
    fontSize: 16,
    textAlign: 'center',
    color: '#626263',
    marginTop: 15,
    fontWeight: '500',
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    color: '#144A9E',
    fontWeight: 'bold',
    marginTop: 20,
  },
  text3: {
    fontSize: 16,
    textAlign: 'center',
    color: '#626263',
    marginTop: 10,
    marginBottom:50,
    fontWeight: '500',
  },
  text4: {
    fontSize: 16,
    color: '#C19F11',
    marginTop: 15,
    fontWeight: '500',
  },
});