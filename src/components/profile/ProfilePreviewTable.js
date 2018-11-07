import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import SpinnerC from '../common/SpinnerC';

export default function ProfilePreviewTable({
  tableData: {
    title,
    colspan,
    infoType,
    rows,
    config,
    show
  },
  loading,
  isLoadingOnGetData,
}) {
  let tableRows = [];

  rows.forEach((row, idxA) => {
    let tableDetails = [];

    row.forEach((fieldName, idxB) => {
      const tableContent = config[fieldName].tableContent;
      const label        = tableContent.label;
      const detail       = tableContent.value;

      let detailOutput = show ? detail : '------';

      if(loading[infoType] || isLoadingOnGetData) {
        detailOutput = <SpinnerC />
      }

      tableDetails.push(
        <td key={idxB}>
          <span className={css(s.label)}>{ label }:</span> 
          <span className={css(s.detail)}>{ detailOutput }</span>
        </td>
      )
    });

    tableRows.push(
      <tr className={css(s.row)} key={idxA}>
        { tableDetails }
      </tr>
    )
  });

  return ( 
    <table className={css(s.table)}>
      <thead>
        <tr>
          <td className={css(s.title)} colSpan={colspan}>{ title }</td>
        </tr>
      </thead>
      
      <tbody>
        { tableRows }
      </tbody>
    </table>  
  )
}

const PREVIEW_LABEL_STYLE = {
  fontSize: '13px',
  color: '#636e72',
  marginRight: '10px',
}

const PREVIEW_DETAIL_STYLE = {
  color: '#2d3436',
  fontSize: '14px',
  fontWeight: 'normal',
  marginRight: '30px',
}

const PREVIEW_ROW_STYLE = {
  marginBottom: '2px',
}

const PREVIEW_TITLE_STYLE = {
  background: '#eee',
  color: '#636e72',
  fontWeight: 'bold',
  fontSize: '12px',
  borderBottom: '3px solid #dfe6e9',
  boxSizing: 'border-box',
  padding: '13px 15px 8px',
  lineHeight: '1',
  marginBottom: '10px',
  marginTop: '20px',
  textTransform: 'uppercase',
}

const TABLE_STYLE = {
  marginBottom: '18px',
  width: '100%',
}

const s = StyleSheet.create({
  label:              PREVIEW_LABEL_STYLE,
  detail:             PREVIEW_DETAIL_STYLE,
  row:                PREVIEW_ROW_STYLE,
  title:              PREVIEW_TITLE_STYLE,
  table:              TABLE_STYLE,
});
