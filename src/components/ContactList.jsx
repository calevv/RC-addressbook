import React from 'react';
import useAddressStore from '../stores/useAdressStore';
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
    const nav = useNavigate();
    const { filteredAddressBook, searchTerm, addressBook } = useAddressStore();

    const contactsToDisplay = searchTerm ? filteredAddressBook : addressBook;
    const hasSearchResults = contactsToDisplay.length > 0;

    return (
        <div>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {hasSearchResults ? (
                    contactsToDisplay.map((item) => (
                        <ListItem alignItems="flex-start" className="list-item" key={item.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FaceOutlinedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {item.address}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <Button
                                onClick={() => nav(`/contact/${item.id}`)}
                                variant="outlined"
                                size="large"
                                sx={{ alignSelf: 'center', backgroundColor: 'white' }}
                            >
                                상세보기
                            </Button>
                        </ListItem>
                    ))
                ) : (
                    <ListItem>
                        <ListItemText primary={searchTerm ? '검색 결과가 없습니다.' : '연락처 목록이 비어 있습니다.'} />
                    </ListItem>
                )}
            </List>
        </div>
    );
};

export default ContactList;
