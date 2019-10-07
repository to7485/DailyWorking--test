import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VehicleEditorScreen from './screens/VehicleEditorScreen';
import ListingEditorScreen from './screens/ListingEditorScreen';
import MainScreen from './screens/MainScreen';
import VehicleDetailScreen from './screens/VehicleDetailScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterScreen1 from './screens/RegisterScreen1';
import RegisterScreen2 from './screens/RegisterScreen2';
import AuctionListScreen from './screens/AuctionListScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'


const defaultNavigationOptions = {
 headerTintColor: 'white',
 headerStyle: {
   backgroundColor: '#0C00AF',
 },
};
class DetailsScreen extends React.Component {
 render() {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Details!</Text>
     </View>
   );
 }
}
const HomeStack = createStackNavigator(
 {
   Home: MainScreen,
   VehicleDetail: VehicleDetailScreen,
 },
 {
   defaultNavigationOptions,
 }
);
const AuctionStack = createStackNavigator(
 {
   AuctionList: AuctionListScreen,
   VehicleDetail: VehicleDetailScreen,
 },
 {
   defaultNavigationOptions,
 }
);
const MypageStack = createStackNavigator(
  {
    Home: MainScreen,
    VehicleDetail: VehicleDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
 );
const SettingsStack = createStackNavigator(
 {
   Settings: SettingsScreen,
   Details: DetailsScreen,
 },
 {
   defaultNavigationOptions,
 }
);
const MainTab = createBottomTabNavigator(
 {
   홈: HomeStack,
   출퇴근: AuctionStack,
   마이페이지:MypageStack,
   설정: SettingsStack,
 },
 {
   /* Other configuration remains unchanged */
   defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ focused, horizontal, tintColor }) => {
       const { routeName } = navigation.state;
       let iconName;
       if (routeName === '홈') {
         iconName = 'ios-home';
       } else if (routeName === '출퇴근') {
         iconName = 'ios-walk';
       } else if (routeName === '마이페이지') {
         iconName = 'ios-man';
       }
       else if (routeName === '설정') {
        iconName = 'ios-settings';
      }
       // You can return any component that you like here! We usually use an
       // icon component from react-native-vector-icons
       return (
         <Ionicons
           name={iconName}
           size={horizontal ? 20 : 25}
           color={tintColor}
         />
       );
     },
   }),
   tabBarOptions: {
     activeTintColor: '#0C00AF',
     inactiveTintColor: 'gray',
   },
 }
);
const VehicleEditorStack = createStackNavigator({
 VehicleEditor: VehicleEditorScreen,
});
const ListingEditorStack = createStackNavigator({
 ListingEditor: ListingEditorScreen,
});
const RootStack = createStackNavigator(
 {
   Main: {
     screen: LoginScreen,
   },
   MyCarList:MainTab,
   ListingEditorStack,
   VehicleEditorStack,
   Login: LoginScreen,
   Register: RegisterScreen,
   Register1: RegisterScreen1,
   Register2: RegisterScreen2
 },
 {
   mode: 'modal',
   headerMode: 'none',
 }
);
const AppContainer = createAppContainer(RootStack);
export default AppContainer;

