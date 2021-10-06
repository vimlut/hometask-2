import PropTypes from 'prop-types';

import './UIFormGroup.scss';

const UIFormGroup = ({ children }) => (
  <div className="ui-form-group">
    {children}
  </div>
);

UIFormGroup.defaultProps = {
  children: null,
};

UIFormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};

export { UIFormGroup };
