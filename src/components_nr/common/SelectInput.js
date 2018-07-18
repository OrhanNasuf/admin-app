import React, {PropTypes} from 'react';

class SelectInput extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select name={this.props.name} value={this.props.value} onChange={this.props.onChange} className="form-control">
                        <option value="">{this.props.defaultOption}</option>
                        {this.props.options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })}
                    </select>
                    {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
                </div>
            </div>
        );
    }
}

SelectInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    options: PropTypes.array.isRequired
};

export default SelectInput;