import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminWrapper from 'components/layouts/AdminWrapper';
import ClearfixBox from 'components/layouts/ClearfixBox';
import ShadowBox from 'components/layouts/ShadowBox';
import ProfileFormContainer from 'containers/profile/ProfileFormContainer';
import ProfilePreview from 'containers/profile/ProfilePreview';

class ProfilePage extends Component {
  componentDidMount() {
    const { populateProfileData, userId } = this.props;
    userId && populateProfileData(userId);
  }

  componentWillUnmount() {
    this.props.resetProfileState();
  }

  render() {
    const title = this.props.addUserDone ? "**Please setup your profile before you proceed.." : "My Profile";

    return (
      <AdminWrapper>
        <ShadowBox title={title}>

          <ProfileFormContainer />     

          <ProfilePreview />

          <ClearfixBox />
        </ShadowBox>
      </AdminWrapper>
    )
  }
}

export default ProfilePage;

ProfilePage.propTypes = {
  populateProfileData: PropTypes.func,
  userId:              PropTypes.string,
  resetProfileState:   PropTypes.func,
  addUserDone:         PropTypes.func,
}
