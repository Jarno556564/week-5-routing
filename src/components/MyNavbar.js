import { Link } from "react-router-dom";

function MyNavbar({ logo, items, logo_name }) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    <img src={logo} className="img-fluid logo-nav" alt="logo" />
                    {logo_name}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <ul className="navbar-nav ms-auto">
                        {items.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className={`nav-link ${item.disabled ? 'disabled' : ''}`} to={item.href} disabled={item.disabled}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar;
