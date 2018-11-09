import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import ShadowBox from 'containers/layouts/ShadowBox';
import Button, { INVESTMENT_BUTTON } from 'components/forms/Button';
import investmentIcon from 'assets/images/investments-icon.png';

const INVESTMENT_ICON_STYLE = {
  width: '80%',
  borderRadius: '50%',
  background: '#fff',
  border: '1px solid #ccd4d6',
  display: 'block',
}

const ICON_CONTAINER_STYLE = {
  float: 'right',
  boxSizing: 'border-box',
  width: '50%',
  marginTop: '18px',
}

const DETAILS_CONTAINER_STYLE = {
  float: 'left',
  boxSizing: 'border-box',
  width: '50%',
  textAlign: 'center',
  marginTop: '40px',
  padding: '0 30px',
}

const INVESTMENT_DESCRIPTION_STYLE = {
  color: '#1abc9c',
  marginBottom: '8px' 
}

const s = StyleSheet.create({
  investmentIcon:         INVESTMENT_ICON_STYLE,
  iconContainer:          ICON_CONTAINER_STYLE,
  investmentDescription:  INVESTMENT_DESCRIPTION_STYLE,
  detailsContainer:       DETAILS_CONTAINER_STYLE,
});

const Investments = () => {
  return (
    <ShadowBox title="Investments" width="100%" titleColor="#2ecc71">
      <div className={css(s.detailsContainer)}>
        <p className={css(s.investmentDescription)}>
          Start saving <br />
          for your <br />
          dream vacation
        </p>

        <Link to="/investments">
          <Button variety={INVESTMENT_BUTTON}> 
            LEARN MORE
          </Button>
        </Link>
      </div>

      <div className={css(s.iconContainer)}>
        <img src={investmentIcon} 
             alt="Investments" 
             className={css(s.investmentIcon)} />
      </div>
    </ShadowBox>
  )
}

export default Investments;
