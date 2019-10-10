import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import ClearfixBox from 'components/layouts/ClearfixBox';
import timeHorizonIcon from 'assets/images/time-horizon-icon.png';

const GAUGE_CONTAINER_STYLE = {
  marginBottom: '15px',
}

const GAUGE_CONTENT_STYLE = {
  width: '50%',
  float: 'left',
  boxSizing: 'border-box',
  textAlign: 'center',
}

const GAUGE_IMAGE_STYLE = {
  textAlign: 'center',
  display: 'block',
  margin: '0 auto 10px'
}

const GAUGE_LABEL_STYLE = {
  fontWeight: 'bold',
  fontSize: '13px',
}

const s = StyleSheet.create({
  gaugeContainer:     GAUGE_CONTAINER_STYLE,
  gaugeContent:       GAUGE_CONTENT_STYLE,
  gaugeImage:         GAUGE_IMAGE_STYLE,
  gaugeLabel:         GAUGE_LABEL_STYLE,
});

const GaugeContainer = ({
  labels,
  toleranceIcon,
  riskTolerance
}) => {
  const gaugeContent = labels.map((label, idx) => {
    const thumbSrc = label === 'Time Horizon' ? timeHorizonIcon : toleranceIcon[riskTolerance];

    return ( 
      <div key={idx} className={css(s.gaugeContent)}>
        <img className={css(s.gaugeImage)} src={thumbSrc} alt={label} />
        <span className={css(s.gaugeLabel)}>{ label }</span>
      </div>
    )
  });

  return (
    <div className={css(s.gaugeContainer)}>
      { gaugeContent }

      <ClearfixBox />
    </div>
  )
}

export default GaugeContainer;

GaugeContainer.propTypes = {
  labels:        PropTypes.array,
  toleranceIcon: PropTypes.object,
  riskTolerance: PropTypes.string
}
