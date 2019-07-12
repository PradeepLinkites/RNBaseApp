import { connect } from 'react-redux';

// Actions
// import * as AuthActions from '@redux/notification/actions';
// import * as UserActions from '@redux/user/actions';
// import * as ReportActions from '@redux/report/actions';
// The component we're mapping to
import DashBoard from './View';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  // notificationData: state.notification.notificationData,
  // designationData: state.user.designationData,
  // statusData: state.user.statusData,
  // profileData: state.user.profileData,
  // postReportData: state.report.postReportData,
  // reportData: state.report.reportData,
  // ImageData: state.report.ImageData,
  // ImageProData: state.report.ImageProData,
});

// Any actions to map to the component?
const mapDispatchToProps = {
   // getNotification: AuthActions.getNotification,
   // getDesignation: UserActions.getDesignation,
   // getstatus: UserActions.getstatus,
   // getProfile: UserActions.getProfile,
   // postReport: ReportActions.postReport,
   // resetReport: ReportActions.resetReport,
   // resetReportData:ReportActions.resetReportData,
   // getReport: ReportActions.getReport,
   // uploadImage: ReportActions.uploadImage,
   // resetUploadImage: ReportActions.resetUploadImage,
   // markNotification: AuthActions.markNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
