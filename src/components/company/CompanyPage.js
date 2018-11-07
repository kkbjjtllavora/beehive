import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import AdminWrapper from '../layouts/AdminWrapper';
import ClearfixBox from '../layouts/ClearfixBox';
import ShadowBox from '../layouts/ShadowBox';
import Title, { TITLE_B } from '../common/Title';
import userIcon from '../../assets/images/user-icon-3.png';

const USER_CONTAINER_STYLE = {
  width: '50%',
  float: 'left',
  boxSizing: 'border-box',
  padding: '10px 20px',
}

const USER_CONTENT_STYLE = {
  padding: '15px 10px',
  border: '2px solid #ecf0f1',
  borderRadius: '2px',
}

const USER_ICON_STYLE = {
  width: '15%',
  display: 'inline-block',
  boxSizing: 'border-box',
  float: 'left',
}

const USER_INFO_STYLE = {
  width: '42.5%',
  display: 'inline-block',
  boxSizing: 'border-box',
  paddingLeft: '25px',
}

const USER_DETAILS_STYLE = {
  width: '42.5%',
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: '0 10px',
}

const USER_DETAIL_STYLE = {
  color: '#677071',
  marginBottom: '3px',
  fontSize: '15px',
}

const FULLNAME_STYLE = {
  color: '#27ae60',
  fontSize: '18px',
  display: 'block',
  fontWeight: 'bold',
  marginBottom: '3px',
}

const USER_IMAGE_STYLE = {
  marginLeft: '15px',
  width: '85%',
}

const s =StyleSheet.create({
  userContainer: USER_CONTAINER_STYLE,
  userContent:   USER_CONTENT_STYLE,
  userIcon:      USER_ICON_STYLE,
  userInfo:      USER_INFO_STYLE,
  userDetails:   USER_DETAILS_STYLE,
  userDetail:    USER_DETAIL_STYLE,
  fullName:      FULLNAME_STYLE,
  userImg:       USER_IMAGE_STYLE,
});

const UserDetail = ({ children }) =>
  <p className={css(s.userDetail)}>{ children }</p>;

export default class CompanyPage extends Component {
  render() {
    const userInfos = this.props.userInfos;

    return (
      <AdminWrapper>
        <ShadowBox withTitle={false}>
          <Title variety={TITLE_B}>
            Employee Search
          </Title>

          {
            userInfos.map(({
              department,
              title,
              team,
              location,
              fullName
            }, idx) => {
              return (
                <div className={css(s.userContainer)} key={idx}>
                  <div className={css(s.userContent)}>
                    <div className={css(s.userIcon)}>
                      <img src={userIcon} alt={fullName} className={css(s.userImg)} />
                    </div>

                    <div className={css(s.userInfo)}>
                      <p className={css(s.fullName)}>{ fullName }</p>
                      <UserDetail>{ title }</UserDetail>
                      <UserDetail>{ department } department</UserDetail>
                    </div>

                    <div className={css(s.userDetails)}>
                      <UserDetail>{ team } IT Team</UserDetail>
                      <UserDetail>{ location }</UserDetail>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <ClearfixBox />
        </ShadowBox>
      </AdminWrapper>
    )
  } 
}
