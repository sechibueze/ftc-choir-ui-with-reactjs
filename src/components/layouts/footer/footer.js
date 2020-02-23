import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <section id="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p>Faith Tabernacle Choir Directory...</p>
                                <p className="h6">(c) All right Reserved. By ICTGroup</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;