import React from 'react';

import { Header } from './Header';
import styles from './Page.module.scss';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className={styles.section}>
        <h2>Pages in Storybook</h2>
      </section>
    </article>
  );
};
