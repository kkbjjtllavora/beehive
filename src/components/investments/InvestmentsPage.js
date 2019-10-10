import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminWrapper from 'components/layouts/AdminWrapper';
import InvestmentsForm from 'containers/investments/InvestmentsForm';
import InvestmentsContent from 'containers/investments/InvestmentsContent';
import Title, { TITLE_B } from 'components/common/Title';

class InvestmentsPage extends Component {
  componentWillUnmount() {
    this.props.resetFormFields();
  }

  render() {
    return (
      <AdminWrapper>

        <Title variety={TITLE_B}>
          Personal Benefits
        </Title>

        <InvestmentsForm />

        <InvestmentsContent />

      </AdminWrapper>
    )
  }
}

export default InvestmentsPage;

InvestmentsPage.propTypes = {
  resetFormFields: PropTypes.func
}
