import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Appdetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();

    const app = apps.find(a => a.id === Number(id))

    if(!app){
        return <p>App not Found</p>
    }
    return (
        <div>
            <h1>This page is for App details</h1>
        </div>
    );
};

export default Appdetails;