import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as movieActions from "../../actions/movieActions";
import styles from "./Searchbar.module.scss";

const Searchbar = (props) => {
    const router = useRouter()
    const query = router.query;
    const [searchQuery, setSearchQuery] = useState('');

    const { genreFilter, sortBy } = props;

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleOnKeyDown = (event) => {
        const value = event.target.value;
        if (value.trim().length > 0 && event.key == 'Enter') {
            search();
        }
    };

    const search = () => {
        if (router.pathname !== 'search') {
            router.push(`/search?search=${searchQuery}`);
        }
        props.searchMovies(searchQuery, sortBy, genreFilter);
    };

    useEffect(() => {
        if (router && router.query) {
            const searchKeyword = query.search;
            if (searchKeyword) {
                setSearchQuery(searchKeyword);
                props.searchMovies(searchKeyword, sortBy, genreFilter);
            }
        }
    }, [router]);

    return (
        <div className={styles.searchbar}>
            <input type="text"
                defaultValue={searchQuery}
                onKeyDown={handleOnKeyDown}
                onChange={handleOnChange}
                className={styles['search-input']}
                placeholder="What do you want to watch?" />
            <button className={styles['btn-search']} onClick={search} disabled={!searchQuery}>SEARCH</button>
        </div>
    );
};

Searchbar.propTypes = {
    genreFilter: PropTypes.string,
    sortBy: PropTypes.string,
    search: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        genreFilter: state.genreFilter,
        sortBy: state.sortBy,
        search: state.search
    };
}

const mapDispatcherToProps = (dispatch) => {
    return {
        searchMovies: (search, sortBy, genreFilter) => dispatch(movieActions.getMovies(search, sortBy, genreFilter))
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Searchbar);