import React, { useEffect, useRef, useState } from 'react';

// IMPORT REACT BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

// IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from 'react-click-outside-hook';
import { useDebounce } from '../../hooks/useDebounce';
import ContentAutoComplete from '../../Components/ContentAutoComplete/ContentAutoComplete';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [autoComplete, setAutoComplete] = useState(false);
  const [parentRef, hasClickedOutside] = useClickOutside();
  const [queryMovie, setQueryMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const [clearIcon, setClearIcon] = useState(false);
  const [noFoundMovies, setNoFoundMovies] = useState(false);

  const isEmpty = !queryMovie || queryMovie.length === 0;
  const IMG_PATH = `https://image.tmdb.org/t/p/w500`;

  // HANDLE ON CHANGE
  const handleChange = (e) => {
    if (keyword === '') setClearIcon(true);
    if (e.target.value.trim() === '') {
      setNoFoundMovies(false);
      setQueryMovie([]);
      setClearIcon(false);
    }
    setKeyword(e.target.value);
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    if (hasClickedOutside) {
      collapseAutoComplete();
    }
    console.log('component useEffect its runs!');
  }, [hasClickedOutside]);

  const expandContainer = () => {
    setAutoComplete(true);
    setNoFoundMovies(false);
  };

  // COLLAPSE AUTO COMPLETE
  const collapseAutoComplete = () => {
    setAutoComplete(false);
    setKeyword('');
    setQueryMovie([]);
    setLoading(false);
    setClearIcon(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  // HANDLE CLEAR ICON
  const handleClearIcon = () => {
    setQueryMovie([]);
    setKeyword('');
    setClearIcon(false);
    setNoFoundMovies(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  // GET PREPARE API
  const getPrepareApi = (query) => {
    const getUrlMovieApi = `https://api.themoviedb.org/3/search/movie?api_key=4d234558346dfa39b575a1e7ac111995&language=en-US&query=${query}&page=1&include_adult=false`;
    return encodeURI(getUrlMovieApi);
  };

  // GET API
  const searchMovies = async () => {
    const getUrlApi = getPrepareApi(keyword);
    const response = await fetch(getUrlApi);
    if (!response.ok) {
      throw new Error(`Your Error Message : ${response.statusText}`);
    }
    const responseJson = await response.json();
    const results = await responseJson.results;
    setLoading(true);
    if (results) {
      setQueryMovie(results);
      setLoading(false);
      console.log(results);
    }
    setNoFoundMovies(true);
  };

  useDebounce(keyword, 500, searchMovies);

  return (
    <>
      <button type="button" className="iconSearch1">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </button>
      {/* SEARCH BAR */}
      <div className="searchBar d-flex justify-content-center flex-column  position-relative ms-md-5" ref={parentRef}>
        <div className="inputSearchBar">
          <input type="text" ref={inputRef} onClick={expandContainer} value={keyword} onChange={handleChange} placeholder="Cari di kitakirim" className="p-1 px-5 rounded" />
        </div>
        {/* AUTO COMPLETE */}
        {autoComplete && (
          <div className="searchResult position-absolute p-3 rounded">
            {keyword === '' && (
              <Row>
                <h4>Product Popular</h4>
                <Col xs={12} md={6}>
                  test
                </Col>
                <Col xs={12} md={6}>
                  test
                </Col>
              </Row>
            )}
            {isEmpty && noFoundMovies && (
              <Row className="text-center">
                <Col xs={12}>
                  <h4>Film Tidak Di Temukan</h4>
                </Col>
              </Row>
            )}
            {loading && <p>Data Loading....</p>}
            {!loading &&
              queryMovie.map((data) => {
                return <ContentAutoComplete key={data.id} name={data.title} images={IMG_PATH + data.backdrop_path} />;
              })}
          </div>
        )}
        <button type="button" className=" border border-0" style={{ background: 'none' }}>
          {clearIcon && <FontAwesomeIcon icon={faXmark} size="lg" className="iconClear position-absolute" onClick={handleClearIcon} />}
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="iconSearch position-absolute" />
        </button>
      </div>
    </>
  );
};

export default Search;
