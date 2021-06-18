//This is a custom hook
import { useState } from "react";

export function useInput(initialVal) {
  const [state, setState] = useState(initialVal);
  return [
    {
      value: state,
      onChange: (e) => setState(e.target.value),
    },
    () => setState(initialVal),
  ];
}
