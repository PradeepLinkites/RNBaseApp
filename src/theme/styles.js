import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';
import { Dimensions, Platform } from 'react-native';

export default {

  container: {
    flex: 1,
    backgroundColor: '#00000',
    height: '100%'
  },

  profileContainer:{
    flex: 1,
    backgroundColor: Colors.app.background,
    height: '100%'
  },

  profileForm: {
    flex: 1, 
    justifyContent: 'center', 
    paddingLeft: 20,
    paddingRight: 20, 
    height: '100%',
    width: '100%',
  },

  profileLabel:{
    fontSize: 15,
    fontFamily: Fonts.HNMedium,
    letterSpacing: 0.7,
    color: 'gray',
    marginTop: 20
  },

  textInput: {
    //borderBottomColor: '#B1B1B1', 
    //borderBottomWidth: 1.5, 
    //color: Colors.app.navColor, 
    width: '100%',
    fontSize: 20,
    letterSpacing: 0.7,
    fontFamily: Fonts.HNMedium,
    marginTop: 10,
    backgroundColor:'#fff',
  },

  errTextInput: {
    borderBottomColor: 'red', 
    borderBottomWidth: 1.5, 
    color: Colors.app.navColor, 
    width: '100%',
    fontSize: 20,
    letterSpacing: 0.7,
    fontFamily: Fonts.HNMedium,
    marginTop: 10
  },

  descriptionBox: {
    height: 200,
    borderColor: Colors.app.navColor, 
    borderWidth: 1.5, 
    justifyContent: 'flex-start'
  },
  
  descriptionBoxError: {
    height: 200,
    borderColor: 'red', 
    borderWidth: 1.5, 
    justifyContent: 'flex-start'
  },

  textDisInput: {
    color: Colors.app.navColor, 
    width: '100%',
    fontSize: 20,
    letterSpacing: 0.7,
    fontFamily: Fonts.HNMedium,
    padding: 10
  },

  errDisTextInput: {
    color: Colors.app.navColor, 
    width: '100%',
    fontSize: 20,
    letterSpacing: 0.7,
    fontFamily: Fonts.HNMedium,
    padding: 10
  },

  selectInput: {
    width: '100%', 
    height: 40,
    justifyContent: 'center'
  },
  
  errselectInput: {
    width: '100%', 
    width: '100%', 
    height: 40,
    borderBottomWidth: 1.5, 
    borderColor: 'red', 
  },

  formHeader:{
    width: '100%',
    height: 50,
    backgroundColor: Colors.app.navColor,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5
  },

  XformHeader:{
    width: '100%',
    height: 80,
    backgroundColor: Colors.app.navColor,
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: 5
  },

  formFooter:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: Colors.app.navColor,
  },

  formHeaderText:{
    fontFamily: Fonts.HNBold,
    fontSize: 20,
    letterSpacing: 0.8,
    color: '#FFF'
  },

  formHeaderButton:{
    position: 'absolute',
    right: 10,
  },

  formContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10, 
    fontSize: 50, 
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
  },

  notificationHeader:{
    width: '100%',
    height: 40,
    backgroundColor: Colors.app.navColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttons:{
    width: '90%', 
    justifyContent: 'center', 
    alignItems: 'center',  
    height: 40, 
    backgroundColor: '#078392', 
    borderRadius: 4, 
    marginTop: 25,
    marginBottom: 25,
    marginLeft:20
  },

  buttonText:{
    color: Colors.app.background, 
    //fontFamily: Fonts.HNBold, 
    fontSize: 18,
  },
};
