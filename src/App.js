import React from 'react';
import MainPage from './pages/mainPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
}

export default App;
