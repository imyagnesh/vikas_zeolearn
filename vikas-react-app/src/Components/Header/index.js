import React from 'react';
import { Link } from 'react-router-dom';
// import { LocaleConsumer } from '../../ContextApis/localeContext';

export default function index() {
  return (
    // <LocaleConsumer>
    //   {value => (
    //     <nav>
    //       <button type="button" onClick={() => value.fetchData()}>
    //         Get Data
    //       </button>
    //       <span>{value.authors.length}</span>
    //       <ul>
    //         <li>
    //           <Link to="/">{value.locale === 'en' ? 'Home En' : 'Home Es'}</Link>
    //         </li>
    //         <li>
    //           <Link to="/about/">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users/">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   )}
    // </LocaleConsumer>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
