import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch()

    const handleFilterChange = (event) => {
         const filterValue = event.target.value;
         dispatch(addFilter(filterValue));
    }

    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" name="filter" onChange={handleFilterChange}/>
        </>
    )
}


