import { useState } from 'react'

const Button = (props) => {
    const [name, setName] = useState('');

    return (
        <form onSubmit={async (e) => { e.preventDefault(); props.sendMsg(name) }}>
            <input type="text" placeholder="Pokemon Name" onChange={(e) => setName(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default Button
