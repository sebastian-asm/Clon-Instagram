import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function SubmitButton({ children, disabled, onClick }) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // node es cualquier cosa que React puede renderizar
  children: PropTypes.node.isRequired,
};
