import arrow from "../assets/icon-arrow.svg";
import { useRef } from 'react';

export default function HeaderAndInput({ handleSearch }) {
    const input = useRef(null);

    return (
        <>
            <h1>IP Address Tracker</h1>
            <div className="input-container">
                <input
                    ref={input}
                    type="text"
                    placeholder="IP or Domain"
                    onKeyDown={e => e.key === 'Enter' && handleSearch(e.target.value)}
                />
                <button onClick={() => handleSearch(input.current.value)}>
                    <img src={arrow} alt="search-arrow" />
                </button>
            </div>
        </>
    );
}