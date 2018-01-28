import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeScreen from './homeScreen';

import { getCurrentUser } from '../../actions/userActions';
import { selectCurrentUser } from '../../selectors/userSelector';

/*
 * selects values from reducer and sends actions as props to component
 */
function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        currentUser: selectCurrentUser(state),
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
