import Header from '../Header/Header';
import './AddPost.scss';
import share from '../images/share.png';
import arrow from '../images/arrow.png';
import { storage } from '../../config/firebase';
import { ref, uploadBytes } from "firebase/storage";
import { useState} from 'react'
import {v4} from 'uuid'

function AddPost(){
    const [uploadImage, setUploadImage] =  useState(null);

    const imageUpload = () => {
        if(uploadImage == null) return

        const homeImagesRef = ref(storage, `imagesHome/ ${uploadImage.name + v4()}`)
        try {
            uploadBytes(homeImagesRef, uploadImage)}
        catch (err){
            console.error(err)
        }
        }
    ;

    const handleBackClick = () => {
        window.history.back();
          };

    return (
        <>
        <Header />
        <div className='comments_back'>
            <button className='button-back 'onClick={handleBackClick}>
                <img className='comments_section-arrow'src={arrow}
                    alt='back arrow'>
                 </img>
            </button>
            <p className='back'>Back</p>
        </div>

        <section className='add_post'>
            <h6 className='add_post-addImg'>ADD YOUR IMAGE</h6>
            <input type='file' className='upload-image' 
                onChange={(e) => {setUploadImage(e.target.files[0])}}>
            </input>
            <h6 className='add_post-addDesc'>ADD DESCRIPTION</h6>
            <button className='add_post-share'onClick={imageUpload}>Share <img src={share} className='share-image'></img></button>

        </section>
        </>
    )
}

export default AddPost