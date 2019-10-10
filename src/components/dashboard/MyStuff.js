import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import ShadowBox from 'containers/layouts/ShadowBox';
import DashboardListItem from 'components/dashboard/DashboardListItem';

const MY_STUFF_LABEL_STYLE = {
  fontSize: '18px',
  color: '#767c7d',
}

const PENDING_REQUEST_DETAIL_STYLE = {
  fontSize: '17px',
  color: '#484d4e',
  textAlign: 'center',
  marginBottom: '15px',
  marginTop: '10px',
}

const s = StyleSheet.create({
  myStuffLabel:         MY_STUFF_LABEL_STYLE,
  pendingRequestDetail: PENDING_REQUEST_DETAIL_STYLE,
});

const MyStuffLabel = ({ children }) => (
  <h3 className={css(s.myStuffLabel)}>{ children }</h3>
)

const MyStuff = () => {
  return (
    <ShadowBox title="My Stuff" width="100%" titleColor="#3498db">
      <MyStuffLabel>Pending Requests</MyStuffLabel>
      <p className={css(s.pendingRequestDetail)}>
        All your requests are approved. :)
      </p>

      <MyStuffLabel>Leave Credits</MyStuffLabel>
      <ul>
        <DashboardListItem
          mainInfo="Vacation"
          rightInfo="5" />

        <DashboardListItem
          mainInfo="Sick"
          rightInfo="0" />

        <DashboardListItem
          mainInfo="Bereavement"
          rightInfo="0" />
      </ul>
    </ShadowBox>
  )
}

export default MyStuff;
