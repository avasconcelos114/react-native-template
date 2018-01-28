import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import {
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';
import router from './router';
import store from './src/store/configureStore';

/*
 * Starting point of the application,
 * This is where we inject the store & router into the app!
 */
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationProvider router={router}>
                    <StackNavigation initialRoute={router.getRoute('home')} />
                </NavigationProvider>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('main', () => App);
