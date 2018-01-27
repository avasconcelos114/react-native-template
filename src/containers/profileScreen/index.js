import { connect } from 'react-redux';

import Profile from './profileScreen';
import { selectCurrentUser } from '../../selectors/userSelector';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        currentUser: selectCurrentUser(state),
    };
}

export default connect(mapStateToProps)(Profile);
