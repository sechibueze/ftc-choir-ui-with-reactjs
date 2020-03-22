import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class UploadImage extends Component {
  state = {
    id: '',
    selectedFile: null
  }

  componentDidMount() {
    console.log('Upload::compdidmount', this.props)
    console.log('props in profile image', this.props.match.params.id)
    this.setState({
      id: this.props.match.params.id
    })
  }
  handleChange = e => {
    console.log('file changed', e.target.files[0])

    this.setState({ selectedFile: e.target.files[0] })
  }
  handleUpload = e => {
    e.preventDefault();
    const data = new FormData()
    data.append('profileImg', this.state.selectedFile)
    data.append('id', this.state.id)
    // const url = 'http://localhost:8000/profileimage';
    console.log('file upload state', this.state)
    console.log('file upload data', data)
    const url = `https://ftc2020-api.herokuapp.com/profileimage`;
    axios.post(url, data)
      .then(res => {
        console.log('Upload::response, this.props', res.data)
        if (res.data.status) {
          this.props.history.push('/dashboard')
        } else {
          console.log('Failsed to upload')
        }
      })


    // fetch(url, {
    //   method: 'POST',
    //   body: data
    //   // headers: {
    //   //   "Content-Type": "application/json"
    //   // }
    // }).then(r => r.json())
    //   .then(res => console.log('upload result', res))
    // axios.post(url, data, { // receive two parameter endpoint url ,form data 
    // })
    //   .then(res => { // then print response status
    //     console.log(res)
    //   })
  }
  render() {
    console.log('Upload::compdidmount', this.props)
    return (
      <form onSubmit={this.handleUpload} method="post" encType="multipart/form-data">
        <input type='file' onChange={this.handleChange} name="profileImg" />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user.user
  }
}
export default connect(mapStateToProps)(UploadImage);
