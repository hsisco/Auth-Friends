import React from 'react';

export const Input = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    { label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null }  
</div>
)