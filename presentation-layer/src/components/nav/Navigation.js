import React, { useContext } from 'react';
import './Navigation.css';
import { AppContext } from '../../utils/context';

const Navigation = () => {
  const context = useContext(AppContext);
  return (
    <section className='Navigation__container'>
      <ul className='Navigation__wrapper'>
        {context.initialState.showHome ? (
          <li
            onClick={() => context.contextDispatch({ type: 'SHOW_HOME_PAGE' })}
          >
            Home
          </li>
        ) : null}
        {context.initialState.showMode ? <li>Mode</li> : null}
        {context.initialState.showSetup ? <li>Setup</li> : null}
      </ul>
    </section>
  );
};

export default Navigation;
