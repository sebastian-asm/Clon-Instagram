import { useState } from 'react';

export default function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }) => setValue(target.value);
  return { value, onChange };
}
