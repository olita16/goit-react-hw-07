
import React from 'react';
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/filtersSlice';



function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);
    return (
        <div>
            <label className={css.formLabel}>
                <span>Find contacts by name</span>
                <input className={css.formLabel} type="text" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
}

export default SearchBox;