import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Fab, TextField, Typography } from '@mui/material';
import useAddressStore from '../stores/useAdressStore';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
const Contact = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const { addressBook, deleteContact, resetSearch } = useAddressStore();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const foundContact = addressBook.find((item) => String(item.id) === String(id));
        setContact(foundContact);
    }, [id, addressBook]);
    const deleteButton = () => {
        if (window.confirm('연락처를 정말 삭제할까요?')) {
            deleteContact(id);
            nav('/', { replace: true });
        }
    };
    return (
        <div className="box">
            <Header
                title="상세보기"
                leftChild={
                    <Button variant="outlined" onClick={(() => resetSearch(), () => nav('/'))}>
                        뒤로 가기
                    </Button>
                }
                rightChild={
                    <Button variant="outlined" onClick={() => nav(`/edit/${id}`)}>
                        수정하기
                    </Button>
                }
            />
            <Container sx={{ flexGrow: 1, overflowY: 'auto', width: '100%' }}>
                <Box sx={{ padding: '20px 0' }} display="flex" flexDirection="column" gap={3}>
                    {contact ? (
                        <>
                            <TextField
                                id="outlined-read-only-name"
                                label="이름"
                                value={contact.name || ''}
                                slotProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="outlined-read-only-address"
                                label="주소"
                                value={contact.address || ''}
                                slotProps={{
                                    readOnly: true,
                                }}
                                multiline
                            />
                            <TextField
                                id="outlined-read-only-memo"
                                label="메모"
                                value={contact.memo || ''}
                                slotProps={{
                                    readOnly: true,
                                }}
                                multiline
                                rows={4}
                            />
                        </>
                    ) : (
                        <Typography color="error">해당 연락처를 찾을 수 없습니다.</Typography>
                    )}
                </Box>
            </Container>
            <Footer
                middleChild={
                    <Fab color="primary" aria-label="delete" onClick={deleteButton}>
                        <DeleteSharpIcon />
                    </Fab>
                }
            />
        </div>
    );
};

export default Contact;
