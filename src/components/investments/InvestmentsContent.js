import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import ContentWrapper from 'components/investments/ContentWrapper';
import ContentTitle from 'components/investments/ContentTitle';
import GaugeContainer from 'containers/investments/GaugeContainer';
import ProjectionContainer from 'containers/investments/ProjectionContainer';
import InvestmentDetails from 'components/investments/InvestmentDetails';
import RiskToleranceDetail from 'containers/investments/RiskToleranceDetail';
import investmentConstants from 'components/investments/fieldConstants/investmentConstants';

const InvestmentsContent = () => {
  const investmentContent = investmentConstants.map(({
    type,
    title,
    logo,
    investmentDetails,
    riskToleranceDetails,
    gaugeIcon
  }) => {
    return (
      <ContentWrapper key={type}>
        <ContentTitle thumb={logo}>
          { title }
        </ContentTitle>

        <GaugeContainer
          labels={['Time Horizon', 'Risk Tolerance']}
          toleranceIcon={gaugeIcon} />

        
        <RiskToleranceDetail details={riskToleranceDetails} />

        <ProjectionContainer />

        <InvestmentDetails detailsArray={investmentDetails} />
      </ContentWrapper>
    )
  });

  return (
    <div className={css(s.investmentsContent)}>
      <p className={css(s.containerLabel)}>
        Based on your answers, here are the investment options that are best fit for you.
      </p>

      { investmentContent }
    </div>
  )
}

export default InvestmentsContent;

const CONTAINER_LABEL_STYLE = {
  marginBottom: '15px',
  textAlign: 'center',
  color: '#7f8c8d',
}

const FORM_OUTPUT_CONTENT_STYLE = {
  width: '70%',
  float: 'right',
  boxSizing: 'border-box',
  marginBottom: '60px',
}

const s = StyleSheet.create({
  investmentsContent:    FORM_OUTPUT_CONTENT_STYLE,
  containerLabel:        CONTAINER_LABEL_STYLE,
});
