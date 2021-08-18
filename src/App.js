import React from 'react';
import ItemBoxListView from "./components/productList/ItemBoxListView";
import './app.scss'

function App() {
  return (
    <div className="App">
        <ItemBoxListView/>
        <ItemBoxListView/>
        <ItemBoxListView/>
        <ItemBoxListView/>
    </div>
  );
}

export default App;
