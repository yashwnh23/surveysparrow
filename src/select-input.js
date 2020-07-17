import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

const SelectInput = (props) => {
    const { options, onChange, value, className, intl: { formatMessage }, label, error, errorName } = props
    return (
        <Fragment>
            <select
                onChange={onChange && ((evt) => onChange(evt.target.value))}
                value={value}
                className={className}
            >
                <option value="" selected disabled hidden>{label ? label : 'Select'}</option>
                {options.map(option => <option key={option.value} value={option.value} data-image-src={option.dataImage}>{formatMessage({ id: option.label })} </option>)}
            </select>
            {error && <span className='invalid-feedback'><FormattedMessage id={error} defaultMessage={error} values={{ name: errorName }} /></span>}
        </Fragment>
    )
}

SelectInput.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default injectIntl(SelectInput)
