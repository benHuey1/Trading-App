import { useState } from "react";
import Button from "../Buttons/Buttons";

export default function Form() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [verifPassword, setVerifPassword] = useState('');

    return (
        <>
            <label htmlFor="">
                Name: 
                <input type="text" value={name} id="" onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor="">
                Password: 
                <input type="text" value={password} id="" onChange={e => setPassword(e.target.value)} />
            </label>
            <label htmlFor="">
                Confirm your password: 
                <input type="text" value={verifPassword} id="" onChange={e => setVerifPassword(e.target.value)} />
            </label>
            <Button content="ok"/>
            {name !== '' &&
                <p>Your name is {name}.</p>
            }
            {password !== '' &&
                <p>Your password is {password}.</p>
            }
            {verifPassword !== '' &&
                <p>Your verificate Password is {verifPassword}.</p>
            }
        </>
    )
}