import React from 'react';
import Home from '../pages/Home';
import { Outlet } from 'react-router';
import Navigation from '../pages/Navigation';
import Footer from '../pages/Footer';
import '../../App.css';

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root