import React, { forwardRef } from "react";

const FormGroup = forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id} className="block text-gray-500 mb-1">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className="border border-gray-400 border-opacity-60 block w-full focus:outline-none focus:border-gray-600 py-1 px-2 text-gray-700 rounded"
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        ref={ref}
      />
    </div>
  );
});

export default FormGroup;
