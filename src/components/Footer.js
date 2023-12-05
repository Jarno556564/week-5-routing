

import { Link } from "react-router-dom";

function Footer({ logo, logo_name, list_name, items, textbox_title, textbox_content }) {
    return (
        <div className="bg-dark">
            <div className="container text-light">
                <div className="row">
                    <div className="col mt-3 d-flex">
                        <img src={logo} className="img footer-logo" alt="logo"></img>
                        <p className="fs-3">{logo_name}</p>
                    </div>
                    <div className="col mt-3">
                        <ul className="footer-nav">
                            <h4 className="fw-bold">{list_name}</h4>
                            {items.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className={`nav-link ${item.disabled ? 'disabled' : ''}`} to={item.href} disabled={item.disabled}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col mt-3">
                        <h3>{textbox_title}</h3>
                        <p>{textbox_content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;