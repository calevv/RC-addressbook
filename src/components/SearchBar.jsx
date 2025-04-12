import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import './SearchBar.css';
import useAddressStore from '../stores/useAdressStore';
const SearchBar = () => {
    const { updateFilteredAddressBook, searchItem, searchTerm } = useAddressStore();

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        searchItem(searchTerm);
        updateFilteredAddressBook(searchTerm);
    };

    const handleClearSearch = () => {
        searchItem('');
        updateFilteredAddressBook('');
    };

    return (
        <Box className="search-bar">
            <TextField
                id="outlined-basic"
                value={searchTerm}
                onChange={handleSearchChange}
                label="search"
                variant="outlined"
                sx={{ flexGrow: 1 }}
            />
            {searchTerm !== '' && (
                <Button variant="outlined" onClick={handleClearSearch}>
                    초기화
                </Button>
            )}
        </Box>
    );
};

export default SearchBar;
