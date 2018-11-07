import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import ClearfixBox from 'components/layouts/ClearfixBox';

const DETAIL_ITEM_LABEL_STYLE = {
  width: '40%',
  display: 'inline-block',
  fontSize: '14px',
  textAlign: 'right',
  boxSizing: 'border-box',
  paddingRight: '10px',
  float: 'left',
  height: '35px',
  lineHeight: '1.1'
}

const DETAIL_ITEM_DATA_STYLE = {
  width: '60%',
  fontSize: '14px',
  fontWeight: 'bold',
  float: 'right',
  height: '35px',
  lineHeight: '1.1'
}

const INVESTMENT_DETAILS_STYLE = {
  marginBottom: '70px',
}

const s = StyleSheet.create({
  detailItemLabel:       DETAIL_ITEM_LABEL_STYLE,
  detailItemData:        DETAIL_ITEM_DATA_STYLE,
  investmentDetails:     INVESTMENT_DETAILS_STYLE,
});

export default function InvestmentDetails({
  detailsArray
}) {
  const investmentDetails = detailsArray.map(({
    label, 
    data
  }) => 
    <li key={label}>
      <span className={css(s.detailItemLabel)}>{ label }:</span>
      <span className={css(s.detailItemData)}>{ data }</span>
    </li>
  )

  return (
    <ul className={css(s.investmentDetails)}>
      { investmentDetails }

      <li><ClearfixBox /></li>
    </ul>
  )
}
