import { connect } from 'react-redux';

// Actions
//import * as AuthActions from '@redux/auth/actions';

// The component we're mapping to
import Welcome from './View';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
 // loginData: state.auth.loginData,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  //login: AuthActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
