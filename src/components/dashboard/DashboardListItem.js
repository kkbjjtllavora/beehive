import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const s = StyleSheet.create({
  listItem: {
    borderBottom: '1px solid #eaeff0',
    padding: '8px 0',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',

    '&:last-child': {
      borderBottom: 'none',
    }
  },
  
  timeIn: {
    fontWeight: 'normal',
    color: '#2ecc71',
  },

  thumb: { 
    width: '20px', 
    marginRight: '10px',
    float: 'left',
  },
});

const DashboardListItem = ({
  thumbSrc,
  mainInfo,
  rightInfo,
  resolutionDate,
  resolutionDetail
}) => {
  return (
    <li className={css(s.listItem)}>
      { resolutionDate && 
        <span className={css(s.resolutionDate)}>
          { resolutionDate }
        </span>  }

      { resolutionDetail &&
        <span className={css(s.resolutionDetail)}>
          { resolutionDetail }
        </span> }

      <div>
        { thumbSrc && <span><img src={thumbSrc} 
                               alt={thumbSrc} 
                               className={css(s.thumb)} /></span> }

        { mainInfo }
      </div>
       
      <span className={css(s.timeIn)}>
        { rightInfo }
      </span>
    </li>
  )
}

export default DashboardListItem;

DashboardListItem.propTypes = {
  thumbSrc:         PropTypes.string,
  mainInfo:         PropTypes.oneOfType([
                      PropTypes.string,
                      PropTypes.node
                    ]),
  rightInfo:        PropTypes.oneOfType([
                      PropTypes.string,
                      PropTypes.node
                    ]),
  resolutionDate:   PropTypes.string,
  resolutionDetail: PropTypes.oneOfType([
                      PropTypes.string,
                      PropTypes.node
                    ]),
}
