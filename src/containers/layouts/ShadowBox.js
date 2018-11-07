import { connect } from 'react-redux';
import ShadowBox from '../../components/layouts/ShadowBox';

const mapStateToProps = ({
  teamMembers: {
    isLoading,
  }
}) => ({
  isLoading,
});

export default connect(mapStateToProps)(ShadowBox);
