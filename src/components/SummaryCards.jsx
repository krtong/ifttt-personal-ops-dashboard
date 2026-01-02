import React from 'react';

function card(label, value, meta) {
  return (
    <div className="summary-card" key={label}>
      <div className="label">{label}</div>
      <div className="value">{value ?? '—'}</div>
      {meta ? <div className="meta">{meta}</div> : null}
    </div>
  );
}

export default function SummaryCards({ report }) {
  if (!report) return null;

  const summary = report.summary || {};
  const coverage = report.coverage || {};
  const race = report.sections?.find((section) => section.key === 'race');
  const daysToRace = race?.evidence?.find((m) => m.key === 'days_to_race')?.current;

  return (
    <div className="summary-grid">
      {card('Days to race', daysToRace ?? '—', 'Escape from Alcatraz')}
      {card(
        'Confidence',
        summary.confidence ?? (report.confidence != null ? `${Math.round(report.confidence * 100)}%` : '—'),
        coverage.nutrition_coverage != null ? `Nutrition coverage ${Math.round(coverage.nutrition_coverage * 100)}%` : null
      )}
      {card('Workouts (7d)', summary.workouts_7d ?? '—', summary.workouts_note)}
      {card('Sleep last', summary.sleep_last ?? '—', summary.sleep_note)}
    </div>
  );
}
