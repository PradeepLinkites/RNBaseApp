import { connect } from 'react-redux';

// Actions
import * as AuthActions from '@redux/auth/actions';

// The component we're mapping to
import ForgotPassword from './View';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
 // resetData: state.auth.resetData,

});

// Any actions to map to the component?
const mapDispatchToProps = {
  //resetPassword: AuthActions.resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
