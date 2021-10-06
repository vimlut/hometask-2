/* eslint-disable react/prop-types */
import './UIFormGroup.scss';

const UIFormGroup = ({ children }) => (
  <div className="ui-form-group">
    {children}
  </div>
);

UIFormGroup.defaultProps = {
};

export { UIFormGroup };
