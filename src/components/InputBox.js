import React from 'react';

export default function InputBox({onChange, value}) {
    const handleOnChange = event=>onChange(event);
    return (
        <div className="player-input-box">
            <input type="text" placeholder="Search..." value={value} onChange={handleOnChange} />
        </div>
    )
}