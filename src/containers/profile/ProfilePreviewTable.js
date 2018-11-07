import { connect } from 'react-redux';
import ProfilePreviewTable from 'components/profile/ProfilePreviewTable';

const mapDispatchToProps = ({
  profile: {
    profileFields,
    isLoadingOnGetData
  }
}) => {
  const loadingObj = {};
  
  for(let key in profileFields) {
    loadingObj[key] = profileFields[key].loading
  }

  return { 
    isLoadingOnGetData,
    loading: loadingObj 
  };
}

export default connect(mapDispatchToProps)(ProfilePreviewTable);
