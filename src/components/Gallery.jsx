import React, { useEffect, useState } from 'react';
import { images } from './images';
import AOS from 'aos';
import "aos/dist/aos.css";
import Modal from './Modal';
const Gallery = () => {
    const [modal, setModal] = useState(false);
    const [tempImage, setTempImage] = useState('');

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const getImage = (img) => {
        setTempImage(img);
        setModal(true);
    };

    return (
        <>
            {modal ? <Modal img={tempImage} setModal={setModal} modal={modal} /> : null}
            <div className="gallery">
                {images.map((item, index) => (
                    <div className="image" key={index} onClick={() => getImage(item.img)}>
                        <img data-aos="flip-up" src={item.img} alt="" style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;