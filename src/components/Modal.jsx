import React, { useState } from 'react';

const Modal = ({ img, modal, setModal }) => {
    const [like, setLike] = useState(false);
    const [commnets, setComments] = useState([])
    const [value, setValue] = useState('')

    const postComment = () => {
        setComments([...commnets, value])
        setValue('')
    }
    return (
        <div className="modal">
            <img src={img} alt="" />
            <div className="action">
                <div className="coment">
                    <div className="coment_window">
                        {commnets.map(item => (
                            <span className="coment_body">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="coment_input">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <img
                            src="/images/send.png"
                            alt="" width="35"
                            onClick={() => postComment()}
                        />
                    </div>
                </div>
                <div
                    className="other"
                >
                    {!like ?
                        <img className="like-button" src="/images/like.png" alt="" width="35" onClick={() => setLike(!like)} />
                        :
                        <img className="like-button" src="/images/click_like.png" alt="" width="35" onClick={() => setLike(!like)} />}
                    <img src="/images/close.png" alt="" width="35" onClick={() => setModal(!modal)} />
                </div>
            </div>
        </div>
    );
};

export default Modal;