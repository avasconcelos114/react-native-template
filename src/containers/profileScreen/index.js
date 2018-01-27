import { connect } from 'react-redux';

import Profile from './profileScreen';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        currentUser: state.userReducer.currentUser,
    };
}

export default connect(mapStateToProps)(Profile);
