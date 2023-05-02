import React, { useState } from 'react';
import Link from 'next/link'


const Picture = () => {
    const [claseCSS, setClaseCSS] = useState('Unfocusing-picture');

    const handleClick = () => {
        setClaseCSS(claseCSS === 'Focusing-picture' ? 'Unfocusing-picture' : 'Focusing-picture');
    };

    return (
        <li onClick={handleClick}
        className={"photos-container--card " + claseCSS}>
        </li>
    )
}



export default Picture