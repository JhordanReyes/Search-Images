import React from 'react'
import "./style.css"
import imgUsur from "../../assets/usur.png"

const Modal = ({ setModal, modal, image }) => {

    const handleModal = () => {
        setModal(!modal);
        const divModal = document.getElementById("modal");
        modal ? divModal.style.display = "none" : divModal.style.display = "flex";
    }
    const downloadImage = async() => {
        const imagen = await fetch(image.url);
        const imgBlob = await imagen.blob();
        const imgURL = URL.createObjectURL(imgBlob);
        const link = document.createElement("a");
        link.href = imgURL;
        link.setAttribute("download", `${image.author}.png`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }        
    const handleDescargar = () => {
        const descargar = {"ruta":image.url, "nombre":image.author}
        javascript:downloadImage(`${JSON.stringify(descargar)}`);
    }
    return (
        <div id='modal'>
            <div className='modal-container'>
                <i onClick={handleModal} className='bx bx-x close'></i>
                <div className='perfil'>
                    <img src={image.authorImage === "" ? imgUsur : image.authorImage} alt={image.author} />
                    <p>{image.author}</p>
                </div>
                <div className='content'>
                    <img className='image-select' src={image.url} alt="" />
                    <div className='content__info'>
                        <div className='content__info-data'>
                            <p><i className='bx bx-message-rounded-dots'></i>{image.comments}</p>
                            <p><i className='bx bx-heart'></i>{image.likes}</p>
                        </div>
                        <p className='content__info-tags'>tags: {image.tags}</p>
                    </div>
                </div>
                <button
                    className='btn-download'
                    onClick={handleDescargar}
                ><i className='bx bx-import'></i> Upload Image</button>
            </div>
        </div>
    )
}

export default Modal