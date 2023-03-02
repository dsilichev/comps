import propTypes from "prop-types";
import className from "classnames";

const finalClassName = className({
  'bg-blue-500': true,
  'text-yellow-400': false,
});

console.log(finalClassName);

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  console.log(outline && success);
  const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500': primary,
    'border-gray-900 bg-gray-900': secondary,
    'border-green-500 bg-green-500': success,
    'border-yellow-400 bg-yellow-400': warning,
    'border-red-500 bg-red-500': danger,
    'rounded-full': rounded,
    'text-white': !outline && (primary || secondary || success || warning || danger),
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  });
  return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
