import arrow from "../assets/icon-arrow.svg";

export default function HeaderAndInput() {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <div className="input-container">
                <input type="text" placeholder="IP or Domain" />
                <button>
                    <img src={arrow} alt="search-arrow" />
                </button>
            </div>
        </>
    );
}