import styles from './ProfilePage.module.css'

export default function Profile() {

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div>
              <h1>Usuario Demo</h1>
              <h4>Diseñador UX/UI en Tech Solutions Inc.</h4>
              <p>usuario@ejemplo.com</p>
            </div>
          </div>
          <button className={styles.editButton}>
            Edit Profile
          </button>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Personal Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Full name</span>
              <span className={styles.infoValue}>Usuario Demo</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email address</span>
              <span className={styles.infoValue}>usuario@ejemplo.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone number</span>
              <span className={styles.infoValue}>+34 123 456 789</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Madrid, España</span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceTitle}>Desarrollador Frontend</h3>
            <p className={styles.experienceCompany}>Empresa XYZ • 2021 - Presente</p>
            <p className={styles.experienceDescription}>
              Desarrollo de aplicaciones web con React, TypeScript y Next.js
            </p>
          </div>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceTitle}>Desarrollador Junior</h3>
            <p className={styles.experienceCompany}>Startup ABC • 2019 - 2021</p>
            <p className={styles.experienceDescription}>
              Mantenimiento y desarrollo de features en aplicaciones legacy
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skills}>
            <span className={styles.skill}>React</span>
            <span className={styles.skill}>TypeScript</span>
            <span className={styles.skill}>Node.js</span>
            <span className={styles.skill}>CSS</span>
            <span className={styles.skill}>Git</span>
            <span className={styles.skill}>Next.js</span>
            <span className={styles.skill}>REST APIs</span>
            <span className={styles.skill}>SQL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
