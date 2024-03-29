import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Redirect } from 'react-router-dom';
import AdminWrapper from 'components/layouts/AdminWrapper';
import TeamAttendance from 'containers/dashboard/TeamAttendance';
import Announcement from 'containers/dashboard/Announcement';
import ResolutionCenter from 'containers/dashboard/ResolutionCenter';
import Investments from 'components/dashboard/Investments';
import MyStuff from './MyStuff';

class Dashboard extends Component {
  componentDidMount() {
    const { onGetTeamMembers, teamName } = this.props;
    onGetTeamMembers(teamName);
  }

  render() {
    return (
      <AdminWrapper>
        { this.props.addUserDone && <Redirect to="/profile" /> }

        <div className={css(s.boxContainerCol3)}>
          <Announcement />
        </div>

        <div className={css(s.boxContainerCol3)}>
          <TeamAttendance />
        </div>

        <div className={css(s.boxContainerCol3)}>
          <Investments />
        </div>

        <div className={css(s.boxContainerCol2)}>
          <ResolutionCenter />
        </div>

        <div className={css(s.boxContainerCol3)}>
          <MyStuff />
        </div>
      </AdminWrapper>
    )
  }
}

export default Dashboard;

Dashboard.propTypes = {
  onGetTeamMembers: PropTypes.func,
  teamName:         PropTypes.string,
  addUserDone:      PropTypes.bool
}

const DEFAULT_BOX_CONTAINER_STYLE = {
  display: 'inline-block', 
  padding: '0 15px', 
  boxSizing: 'border-box',
  float: 'left'
}

const BOX_CONTAINER_COL_3_STYLE = { 
  ...DEFAULT_BOX_CONTAINER_STYLE,
  width: '33.3%',
}

const BOX_CONTAINER_COL_2_STYLE = {
  ...DEFAULT_BOX_CONTAINER_STYLE, 
  width: '66.7%', 
  padding: '0 17.5px',
}

const s = StyleSheet.create({
  boxContainerCol3: BOX_CONTAINER_COL_3_STYLE,
  boxContainerCol2: BOX_CONTAINER_COL_2_STYLE,
});
