export default function Info() {
    return (
        <div className="info-container">
            <ul>
                <li id="ip">
                    <p>IP ADDRESS</p>
                    <strong>192.212.174.101</strong>
                </li>
                <li id="location">
                    <p>LOCATION</p>
                    <strong>Brooklyn, NY 10001</strong>
                </li>
                <li id="timezone">
                    <p>TIMEZONE</p>
                    <strong>UTC -05:00</strong>
                </li>
                <li id="isp">
                    <p>ISP</p>
                    <strong>SpaceX Starlink</strong>
                </li>
            </ul>
        </div>
    );
}