import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important piece of information. Please read it very carefully.</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open modal</Button>
            {showModal && modal}
        </div>

    )
}

export default ModalPage