import React, { useState } from 'react';

import { Button } from './Button';
import styles from './Healthcheck.module.scss';

const HEALTHCHECK_URL = process.env.HEALTHCHECK_URL || '';

export const Healthcheck = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<string>('');
  const sendHealthcheck = async () => {
    setShowStatus('');
    setLoading(true);
    const status = await fetch(HEALTHCHECK_URL);
    setTimeout(() => {
      setLoading(false);
    }, 300);

    if (status.ok) {
      setShowStatus('OK!');
    } else {
      setShowStatus('not OK!');
    }

    setTimeout(() => {
      setShowStatus('');
    }, 3000);
  };

  return (
    <section className={styles.section}>
      <Button
        primary
        size="large"
        onClick={sendHealthcheck}
        label="Healthcheck"
        loading={loading}
      />
      {showStatus}
    </section>
  );
};
