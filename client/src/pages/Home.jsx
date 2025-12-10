import { Link } from "../components/Link"
import { useRouter } from "../hooks/useRouter"
import styles from "./Home.module.css"

export default function HomePage() {
  const { navigateTo } = useRouter()

  const handleSearch = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const searchTerm = formData.get('search')

    const url = searchTerm
      ? `/search?text=${encodeURIComponent(searchTerm)}`
      : '/search'

    navigateTo(url)
  }

  return (
    <main>
      <section className={styles.homeHeader}>
        <form role="search" onSubmit={handleSearch} className="search-bar">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
          <input
            name="search"
            required
            type="text"
            placeholder="Job title, keywords or company"
          />
          <button type="submit">Find jobs</button>
        </form>
        <h1>
          Find a <span className="circle">job</span> that suits your
          <span className="highlight">interest and skills</span>
        </h1>

        <p>Discover thousands of opportunities from top companies.</p>
        <Link
          className={styles.homeLink}
          to="/search">See All Jobs</Link>

        <img src="./mainbg.png" alt="" />
      </section>

      <section className={styles.section}>
        <header>
          <h2>¿Why JobMatch?</h2>
          <p>DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los mejores
            talentos con las empresas más innovadoras.</p>
        </header>

        <div>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
            <h3>Grow your career at your own pace</h3>
            <p>Discover opportunities for learning, growth, and career mobility to reach your goals and advance in your professional journey.</p>
          </article>

          <article>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
            <h3>Connect with top companies</h3>
            <p>Get direct access to renowned companies and innovative startups, building connections that bring you closer to your next big career move.</p>
          </article>

          <article>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pig-money"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 11v.01" /><path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" /><path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z" /></svg>
            <h3>Earn the salary you deserve</h3>
            <p>Filter and compare offers to ensure your talent is recognized and rewarded with the salary you deserve.</p>
          </article>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
            <h3>Find a job anywhere in the world</h3>
            <p>Explore thousands of job opportunities across different countries and discover the role that best matches your skills and preferences.</p>
          </article>
        </div>

      </section>
    </main>
  )
}