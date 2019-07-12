import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { AppStyles, AppColors, AppSizes, AppFonts } from '@theme/';
import { BottomNavigation } from 'react-native-material-ui';
import { Toolbar } from 'react-native-material-ui';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class DashBoard extends React.Component {

  // static navigationOptions = ({ navigation }) => ({
  //       headerRight: (
  //           <View style={{flexDirection: 'row'}}>

  //                {/* <TouchableOpacity onPress={() => alert('This is a button!')} style={{marginRight: 10}}>
  //                    <Image source={require('../../assets/icons/search.png')} style={{width: 25, height: 25, tintColor: '#FFFFFF'}}/>
  //                </TouchableOpacity> */}
  //                { <SearchBar
  //                  round //To make the searchbar corner round (default square)
  //                  searchIcon={{ size: 24 }} //Size of the search icon
  //                  onChangeText={text => this.SearchFilterFunction(text)}
  //                  //Filter the list using the keywords inserted in searchbar
  //                  onClear={text => this.SearchFilterFunction('')}
  //                  placeholder="Type Here..."
  //                /> }
  //               <TouchableOpacity onPress={() => navigation.navigate('setting')} style={{marginRight: 15}}>
  //                   <Image source={require('../../assets/icons/settings.png')} style={{width: 25, height: 25, tintColor: '#000'}}/>
  //               </TouchableOpacity>
  //           </View>
  //       ),
  //       headerLeft: (
  //           <View style={{marginLeft: 15, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
  //               <Image source={require('../../assets/icons/thirdeye.png')} style={{width: 45, height: 45,tintColor: '#000'}}/>
  //           </View>
  //       )
  //   });

  constructor(props) {
    super(props);
    this.state = {
      active:'today',
    };
  }

  render() {
    //  const itemArr = Array.apply(null, Array(20))
    //   .map(function(_, i) {
    //     return i;
    //   })
    //   .map((_i, index) => {
    //     if (index === 0) {
    //       return (
    //         <List.Item
    //           key={index}
    //           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //           multipleLine
    //         >
    //           <View
    //             style={{
    //               flexDirection: 'row',
    //               justifyContent: 'space-between',
    //               alignItems: 'center',
    //             }}
    //           >
    //             <Text>Categories - {index}</Text>
    //             <Button
    //               type="primary"
    //               size="small"
    //               onPress={() => this.drawer.closeDrawer()}
    //             >
    //               close drawer
    //             </Button>
    //           </View>
    //         </List.Item>
    //       );
    //     }
    //     return (
    //       <List.Item
    //         key={index}
    //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //       >
    //         <Text>Categories - {index}</Text>
    //       </List.Item>
    //     );
    //   });
    // const sidebar = (
    //   <ScrollView style={[styles.container]}>
    //     <List>{itemArr}</List>
    //   </ScrollView>
    // );

    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
       {/*<Drawer
            sidebar={sidebar}
            position="left"
            open={false}
            drawerRef={el => (this.drawer = el)}
            onOpenChange={this.onOpenChange}
            drawerBackgroundColor="#ccc"
            >
            <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
                Open drawer
            </Button>
        */}
            {
              this.state.active ==='today' &&
              <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                  <Text>today</Text>
              </View>
            }
            {
              this.state.active ==='people' &&
              <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                  <Text>people</Text>
              </View>
            }
            {
              this.state.active ==='bookmark-border' &&
              <View style={{flex: 3, backgroundColor: 'steelblue'}}>
                  <Text>bookmark-border</Text>
              </View>
            }
            {
              this.state.active ==='settings' &&
              <View style={{flex: 1, backgroundColor: 'yellow'}}>
                  <Text>settings</Text>
              </View>
            }

          <BottomNavigation active={this.state.active} hidden={false} >
            <BottomNavigation.Action
                key="today"
                icon="today"
                label="Today"
                onPress={() => this.setState({ active: 'today' })}
            />
            <BottomNavigation.Action
                key="people"
                icon="people"
                label="People"
                onPress={() => this.setState({ active: 'people' })}
            />
            <BottomNavigation.Action
                key="bookmark-border"
                icon="bookmark-border"
                label="Bookmark"
                onPress={() => this.setState({ active: 'bookmark-border' })}
            />
            <BottomNavigation.Action
                key="settings"
                icon="settings"
                label="Settings"
                onPress={() => this.setState({ active: 'settings' })}
            />
          </BottomNavigation>
         {/* </Drawer>*/}
        <View>
         
        </View>

      </View>
    );
  }
}
