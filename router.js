import {
    createRouter,
} from '@expo/ex-navigation';
import HomeScreen from './src/containers/homeScreen';
import Profile from './src/containers/profileScreen';

/*
 * Register new screens below with an alias
 * before being able to use them on different components
 */
const Router = createRouter(() => ({
    home: () => HomeScreen,
    profile: () => Profile,
}));

export default Router;
