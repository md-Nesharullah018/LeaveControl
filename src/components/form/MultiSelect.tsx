"use client";
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false });

const options = [
  { value: "noida", label: "Noida Office" },
  { value: "delhi", label: "Delhi HQ" },
  { value: "bangalore", label: "Bangalore Branch" },
];

export default function MultiSelect() {
  return (
    <Select
      isMulti
      options={options}
      instanceId="multi-select-outlets"
      placeholder="Select outlets..."
      classNamePrefix="rs"
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: '40px',
          borderColor: state.isFocused ? '#3b82f6' : '#e2e8f0',
          boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none',
          '&:hover': { borderColor: '#94a3b8' },
          borderRadius: '6px',
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: '#eff6ff',
          borderRadius: '4px',
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: '#1d4ed8',
          fontWeight: 500,
        }),
      }}
    />
  );
}