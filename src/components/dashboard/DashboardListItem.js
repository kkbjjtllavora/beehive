import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const LIST_ITEM_STYLE = {
  borderBottom: '1px solid #eaeff0',
  padding: '8px 0',
  fontSize: '14px',
}

const TIME_IN_STYLE = {
  float: 'right',
  fontWeight: 'normal',
  color: '#2ecc71',
}

const THUMB_STYLE = {
  width: '21px',
  float: 'left',
  marginRight: '10px',
}

const RESOLUTION_DATE_STYLE = {
  width: '110px',
  display: 'inline-block',
} 

const RESOLUTION_DETAIL_STYLE = {
  float: 'right',
}

const s = StyleSheet.create({
  listItem:         LIST_ITEM_STYLE,
  timeIn:           TIME_IN_STYLE,
  thumb:            THUMB_STYLE,
  resolutionDate:   RESOLUTION_DATE_STYLE,
  resolutionDetail: RESOLUTION_DETAIL_STYLE,
});

export default function DashboardListItem({
  thumbSrc,
  mainInfo,
  rightInfo,
  resolutionDate,
  resolutionDetail
}) {
  return (
    <li className={css(s.listItem)}>
      <p>
        <span>
          { thumbSrc && 
              <img src={thumbSrc} 
                   alt={thumbSrc} 
                   className={css(s.thumb)} /> }
        </span>

        { resolutionDate && 
          <span className={css(s.resolutionDate)}>
            { resolutionDate }
          </span>
        }

        {
          resolutionDetail &&
          <span className={css(s.resolutionDetail)}>
            { resolutionDetail }
          </span>
        }

        { mainInfo }
         
        <span className={css(s.timeIn)}>
          { rightInfo }
      </span>
      </p>
    </li>
  )
}
