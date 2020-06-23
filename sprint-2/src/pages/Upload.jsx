import React from 'react';
import Header from '../components/header/Header';
import './upload.scss';

const Upload = () => {
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
                    <form className="upload__form">
                        <label htmlFor="title" className="upload__label">TITLE YOUR VIDEO</label>
                        <input type="text" name="title" className="upload__title-input" placeholder="Add a title to your video"></input>
                        <label htmlFor="description" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                        <textarea name="description" className="upload__description-input" placeholder="Add a description of your video"></textarea>
                    </form>
                </div>
                <div className="upload__buttons-container">
                    <button className="upload__button">PUBLISH</button>
                    <button className="upload__cancel">CANCEL</button>
                </div>
                
            </main>
        </div>
    )
}

export default Upload;