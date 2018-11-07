import { connect } from 'react-redux';
import RiskToleranceDetail from '../../components/investments/RiskToleranceDetail';
import { riskTolerance } from '../../components/investments/fieldConstants/investmentOptions';

const mapStateToProps = ({
  investments: {
    investmentFormFields,
    isRiskToleranceLoading,
  }
}) => ({
  isRiskToleranceLoading,
  riskTolerance: investmentFormFields[riskTolerance].value
});

export default connect(mapStateToProps)(RiskToleranceDetail);
