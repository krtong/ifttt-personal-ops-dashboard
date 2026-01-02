import React from 'react';
import RangeTabs from './RangeTabs.jsx';

export default function ReportHeader({ updatedAt, rangeDays, onRangeChange }) {
  return (
    <header className="report-header">
      <div className="report-top">
        <div>
          <h1>Personal Ops</h1>
          <div className="meta">Evidence-first report for training, fuel, and recovery.</div>
        </div>
        <div className="meta">{updatedAt ? `Updated ${updatedAt}` : 'Updated —'}</div>
      </div>
      <RangeTabs value={rangeDays} onChange={onRangeChange} />
    </header>
  );
}
