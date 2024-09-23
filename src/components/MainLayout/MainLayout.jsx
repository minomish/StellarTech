import { Header } from "../Header/Header";
import { Footer} from "../Footer/Footer";
import ModalForm from "../ModalForm/ModalForm";
import {useState} from "react";
import { Outlet } from "react-router-dom";
import '../../styles/App.css';

const MainLayout = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div className="App">
            <Header 
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    openModal={()=>setIsOpenModal(true)}
                />
            <div className="wrapper">
            <Outlet/> 
            </div>
            <Footer />
                <ModalForm
                    isOpenModal={isOpenModal}
                    onClose={()=>setIsOpenModal(false)}
                />
        </div>
        
    )
}

export default MainLayout


