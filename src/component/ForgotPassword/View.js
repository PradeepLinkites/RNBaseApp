import React, {Component} from 'react';
import { 
  StyleSheet, 
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback
   } from 'react-native';
import { AppStyles, AppColors, AppSizes, AppFonts } from '@theme/';
import { TextInput } from 'react-native-paper';

export default class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: {},
      isLoading: false
    };
  }

  // componentWillReceiveProps(nextProps){
  //   if('resetData' in nextProps && 'data' in nextProps.resetData){
  //     this.setState({isLoading: false})
  //     if(nextProps.resetData.data.success == true ){
  //        alert(nextProps.resetData.data.message)
  //        this.setState({email: ''})
  //     }else{
  //       if('message' in nextProps.resetData.data){
  //         alert(nextProps.resetData.data.message)
  //       }
  //     }
  //   }
  // }

  forgotPassword(){
    this.props.navigation.navigate('Login')
    alert("Login successfully Done")
    // const {email} = this.state
    // const error ={}
    // const validateEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

    // if(email == '' || !validateEmail.test(email)){
    //   error.email = 'Invalid Username'
    // }
    
    // this.setState({error})
    // if(!Object.keys(error).length){
    //   this.setState({isLoading: true})
    //   this.props.resetPassword({email})
    // }
  }

  render() {
    const {
      email,
      error,
      isLoading
    } = this.state
    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} accessible={false}>
      <View style={styles.container}> 
        <View style={styles.textInputView}>
          <TextInput
            placeholder={'Enter Email'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={(email) => this.setState({email})}
            value={email}
            style={styles.textInput}
          />
          { 'email' in error  &&
              <View style={{width: '100%', justifyContent:'flex-start'}}>
                <Text style={{color: 'red'}}>{error.email}</Text>
              </View>
          }
          <TouchableOpacity disabled={isLoading} onPress={this.forgotPassword.bind(this)} style={AppStyles.buttons}>
            {isLoading ?
                <ActivityIndicator size="small" color="#FFFFFF" />
              :
                <Text style={{color: AppColors.app.background}}>Submit</Text>
            }
          </TouchableOpacity>
        </View>
        </View>
      </TouchableWithoutFeedback>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView:{
    top:250
  },
  textInput: {
    backgroundColor:'#fff',
  },
});