import React from "react";
import ReactDOM from "react-dom";
import App from './App.js'
import FriendsList from './FriendsList.js'

import "./styles.css"

document.addEventListener( "DOMContentLoaded", () => {
    const reactNode = document.getElementById( "react-node" );

    if ( reactNode ) {
        ReactDOM.render(
          <div>
          <App />
          <FriendsList />
          </div>
            , reactNode )
    }
} );
