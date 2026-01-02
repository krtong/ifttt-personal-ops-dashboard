import React from 'react';

const OPTIONS = [
  { label: '1d', days: 1 },
  { label: '7d', days: 7 },
  { label: '30d', days: 30 },
];

export default function RangeTabs({ value, onChange }) {
  return (
    <div className="range-tabs">
      {OPTIONS.map((option) => (
        <button
          key={option.days}
          type="button"
          className={`range-tab ${value === option.days ? 'active' : ''}`}
          onClick={() => onChange(option.days)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
