import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/containers/homeScreen';
import Profile from './src/containers/profileScreen';

/*
 * Register new screens below with an alias
 * before being able to use them on different components
 */
export default StackNavigator({
    home: {
        screen: HomeScreen,
    },
    profile: {
        screen: Profile,
    },
},
{
    initialRouteName: 'home',
});
