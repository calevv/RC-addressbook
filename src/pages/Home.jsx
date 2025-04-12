import React from 'react';
import ContactList from '../components/ContactList';
import { Box, Container } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const nav = useNavigate();

    return (
        <Box className="box">
            <Header title="주소록" />
            <Container
                sx={{ flexGrow: 1, overflowY: 'auto', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}
            >
                <SearchBar />
                <ContactList />
            </Container>
            <Footer
                middleChild={
                    <Fab color="primary" aria-label="add" onClick={() => nav('/new')}>
                        <AddIcon />
                    </Fab>
                }
            />
        </Box>
    );
};

export default Home;
