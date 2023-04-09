import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Game from './pages/game'
import Home from './pages/home'
import Chat from './pages/chat'
import Profil from './pages/profil'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/chat" element={<Chat />} />
			<Route path="/profil" element={<Profil /> } />
            <Route path="/*" element={
                <div>
                    404
                </div>
            } />
        </Routes>
    )
}

export default Router
