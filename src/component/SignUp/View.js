import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
  Image
   } from 'react-native';
import DismissKeyboard from 'dismissKeyboard';
import { TextInput, Card } from 'react-native-paper';
//import KeyboardSpacer from 'react-native-keyboard-spacer';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppStyles, AppColors, AppSizes, AppFonts } from '@theme/';
//import { Dropdown } from 'react-native-material-dropdown';
//import Toast, {DURATION} from 'react-native-easy-toast';
//import { Card } from 'native-base';


export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      gender:'',
      error: {},     
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  // componentWillMount(){
  //   this.setState({profileProps:this.props})
  //   this.setState({
  //     first_name : 'first_name' in this.props.profileData ? this.props.profileData.first_name : '',
  //     middle_name : 'middle_name' in this.props.profileData ? this.props.profileData.middle_name : '',
  //     last_name : 'last_name' in this.props.profileData ? this.props.profileData.last_name : '',
  //     user_name : 'user_name' in this.props.profileData ? this.props.profileData.user_name : '',
  //     phone : 'phone' in this.props.profileData ? this.props.profileData.phone : '',
  //     designation_id : 'designation_id' in this.props.profileData ? this.props.profileData.designation_id : '',
  //     id : 'id' in this.props.profileData ? this.props.profileData.id  : '',
  //     password : '******',
  //   })
  // }
  
  // componentWillUpdate(){
  //   if(this.state.profileProps !== this.props){
  //     this.setState({profileProps: this.props})
  //     this.setState({
  //       first_name : 'first_name' in this.props.profileData ? this.props.profileData.first_name : '',
  //       middle_name : 'middle_name' in this.props.profileData ? this.props.profileData.middle_name : '',
  //       last_name : 'last_name' in this.props.profileData ? this.props.profileData.last_name : '',
  //       user_name : 'user_name' in this.props.profileData ? this.props.profileData.user_name : '',
  //       phone : 'phone' in this.props.profileData ? this.props.profileData.phone : '',
  //       designation_id : 'designation_id' in this.props.profileData ? this.props.profileData.designation_id : '',
  //       id : 'id' in this.props.profileData ? this.props.profileData.id  : '',
  //       password : '******',
  //     })
  //   }
  // }
  
  // componentWillReceiveProps(nextProps){
  //   if('UpdateProfileData' in nextProps && 'data' in nextProps.UpdateProfileData){
  //     this.setState({updateLoading: false})
  //     if(nextProps.UpdateProfileData.data.success == true ){
  //         Alert.alert('Reporting',nextProps.UpdateProfileData.data.message)
  //     }else{
  //       if('message' in nextProps.UpdateProfileData.data){
  //         Alert.alert('Reporting',nextProps.profileData.data.message);
  //       }
  //     }
  //   }
  // }

  onSubmit(){
    this.props.navigation.navigate('Login')
    alert('Account created Successfully')

    // const validateEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    // const { first_name, middle_name, last_name, user_name, phone,  id, password } = this.state

    // const error = {}
    // if(first_name == ''){
    //   error.first_name = 'Invalid First Name'
    // }if(last_name == ''){
    //   error.last_name = 'Invalid Last Name'
    // }if(password == ''){
    //   error.password = 'Invalid password'
    // }
    // if(user_name == '' || !validateEmail.test(user_name)){
    //   error.user_name = 'Invalid User Name'
    // }
    // if(phone.length < 10 || phone.length > 13){
    //   error.phone = 'Invalid Mobile Number'
    // }
    // this.setState({error})
    // if(!Object.keys(error).length){
    //   this.setState({updateLoading: true})
    //   const formData={}
    //   formData.first_name = first_name.trim()
    //   formData.middle_name = middle_name.trim()
    //   formData.last_name = last_name.trim()
    //   formData.user_name = user_name.trim()
    //   formData.phone = phone.trim()
    //   if(password !== '******'){
    //     formData.password = password.trim()
    //   }
    //   formData.id = id
    //   this.props.updateProfile(formData)
    // }
  }

  render() {
    const {
      name,
      email,
      phone,
      password,
      gender,
      isLoading,
      error,     
    } = this.state

    return (
        <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
          <View style={styles.container}>
            <View style={styles.box1}>
              <Image
                  style={{width: 80, height: 80, margin:10}}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
              <Text style={styles.text}>Welcome to React Native App</Text>
            </View>
            <Card style={styles.cardView}>
              <TextInput
                ref={(ref) => { this.userNameInput = ref; }}
                placeholder={'Name'}
                onChangeText={(name) => this.setState({name})}
                value={name}
                onSubmitEditing={()=> this.userNameInput.focus()}
                style={styles.textInput}
                />
               { 'name' in error  &&
                <View style={{width: '100%', justifyContent:'flex-start'}}>
                  <Text style={{color: 'red'}}>{error.name}</Text>
                </View>
               }
              <TextInput
                ref={(ref) => {this.userEmailInput = ref; }}
                placeholder={'Email'}
                onChangeText={(email) => this.setState({email})}
                value={email}
                keyboardType={'email-address'}
                onSubmitEditing={()=> this.userEmailInput.focus()}
                style={styles.textInput}
                />
              { 'email' in error  &&
                <View style={{width: '100%', justifyContent:'flex-start'}}>
                  <Text style={{color: 'red'}}>{error.email}</Text>
                </View>
              }

              <TextInput
                ref={(ref) => {this.userPasswordInput = ref; }}
                placeholder={'Create Password'}
                onChangeText={(password) => this.setState({password})}
                value={password}
                secureTextEntry={true}
                onSubmitEditing={()=> this.userPasswordInput.focus()}
                style={styles.textInput}
                />
              { 'password' in error  &&
                <View style={{width: '100%', justifyContent:'flex-start'}}>
                  <Text style={{color: 'red'}}>{error.password}</Text>
                </View>
              }
              
              <TextInput
                ref={(ref) => { this.userPasswordInput = ref; }}
                placeholder={'Re-Type Password'}
                secureTextEntry={true}
                onChangeText={(phone) => this.setState({password})}
                value={password}
                maxLength={15}
                onSubmitEditing={()=> this.userPasswordInput()}
                style={styles.textInput}
                />
              { 'password' in error  &&
                <View style={{width: '100%', justifyContent:'flex-start'}}>
                  <Text style={{color: 'red'}}>{error.password}</Text>
                </View>
              }
              <TextInput
                ref={(ref) => { this.userPhoneInput = ref; }}
                placeholder={'Mobile Number'}
                keyboardType={'number-pad'}
                onChangeText={(phone) => this.setState({phone})}
                value={phone}
                maxLength={15}
                onSubmitEditing={()=> this.userPhoneInput()}
                style={styles.textInput}
                />
              { 'phone' in error  &&
                <View style={{width: '100%', justifyContent:'flex-start'}}>
                  <Text style={{color: 'red'}}>{error.phone}</Text>
                </View>
              }

              <TextInput
                ref={(ref) => { this.userGenderInput = ref; }}
                placeholder={'Gender'}
                onChangeText={(gender) => this.setState({gender})}
                value={gender}
                onSubmitEditing={()=> this.userGenderInput.focus()}
                style={styles.textInput}
                />
              { 'gender' in error  &&
                <View style={{width: '100%', justifyContent:'flex-start'}}>
                  <Text style={{color: 'red'}}>{error.gender}</Text>
                </View>
              }
              <TouchableOpacity onPress={this.onSubmit} style={styles.buttons}>
                  <Text style={AppStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
             </Card>
             <View style={styles.bottomView}><Text>Already registered? <Text style={styles.text2} onPress={this.onSubmit}>Sign In</Text></Text></View>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    position: 'absolute',
    justifyContent: "center", 
    alignItems: "center",
    width: '100%',
    height: 220,
    backgroundColor: 'black'
  },
  cardView: {
    top: 176,
    left:20,
    width: '90%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  textInput: {
    backgroundColor:'#fff',
    width:'90%',
    marginLeft:20,
    //borderBottomColor: '#bbb',
    //borderBottomWidth: 0.5,
  },
  buttons:{
    width: '90%', 
    justifyContent: 'center', 
    alignItems: 'center',  
    height: 40, 
    backgroundColor: '#078392',  
    marginTop: 22,
    marginBottom: 22,
    marginLeft:20
  },
  bottomView:{
    alignItems: 'center', 
    justifyContent: 'center',
    top:190,
    fontWeight: '500',
  },
  text2: {
    fontSize: 18,
    color: '#C19F11',
    marginTop: 15,
    fontWeight: '500',
  },
});