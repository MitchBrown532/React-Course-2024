import PropTypes from 'prop-types'

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
 }) {


    return <button className='bg-red-700'>{children}</button>
}

Button.PropTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger)


        if (count>1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be selected')
        }
    }
}

export default Button