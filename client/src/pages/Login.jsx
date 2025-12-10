import { useId } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../store/authStore'
import styles from './Auth.module.css'

export default function Login() {
  const { login } = useAuthStore()
  const navigate = useNavigate()
  const passwordId = useId()
  const emailId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const email = formData.get(emailId)
    const password = formData.get(passwordId)

    if (email && password) {
      login()
      navigate('/search')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>
          Log in to your account to apply for job offers
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor={emailId} className={styles.label}>
              Email address
            </label>
            <input
              id={emailId}
              type="email"
              name={emailId}
              className={styles.input}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor={passwordId} className={styles.label}>
              Password
            </label>
            <input
              id={passwordId}
              name={passwordId}
              type="password"
              className={styles.input}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Continue
          </button>
        </form>

        <p className={styles.footer}>
          Don't you have an account?{' '}
          <a href="/register" className={styles.link}>
            Create an account here
          </a>
        </p>
      </div>
    </div>
  )
}