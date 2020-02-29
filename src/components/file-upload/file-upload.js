import React, {Component} from 'react';
import axios from 'axios';
// import profileImg from 'res';

class FilesUpload extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({
            profileImg: e.target.files[0]
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImg', this.state.profileImg);
        axios.post("https://nfile-upload-api.herokuapp.com/api/user-profile", formData, {
        }).then(res => {
            console.log(res);
        })
    }


    render() {
        return (
            <div className="container">
                {/*<div className="row">*/}
                {/*    <form onSubmit={this.onSubmit}>*/}
                {/*        <h3>React File Upload</h3>*/}
                {/*        <div className="form-group">*/}
                {/*            <input type="file" onChange={this.onFileChange} />*/}
                {/*        </div>*/}

                {/*        <div className="form">*/}
                {/*            <button className="btn btn-primary" type="submit">Upload</button>*/}
                {/*        </div>*/}
                {/*    </form>*/}
                {/*</div>*/}



                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.profileImg.profileImg} id="preview" className="img-thumbnail img-radius" alt="profileImg"/>
                    </div>
                    <div className="col-md-6">
                        <div id="msg"/>
                        <form method="post" id="image-form" onSubmit={this.onSubmit}>

                            <input type="file" name="img[]" className="file" accept="image/*"
                                   onChange={this.onFileChange}/>

                            <div className="input-group my-3">
                                <input type="text" className="form-control" disabled placeholder="Upload File"
                                       id="file"/>
                                <div className="input-group-append">
                                    <button type="button" className="browse btn btn-primary">Browse...</button>
                                </div>
                                <div className="form">
                                    <button className="btn btn-primary" type="submit">Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilesUpload;