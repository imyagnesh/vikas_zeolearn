/* eslint-disable arrow-parens */
import React from 'react';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <div>
      <h1>HOC1</h1>
      <WrappedComponent {...props} />
    </div>
  );

  hocComponent.propTypes = {};

  return hocComponent;
};
