import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'

const BreakView = props => {
  const { breakLabel, onClick } = props;

  return (
      <Button
        size="small"
        onClick={onClick}
        onKeyPress={onClick}
      >
        {breakLabel}
      </Button>
  );
};

BreakView.propTypes = {
  breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func.isRequired,
};

export default BreakView;
