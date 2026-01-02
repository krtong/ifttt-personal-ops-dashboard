import React from 'react';

function formatValue(metric) {
  if (metric == null) return '—';
  if (typeof metric === 'string') return metric;
  if (metric.value != null) return metric.value;
  if (metric.current != null) return metric.current;
  return '—';
}

export default function MetricTable({ metrics }) {
  if (!metrics || !metrics.length) return <div className="meta">No metrics yet.</div>;

  return (
    <div className="metric-table">
      <div className="metric-row header">
        <div>Metric</div>
        <div>Current</div>
        <div>Target</div>
        <div>Window</div>
        <div>Trend</div>
      </div>
      {metrics.map((metric) => (
        <div
          key={metric.key || metric.label}
          className="metric-row"
          data-importance={metric.importance}
        >
          <div className="metric-label">{metric.label || metric.key}</div>
          <div>{formatValue(metric.current ?? metric.value)}</div>
          <div>{metric.target ?? metric.range ?? '—'}</div>
          <div>{metric.window ?? '—'}</div>
          <div>{metric.trend ?? '—'}</div>
        </div>
      ))}
    </div>
  );
}
