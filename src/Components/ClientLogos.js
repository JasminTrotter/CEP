import React from 'react';

export default function ClientLogos(props) {

            const logosHTML = props.logosArray.map((logo) => {
                return <div className={logo.background}><img src={logo.name} alt="logo" className="logo" /></div>
            });

            return (
            <div className="logo-container">
                {logosHTML}
            </div>   
        );

}