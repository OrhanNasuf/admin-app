import React, {PropTypes} from 'react';

const SelectInput = ({name, onChange, defaultOption, value, error, options}) => {
    return (
            <div className="field" style={{flexGrow: 1}}>
                <select name={name} value={value} onChange={onChange} className="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string
};

export default SelectInput;