import React, { Component } from 'react';
import AdminWrapper from '../layouts/AdminWrapper';
import InvestmentsForm from '../../containers/investments/InvestmentsForm';
import InvestmentsContent from '../../containers/investments/InvestmentsContent';
import Title, { TITLE_B } from '../common/Title';

export default class InvestmentsPage extends Component {
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
