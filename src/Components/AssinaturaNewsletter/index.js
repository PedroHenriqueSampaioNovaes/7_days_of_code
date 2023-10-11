import React from 'react';
import styles from './AssinaturaNewsletter.module.css';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
};

const AssinaturaNewsletter = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (types['email'].regex.test(email)) {
      setError(false);

      window.alert(
        `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`,
      );

      fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
    } else {
      setError(true);
    }
  }

  return (
    <section className={styles.newsletter}>
      <div className={styles.introducao}>
        <p className={styles.textoInicial}>Sua casa com as</p>
        <h1 className={styles.textoPrincipal}>melhores plantas</h1>
        <p className={styles.descricao}>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            className={styles.callToAction}
            type="submit"
            value="Assinar newsletter"
          />
        </form>
        {error && (
          <p style={{ color: '#ff0000', opacity: 1 }}>
            Insira um e-mail válido
          </p>
        )}
      </div>
    </section>
  );
};

export default AssinaturaNewsletter;
