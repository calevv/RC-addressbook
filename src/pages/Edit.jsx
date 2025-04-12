import React, { useEffect, useState } from 'react';
import useAddressStore from '../stores/useAdressStore';
import { Fab, Box, Button, Container, TextField } from '@mui/material';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const Edit = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const { addressBook, updateAddress } = useAddressStore();
    const [contact, setContact] = useState(null);
    const [input, setInput] = useState({ name: '', address: '', memo: '' });

    useEffect(() => {
        const foundContact = addressBook.find((item) => String(item.id) === String(id));
        setContact(foundContact);
        if (foundContact) {
            setInput({
                name: foundContact.name || '',
                address: foundContact.address || '',
                memo: foundContact.memo || '',
            });
        }
    }, [id, addressBook]);

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleUpdateContact = () => {
        if (!input.name.trim() || !input.address.trim()) {
            alert('이름과 주소를 입력해주세요');
            return;
        }
        if (window.confirm('연락처를 정말 수정할까요?')) {
            updateAddress({ id: parseInt(id), ...input });
            nav(`/contact/${id}`, { replace: true });
        }
    };

    if (!contact) {
        return (
            <div className="box">
                <Header title="수정하기" leftChild={<Button onClick={() => nav(-1)}>뒤로 가기</Button>} />
                <Container sx={{ flexGrow: 1, overflowY: 'auto', width: '100%', padding: '20px' }}>
                    <Box>해당 연락처를 찾을 수 없습니다.</Box>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="box">
            <Header
                title="수정하기"
                leftChild={
                    <Button variant="outlined" onClick={() => nav(-1)}>
                        뒤로 가기
                    </Button>
                }
                rightChild={
                    <Button variant="outlined" onClick={() => nav('/')}>
                        홈으로
                    </Button>
                }
            />
            <Container sx={{ flexGrow: 1, overflowY: 'auto', width: '100%', padding: '20px' }}>
                <Box display="flex" flexDirection="column" gap={3}>
                    <TextField
                        id="formName"
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={input.name}
                        onChange={onChangeInput}
                    />
                    <TextField
                        id="formAddress"
                        name="address"
                        label="Address"
                        variant="outlined"
                        value={input.address}
                        onChange={onChangeInput}
                    />
                    <TextField
                        sx={{ flexGrow: 1 }}
                        id="formMemo"
                        name="memo"
                        label="Memo"
                        variant="outlined"
                        value={input.memo}
                        onChange={onChangeInput}
                        multiline
                        rows={4}
                    />
                </Box>
            </Container>
            <Footer
                middleChild={
                    <Fab color="primary" aria-label="update" onClick={handleUpdateContact}>
                        <BorderColorIcon />
                    </Fab>
                }
            />
        </div>
    );
};

export default Edit;
