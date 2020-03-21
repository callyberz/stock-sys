import React from 'react';
import General from './General';
import Font from './Font';

import Restaurant from './pages/Restaurant';
import Products from './pages/Products';
import About from './pages/About';

function GlobalStyles() {
  return (
    <React.Fragment>
      <Font />
      <General />
      <Restaurant />
      <Products />
      <About />
    </React.Fragment>
  );
}

export default GlobalStyles;
