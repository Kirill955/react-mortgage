import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navigation, RoutesContainer } from './containers'

function Router() {
    return (
        <BrowserRouter>
            <Navigation />
            <RoutesContainer />
        </BrowserRouter>
    )
}

export default Router
