import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

export default class Profile extends React.Component {
    static propTypes = {
        navigator: PropTypes.object,
        currentUser: PropTypes.string,
    }

    static route = {
        navigationBar: {
            title: 'Profile',
        },
    }

    render() {
        return (
            <View>
                <Text>This be {this.props.currentUser}`s profile!</Text>
                <Button title='View Home' onPress={() => this.props.navigator.push('home')}/>
            </View>
        );
    }
}
