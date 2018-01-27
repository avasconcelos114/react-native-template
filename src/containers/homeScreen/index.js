import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeScreen from './homeScreen';

import { getCurrentUser } from '../../actions/userActions';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        currentUser: state.userReducer.currentUser,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getCurrentUser,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
