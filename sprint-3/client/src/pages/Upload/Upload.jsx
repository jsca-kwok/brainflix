import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Header/Header';
import './upload.scss';
import Axios from 'axios';

const url = 'http://localhost:8080/videos';

class Upload extends React.Component {
    state = {
        posted: false
    }

    postNewVideo = (e) => {
        e.preventDefault(); 
        this.setState({ posted: true });
        const id = uuidv4();
        Axios
        .post(url,
        {
            id: id,
            title: e.target.title.value,
            channel: "Mohan Muruge",
            image: process.env.PUBLIC_URL + '/assets/images/upload-video-preview.jpg',
            description: e.target.description.value,
            views: 0,
            likes: 0,
            liked: false,
            duration: "2:37",
            video: 'https://project-2-api.herokuapp.com/stream',
            timestamp: Date.now(),
            comments: []
        })
        .catch(err => {
            console.error(err);
        })
        e.target.reset();
    }

    render() {
        return (
            <div>
                <Header />
                <main className="upload">
                    <h2 className="upload__heading">Upload Video</h2>
                    <div className="upload__detail-container">
                        <div className="upload__thumbnail-container">
                            <p className="upload__label">VIDEO THUMBNAIL</p>
                            <img className="upload__preview" src={process.env.PUBLIC_URL + '/assets/images/upload-video-preview.jpg'} alt="upload thumbnail preview" />
                        </div>
                        <form className="upload__form" onSubmit={(e) => {this.postNewVideo(e)}} >
                            <label htmlFor="title" className="upload__label">TITLE YOUR VIDEO</label>
                            <input required type="text" name="title" className="upload__title-input" placeholder="Add a title to your video"></input>
                            <label htmlFor="description" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea required name="description" className="upload__description-input" placeholder="Add a description of your video"></textarea>
                            <div className="upload__buttons-container">
                                <button type="submit" className="upload__button">PUBLISH</button>
                                <button type="button" className="upload__cancel">CANCEL</button>
                            </div>
                        </form>
                        {
                            this.state.posted ? <div className="upload__success">Posted successfully.</div> : null
                        }
                    </div>
                </main>
            </div>
        )
    }
}

export default Upload;