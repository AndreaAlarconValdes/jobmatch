import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { Link } from "../components/Link"
import snarkdown from 'snarkdown'
import styles from './Detail.module.css'
import { useAuthStore } from "../store/authStore"
import { useFavoritesStore } from "../store/favoritesStore"

function JobSection({ title, content }) {
  const html = snarkdown(content)

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {title}
      </h2>

      <div
        className={`${styles.sectionContent} prose`}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />

    </section>
  )
}

function DetailPageBreadCrumb({ job }) {
  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link
          href="/search"
          className={styles.breadcrumbButton}
        >
          Jobs
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{job.titulo}</span>
      </nav>
    </div>
  )
}

function DetailPageHeader({ job }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {job.titulo}
        </h1>
        <p className={styles.meta}>
          {job.empresa} · {job.ubicacion}
        </p>
      </header>
      <div className={styles.userBtnContainer}>
        <DetailApplyButton />
        <DetailFavoriteButton jobId={job.id} />
      </div>
    </>
  )
}

function DetailApplyButton() {
  const { isLoggedIn } = useAuthStore()

  return (
    <button disabled={!isLoggedIn} className={styles.applyButton}>
      {isLoggedIn ? "Apply now" : "Log in to apply"}
    </button>
  )
}

function DetailFavoriteButton({ jobId }) {
  const { isFavorite, toggleFavorite } = useFavoritesStore()
  const { isLoggedIn } = useAuthStore()


  return (
    <button
      onClick={() => toggleFavorite(jobId)}
      disabled={!isLoggedIn}
      className={styles.applyButton}
      aria-label={isFavorite(jobId) ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite(jobId) ? '❤️' : '🤍'}
    </button>
  )
}

export default function JobDetail() {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
      .then(response => {
        if (!response.ok) {
          navigate('/not-found')
        }

        return response.json()
      })
      .then(json => {
        setJob(json)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [jobId])

  if (loading) {
    return <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
      <div className={styles.loading}>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  }

  if (error || !job) {
    return (
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div className={styles.error}>
          <h2 className={styles.errorTitle}>
            Job offer not found
          </h2>
          <button
            onClick={() => navigate('/')}
            className={styles.errorButton}
          >
            Back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
      <DetailPageBreadCrumb job={job} />
      <DetailPageHeader job={job} />

      <JobSection title="Full job description" content={job.content.description} />
      <JobSection title="Responsibilities" content={job.content.responsibilities} />
      <JobSection title="Requirements" content={job.content.requirements} />
      <JobSection title="About the company" content={job.content.about} />
    </div>
  )
}