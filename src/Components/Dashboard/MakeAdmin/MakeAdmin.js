import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://shrouded-temple-49103.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2 style={{textAlign:'center', color:'black', marginTop: '10px', marginBottom: '5px'}}>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit} style={{textAlign:'center'}}>
                <TextField
                    sx={{ width: '100%', m:'3' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <br/>
                    <br/>
                    <br/>
                <Button type="submit" variant="contained" sx={{backgroundColor:'black'}}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;