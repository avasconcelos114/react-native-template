import {
    createRouter,
} from '@expo/ex-navigation';
import HomeScreen from './src/containers/homeScreen';
import Profile from './src/containers/profileScreen';

const Router = createRouter(() => ({
    home: () => HomeScreen,
    profile: () => Profile,
}));

export default Router;
