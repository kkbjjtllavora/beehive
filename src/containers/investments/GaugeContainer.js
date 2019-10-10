import { connect } from 'react-redux';
import GaugeContainer from 'components/investments/GaugeContainer';
import { riskTolerance } from 'components/investments/fieldConstants/investmentOptions';

const mapStateToProps = ({
  investments: {
    investmentFormFields,
  },
}) => ({
  riskTolerance: investmentFormFields[riskTolerance].value,
});

export default connect(mapStateToProps)(GaugeContainer);
