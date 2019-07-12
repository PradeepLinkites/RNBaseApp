import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import Signup from './View';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  //profileData: state.user.profileData,
  //UpdateProfileData: state.user.UpdateProfileData,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  //getProfile: UserActions.getProfile,
  //updateProfile: UserActions.updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
