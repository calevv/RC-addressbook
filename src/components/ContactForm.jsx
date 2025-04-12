import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAddressStore from '../stores/useAdressStore';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [input, setInput] = useState({ name: '', address: '', memo: '' });
    const { addAddress } = useAddressStore();
    const nav = useNavigate();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleAddContact = () => {
        if (!input.name.trim() || !input.address.trim()) {
            alert('이름과 주소를 입력해주세요');
            return;
        }
        addAddress(input);
        nav('/', { replace: true });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px 0' }}>
            <Box display="flex" flexDirection="column" gap={3}>
                <TextField
                    id="formName"
                    name="name" // input 객체의 키 값으로 사용
                    label="Name"
                    variant="outlined"
                    value={input.name}
                    onChange={onChangeInput}
                />
                <TextField
                    id="formAddress"
                    name="address" // input 객체의 키 값으로 사용
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
            <Button variant="contained" size="medium" onClick={handleAddContact}>
                Add
            </Button>
        </div>
    );
};

export default ContactForm;
