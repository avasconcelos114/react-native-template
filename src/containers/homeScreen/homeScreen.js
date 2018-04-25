import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }),
        currentUser: PropTypes.string,
        actions: PropTypes.shape({
            getCurrentUser: PropTypes.func,
        }),
    }

    static route = {
        navigationBar: {
            title: 'Home',
        },
    }

    getCurrentUser = (name) => {
        const { actions } = this.props;
        actions.getCurrentUser(name);
    }

    render() {
        return (
            <View>
                <Text>This be the home screen matey!</Text>
                <Button title='View Profile' onPress={() => this.props.navigation.navigate('profile')}/>
                <Button title='get current user' onPress={() => this.getCurrentUser('Avasconcelos114')}/>
                <Text>{this.props.currentUser}</Text>
            </View>
        );
    }
}
