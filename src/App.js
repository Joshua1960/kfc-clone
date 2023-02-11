import React from 'react';
import './App.css';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Offers from './components/Offers/Offers';
import Slidebar from './components/Slidebar/Slidebar';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Slidebar />
      <Offers />
      <DownloadApp />
    </div>
  );
}

export default App;
