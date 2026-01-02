import React, { useState } from 'react';

export default function AuthPanel({ onSignIn, status, loading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignIn(email.trim(), password);
  };

  return (
    <section className="card auth">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />
        <label>Password</label>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      {status ? <div className="auth-status">{status}</div> : null}
    </section>
  );
}
