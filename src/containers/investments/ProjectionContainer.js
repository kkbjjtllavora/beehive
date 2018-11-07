import { connect } from 'react-redux';
import ProjectionContainer from '../../components/investments/ProjectionContainer';

const mapStateToProps = ({
  investments: {
    investmentFormFields: {
      investmentPeriod,
      saveAmount,
    },
    isSaveAmountLoading,
  }
}) => ({ 
  isSaveAmountLoading,
  investmentPeriod: investmentPeriod.value,
  saveAmount: saveAmount.value,
});

export default connect(mapStateToProps)(ProjectionContainer);
