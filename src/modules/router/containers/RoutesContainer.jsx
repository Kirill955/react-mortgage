import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import { PATHS } from '../constants';

import Home from '../../home/Home';
import MortgageCalculator from '../../mortgage-calculator/MortgageCalculator';

export const RoutesContainer = () => {
    return (
        <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.MORTGAGE_CALCULATOR} element={<MortgageCalculator />} />
        </Routes>
    );
}