import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      // dispatch() changes standard promise behaviour - .then() will ALWAYS be called. It will be passed fulfilled or rejected object.
      // unwrap() prevents this behaviour, allowing us to redefine the promise. This allows changing the state upon promise completion
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
