import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
} from "react-instantsearch-dom"

import './Style.css'

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} resultado{hitCount !== 1 ? `s` : ``} encontado{hitCount !== 1 ? `s` : ``}
    </div>
  ) : `Nenhum resultado encontado`
})

const PageHit = ({ hit }) => {
  return (
  <>
    <h4><Link to={hit.fields.slug}>
      <Highlight attribute="title" hit={hit} tagName="mark" /></Link>
    </h4>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </>
)}

const SearchResults = ({ index }) => (
  <div className="result-box">
    <Index indexName={index}>
      <HitCount />
      <Hits className="Hits" hitComponent={PageHit} />
    </Index>
  </div>
)

export default SearchResults
