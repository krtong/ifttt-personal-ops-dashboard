import React from 'react';
import MetricTable from './MetricTable.jsx';

export default function ReportSection({ section }) {
  if (!section) return null;

  const title = section.title || section.label || section.key || 'Section';
  const plan = section.plan || section.summary || '—';
  const actions = section.actions || [];
  const evidence = section.evidence || section.metrics || [];

  return (
    <section className="report-section" data-group={section.key}>
      <div className="section-hero">
        <div>
          <div className="section-title">{title}</div>
          <div className="section-plan">{plan}</div>
        </div>
        {section.note ? <div className="meta">{section.note}</div> : null}
      </div>

      {actions.length ? (
        <div className="actions-list">
          {actions.map((action, idx) => (
            <div className="action-item" key={`${section.key}-action-${idx}`}>
              <strong>{action.title || 'Action'}</strong>
              <div className="meta">{action.detail || action}</div>
            </div>
          ))}
        </div>
      ) : null}

      <MetricTable metrics={evidence} />
    </section>
  );
}
