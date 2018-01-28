import { connect } from 'react-redux';

import Profile from './profileScreen';
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

export default connect(mapStateToProps)(Profile);
