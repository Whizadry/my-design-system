import { useState } from 'react';

const Modal = () => {
    const [modal, setModal] = useState(false);
    const [dialog, setDialog] = useState(false)
    const [collapse, setCollapse] = useState(false)

    return (
        <div>
            <h2 className="section-title">
                Modal
            </h2>
            <div className="horizontal-separator" style={{ width: '500px' }} />
            <div className="button-container">
                <button className="success-button" onClick={() => setModal(true)} >Open modal</button>
                <div className={modal ? 'show-modal' : 'hide-modal'} >
                    Coucou
                    <button className="info-button" onClick={() => setModal(false)} >fermer</button>

                </div>
            </div>
            <div className="button-container">
                <button className="success-outline-button" onClick={() => setDialog(true)}>Open dialog</button>
                <div className={dialog ? 'show-dialog' : 'hide-dialog'} >
                    Coucou
                    <button className="info-button" onClick={() => setDialog(false)} >fermer</button>

                </div>
                <div className={(modal || dialog) ? 'cover' : ''} ></div>
            </div>
            <div className="button-container">
                <div className='shadow-card-m'>
                    <button className="header-collapse" onClick={() => setCollapse(!collapse)}>Open dialog</button>
                    <div className={collapse ? 'show-body-collapse' : 'hidden-body-collapse'} >
                        Coucou
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;

{/* <button type="button" class="collapsible">Open Collapsible</button>
<div class="content">
  <p>Lorem ipsum...</p>
</div> */}