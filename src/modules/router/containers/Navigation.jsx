import React from "react";
import { NavLink } from 'react-router-dom';

import { PATHS } from '../constants';

export const Navigation = () => {
    return <nav className="navigation">
        <NavLink to={PATHS.HOME}>Home</NavLink>
        <NavLink to={PATHS.MORTGAGE_CALCULATOR}>About</NavLink>
    </nav>
};