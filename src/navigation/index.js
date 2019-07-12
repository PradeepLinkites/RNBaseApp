import React, {Component} from 'react';
//import {createDrawerNavigator, createStackNavigator , createAppContainer} from 'react-navigation';
import { TouchableOpacity, Text, Image } from 'react-native';
import { View } from 'react-native';
import Welcome from '../component/Welcome/Container';
import Login from '../component/Login/Container';
import Signup from '../component/SignUp/Container';
import ForgotPassword from '../component/ForgotPassword/Container';
import DashBoard from '../component/DashBoard/Container';

import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import DrawerScreen from '../component/SideMenu/Drawer';

{/*
import { AppStyles, AppColors, AppSizes, AppFonts } from '@theme/';

const AppNavigator = createStackNavigator({
    Welcome: { 
      screen: Welcome,
      navigationOptions: {
        header: null
      },
    },
    Login: { 
      screen: Login,
      navigationOptions: {
        header: null
      },
    },
    ForgotPassword: { 
      screen: ForgotPassword,
      navigationOptions: {
        title: 'Forgot Password',
      },
    },
    Signup: { 
      screen: Signup,
      navigationOptions: {
        header: null
      },
    },
    DashBoard: { 
      screen: DashBoard,
        navigationOptions: {
        //header: null
        title: 'DashBoard',
        //headerLeft: null
      }
    },
},

{
    initialRouteName: 'Login',
    // navigationOptions: {
    //     headerStyle: {
    //       backgroundColor: AppColors.app.navColor, //'#263238',
    //     },
    //    headerTintColor: AppColors.app.navTitle,
    //     headerTitleStyle: {
    //       //fontFamily: AppFonts.HNBold,
    //       fontSize: 25
    //     },
    //   },
}
);

const App = createAppContainer(AppNavigator);

export default App;
*/}

// const Tabs = createBottomTabNavigator({
//     Welcome: Welcome,
//     Signup: Signup,
// },{
//     tabBarOptions: {
//         activeTintColor: '#000',
//         inactiveTintColor: 'gray',
//         style: {
//             backgroundColor: '#fff',
//         },
//         indicatorStyle: {
//             backgroundColor: '#000',
//         },
//     }
// });

const DrawerNavigator = createDrawerNavigator({
    DashBoard:{
        screen: DashBoard
    },
    Welcome: { 
      screen: Welcome,
      navigationOptions: {
        header: null
      },
    },
    Login: { 
      screen: Login,
      navigationOptions: {
        header: null
      },
    },
    ForgotPassword: { 
      screen: ForgotPassword,
      navigationOptions: {
        title: 'Forgot Password',
      },
    },
    Signup: { 
      screen: Signup,
      navigationOptions: {
        header: null
      },
    },

},{
    initialRouteName: 'Login',
    drawerWidth: 300,
    navigationOptions: ({ navigation }) => ({
        title: 'ReactNavigation',  // Title to appear in status bar
        headerLeft: 
        <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
          <MenuImage style="styles.bar" navigation={navigation}/>
        </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerMode: 'float',
    })
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <View style={{padding: 10}}><Image source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
              style={{width: 30, height: 30}}
                /></View>
    }else{
        return <View style={{padding: 10}}><Image source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
              style={{width: 30, height: 30}}
              /></View>
    }
}

const StackNavigator = createStackNavigator({
    
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    
    DrawerNavigator:{
      screen: DrawerNavigator
    }
},{
    navigationOptions: ({ navigation }) => ({
        // title: 'ReactNavigation',  // Title to appear in status bar
        // header: null,
        headerMode: 'float',
        
        // headerLeft: 
        // <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
        //      <Image source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}} style={{width: 20, height: 20, tintColor: 'red'}} />

        // </TouchableOpacity>,
        // headerStyle: {
        //     backgroundColor: '#000',
        // },
        // headerTintColor: '#000',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },

    }
  )
});

// export default StackNavigator;
const App = createAppContainer(StackNavigator);

export default App;
