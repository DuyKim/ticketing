import axios from 'axios';
import { useState } from 'react';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState([]);

  const doRequest = async (props = {}) => {
    try {
      setErrors([]);
      const response = await axios[method](url, { ...body, ...props });
      if (onSuccess) {
        console.log('success', response);
        onSuccess(response.data);
      }
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const errorComponent = errors.length > 0 && (
    <div className="alert alert-danger">
      <h4>Oops...</h4>
      <ul className="my-0">
        {errors.map((error) => (
          <li key={error.message}>{error.message}</li>
        ))}
      </ul>
    </div>
  );
  return [errorComponent, doRequest];
}
