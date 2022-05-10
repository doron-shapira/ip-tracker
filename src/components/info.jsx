export default function Info({ info }) {
    return (
        <div className="info-container">
            <ul>
                <li id="ip">
                    <p>IP ADDRESS</p>
                    <strong>{info.ip}</strong>
                </li>
                <li id="location">
                    <p>LOCATION</p>
                    <strong>{info.location}</strong>
                </li>
                <li id="timezone">
                    <p>TIMEZONE</p>
                    <strong>{info.timezone}</strong>
                </li>
                <li id="isp">
                    <p>ISP</p>
                    <strong>{info.isp}</strong>
                </li>
            </ul>
        </div>
    );
}