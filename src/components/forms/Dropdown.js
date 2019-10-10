import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import userIcon from 'assets/images/user-icon.png';
import chevronDown from 'assets/images/chevron-down-icon.png';
import Backdrop from 'components/common/Backdrop';

const initialState = {
  isOpen: false,
}

export default class Dropdown extends Component {
  state = initialState;

  onClickHandler = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  onClickBackdrop = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div style={{ display: 'inline-block' }}>
        <Backdrop isOpen={isOpen} onClick={this.onClickBackdrop} />

        <div style={{ cursor: 'pointer', display: 'inline-block' }} onClick={this.onClickHandler}>
          <img src={userIcon} className={css(s.userIcon)} alt="user" />
          <span style={{ fontSize: '15px' }}>{ this.props.fullName }</span>
          <img src={chevronDown} alt="" width="10px" style={{ marginLeft: '8px' }} />
        </div>

        { isOpen ? 
            <div className={css(s.dropdownContainer)}>
              <ul>
                <li className={css(s.dropdownListItem)}>
                  <Link className={css(s.listItemAnchor)} to="/profile">
                    My Profile
                  </Link>
                </li>

                <li className={css(s.dropdownListItem)}>
                  <a className={css(s.listItemAnchor)} onClick={this.props.logoutUser}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            : null }
      </div>
    )
  }
}

const DROPDOWN_CONTAINER_STYLE = {
  background: '#ecf0f1',
  border: '1px solid #bdc3c7',
  borderTop: 'none',
  color: '#ecf0f1',
  position: 'absolute',
  boxSizing: 'border-box',
  top: '60px',
  right: '0',
  zIndex: '100',
  width: '225px',
}

const DROPDOWN_LIST_ITEM_STYLE = {
  lineHeight: '1',
  display: 'block',
}

const LIST_ITEM_ANCHOR_STYLE = {
  width: '100%',
  display: 'block',
  padding: '10px 15px',
  fontSize: '16px',
  boxSizing: 'border-box',
  color: '#45484c',
  cursor: 'pointer',
  textDecoration: 'none',

  ':hover': {
    background: '#bdc3c7',
  }
}

const USER_ICON_STYLE = {
  marginRight: '8px',
  width: '30px',
  float: 'left',
  marginTop: '16px',
}

const s = StyleSheet.create({
  dropdownContainer:    DROPDOWN_CONTAINER_STYLE,
  dropdownListItem:     DROPDOWN_LIST_ITEM_STYLE,
  listItemAnchor:       LIST_ITEM_ANCHOR_STYLE,
  userIcon:             USER_ICON_STYLE,
});
