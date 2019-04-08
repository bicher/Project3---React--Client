import React, { Component } from 'react';



class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="credits ml-auto">
                    <span className="copyright">
                        &copy; {new Date().getFullYear()}{" "}
                        <a href="/"> Made by Israel Bicher.</a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
