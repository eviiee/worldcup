
interface ModalInfo {
    title : string
    children : React.ReactNode
    onConfirm : () => void
    onCancel : () => void
}

export default function useModal() {

    const bodyElement = document.querySelector('#body');

    const closeModal = () => {
        
    }

}