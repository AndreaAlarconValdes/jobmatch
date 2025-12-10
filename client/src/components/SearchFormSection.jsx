import { useId, useState, useRef } from "react"
import styles from '../pages/Search.module.css'

const useSearchForm = ({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextFilter }) => {
  const timeoutId = useRef(null)
  const [searchText, setSearchText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if (event.target.name === idText) {
      return // ya lo manejamos en onChange
    }

    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    }

    onSearch(filters)
  }

  const handleTextChange = (event) => {
    const text = event.target.value
    setSearchText(text) // actualizamos el input inmediatamente

    // Debounce: Cancelar el timeout anterior
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = setTimeout(() => {
      onTextFilter(text)
    }, 500)
  }

  return {
    searchText,
    handleSubmit,
    handleTextChange
  }
}

export function SearchFormSection({ initialFilters, onTextFilter, onSearch, initialText }) {
  const idText = useId()
  const idTechnology = useId()
  const idLocation = useId()
  const idExperienceLevel = useId()

  const inputRef = useRef()

  const {
    handleSubmit,
    handleTextChange
  } = useSearchForm({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextFilter })

  const handleClearInput = (event) => {
    event.preventDefault()

    inputRef.current.value = ""
    onTextFilter("")
  }

  return (
    <form className={styles.jobsSearch} onChange={handleSubmit} id="empleos-search-form" role="search">
      <div className="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        <input
          ref={inputRef}
          name={idText} id="empleos-search-input" type="text"
          placeholder="Job title, keywords or company"
          onChange={handleTextChange}
          defaultValue={initialText}
        />
        <button onClick={handleClearInput}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </button>
      </div>

      <div className={styles.searchFilters}>
        <select name={idTechnology} id="filter-technology" defaultValue={initialFilters.technology}>
          <option value="">Tecnología</option>
          <optgroup label="Tecnologías populares">
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
          </optgroup>
          <option value="java">Java</option>
          <hr />
          <option value="csharp">C#</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
          <hr />
          <option value="ruby">Ruby</option>
          <option value="php">PHP</option>
        </select>

        <select name={idLocation} id="filter-location" defaultValue={initialFilters.location}>
          <option value="">Ubicación</option>
          <option value="remoto">Remoto</option>
          <option value="cdmx">Ciudad de México</option>
          <option value="guadalajara">Guadalajara</option>
          <option value="monterrey">Monterrey</option>
          <option value="barcelona">Barcelona</option>
        </select>

        <select name={idExperienceLevel} id="filter-experience-level" defaultValue={initialFilters.experienceLevel}>
          <option value="">Nivel de experiencia</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid-level</option>
          <option value="senior">Senior</option>
          <option value="lead">Lead</option>
        </select>
      </div>
    </form>

  )
}