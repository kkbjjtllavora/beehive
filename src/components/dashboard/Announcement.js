import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import moment from 'moment';
import ShadowBox from 'containers/layouts/ShadowBox';
import DashboardListItem from 'components/dashboard/DashboardListItem';
import thumb from 'assets/images/user-icon-2.png';

const NO_ANNOUNCEMENT_STYLE = {
  textAlign: 'center',
  color: '#2f3640',
  marginTop: '80px',
  fontSize: '17px',
}

const s = StyleSheet.create({
  noAnnouncement: NO_ANNOUNCEMENT_STYLE,
});

const Announcement = ({
  newUsersArray
}) => {
  const announcementsList = newUsersArray.map(({
    firstName,
    lastName
  }, idx) => <DashboardListItem thumbSrc={thumb}
                                key={idx}
                                mainInfo={`${firstName} ${lastName}`}
                                rightInfo="First Day" />
  );

  const announcement = newUsersArray.length !== 0 ?
    <ul>{ announcementsList }</ul> :
    <div className={css(s.noAnnouncement)}>
      Placeholder text should be replaced soon!
    </div>;

  return (
    <ShadowBox title={moment().format('ddd M/D/YY')} width="100%" titleColor="#1abc9c">
      <ul>
        { announcement }
      </ul>
    </ShadowBox>
  )
}

export default Announcement;

Announcement.propTypes = {
  newUsersArray: PropTypes.array
}
