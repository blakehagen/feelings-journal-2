import React from 'react';
import ReactDOM from 'react-dom';

import styles from './main.scss';

ReactDOM.render(
  <div className={styles.container}>
    Hello World! Does it work? I am awesome!!!!!
    {console.log('hello there!')}
  </div>, document.getElementById('app')
);