import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../SearchResults'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_API_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => {
  const [ value, setValue ] = useState('')
  const [query, setQuery] = useState(false)

  const handleChange = (event) => {
    if(event.target.textLength > 0) {
      setQuery(true)
    } else {
      setQuery(false)
    }
  }

  // const handleBlur = (event) => {
  //   setQuery(false)
  // }



  return(
    <InstantSearch
      searchClient={searchClient}
      indexName={algolia.indexName}
    >
      <SearchForm onChange={e => handleChange(e)} />
      {query &&
      <SearchResults index={algolia.indexName} />
      }
    </InstantSearch>
  )
}

export default Search
