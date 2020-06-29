import React from 'react';
import Header from '../../components/Header/Header';
import './upload.scss';
import Axios from 'axios';

const url = 'http://localhost:8080/videos';

const Upload = () => {

    const postNewVideo = (e) => {
        e.preventDefault();
        console.log('click');
        Axios
        .post(`${url}`,
        {
            id: '',
            title: e.target.title.value,
            channel: "Mohan Muruge",
            image: process.env.PUBLIC_URL + '/assets/images/upload-video-preview.jpg',
        })
        .then(res => {
            console.log(res);
            e.target.reset();
        })
    }

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
                    <form className="upload__form" onSubmit={(e) => {postNewVideo(e)}} >
                        <label htmlFor="title" className="upload__label">TITLE YOUR VIDEO</label>
                        <input type="text" name="title" className="upload__title-input" placeholder="Add a title to your video"></input>
                        <label htmlFor="description" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                        <textarea name="description" className="upload__description-input" placeholder="Add a description of your video"></textarea>
                        <div className="upload__buttons-container">
                            <button type="submit" className="upload__button">PUBLISH</button>
                            <button className="upload__cancel">CANCEL</button>
                        </div>
                    </form>
                </div>
                
            </main>
        </div>
    )
}

export default Upload;