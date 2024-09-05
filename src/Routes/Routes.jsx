import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Detalhes from '../pages/Detalhes/Detalhes'
import PaginaInicial from '../pages/PaginaInicial/PaginaInicial'
import Sobre from '../pages/Sobre/Sobre'
import Main from '../components/Main/Main'
import TodoList from '../pages/TodoList/TodoList'

import '../App.css'

function AppRoutes() {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="content">
                    <Nav />
                    <Main>
                        <Routes>
                            <Route path="/" element={<PaginaInicial />} />
                            <Route path="/Sobre" element={<Sobre />} />
                            <Route path="/Detalhes" element={<Detalhes />} />
                            <Route path="/TodoList" element={<TodoList />} />
                        </Routes>
                    </Main>
                </div>

                <Footer />
            </BrowserRouter>

       

        </div>
         
    )
}

export default AppRoutes;