import React from 'react';
import ContactForm from '../components/ContactForm';
import { Button, Container } from '@mui/material';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import useAddressStore from '../stores/useAdressStore';
const New = () => {
    const nav = useNavigate();
    const { resetSearch } = useAddressStore();
    return (
        <div className="box">
            <Header
                title="저장하기"
                leftChild={
                    <Button variant="outlined" onClick={(() => resetSearch(), () => nav(-1))}>
                        뒤로 가기
                    </Button>
                }
            />
            <Container sx={{ flexGrow: 1, overflowY: 'auto', width: '100%' }}>
                <ContactForm />
            </Container>
            <Footer />
        </div>
    );
};

export default New;
