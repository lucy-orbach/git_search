import React, { useState } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import DefaultErrorBoundry from 'src/components/errors/DefaultErrorBoundry';
import 'src/app.css';
// import Warning from 'src/warnings/Warning';
const Warning = React.lazy(() => import('./components/warnings/Warning'));

// top-level React component
const App = () => {
  let [counter, setCounter] = useState(0);``
  return (
    <div className="app">
      <DefaultErrorBoundry>
      <h1>Hello World!</h1>
      </DefaultErrorBoundry>
      <h2>{`Counter: ${counter}`}</h2>
      <div className="btn-container">
        <button onClick={() => setCounter(counter + 1)}>Add more!</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      { counter > 10 && (
        <React.Suspense fallback={'oops'}>
          <Warning />
        </React.Suspense>
      )}

    </div>
  );
};
// react-hot-loader allows hot reloads of the code without affecting the current state;
export default connect(mapS)
export default hot(App);

// keyword: UNSAFE_deprecatedCycleMethod
