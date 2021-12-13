import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './Layout.module.less';
import Header from 'components/Header';
import layoutSchema from './schema/layoutSchema';

const Layout = (): JSX.Element => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.content}>
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            {layoutSchema.map((item) => (
              <Route {...item} key={Math.floor(Math.random() * 3)} />
            ))}
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
