import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomRoute } from '../routes';
import Alert from './Alert';
import { useAppSelector } from '../hooks/redux';

function App(): JSX.Element {
  const isAlertOpen = useAppSelector((store) => store.alerts.isAlertOpen);
  const alertOptions = useAppSelector((store) => store.alerts.alertOptions);
  return (
    <>
      {isAlertOpen && <Alert {...alertOptions} />}
      <Router>
        <CustomRoute path={'/'} />
      </Router>
    </>
  );
}

export default App;
