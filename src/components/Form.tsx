import React from "react";

export const FormGroup: React.FC<{
  value: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  onChange: any;
  [key: string | symbol]: any;
}> = ({ name, label, type, value, className, onChange, ...otherProps }) => (
  <div className={className}>
    <label className="block mb-2 text-white" htmlFor={name}>
      {label}
    </label>
    <input
      onChange={onChange}
      className=" active:ring-2 focus:ring-blue-300 ring-2 ring-transparent w-full p-2 text-gray-300 bg-transparent border border-gray-500 rounded-md outline-none"
      type={type}
      name={name}
      value={value}
      id={name}
      {...otherProps}
    />
  </div>
);

export const Input: React.FC<{
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: any;
  [key: string]: any;
}> = ({ value, name, type, className, ...otherProps }) => (
  <input
    className={`active:ring-2 focus:ring-blue-300 ring-2 ring-transparent w-full p-2 text-gray-300 bg-transparent border border-gray-500 rounded-md outline-none ${className}`}
    type={type}
    name={name}
    value={value}
    id={name}
    {...otherProps}
  />
);
