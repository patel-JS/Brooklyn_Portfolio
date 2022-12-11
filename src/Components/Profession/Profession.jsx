import React from 'react'
import { profession } from '../../Constants'

import './Profession.scss'


const Profession = () => {
    return (

        <>
            <section className="app__profession" id='Services'  >
                <div className="app__profession-heading">
                    <h1>What I do?</h1>
                    <p className="large-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                    <a href="#" className="btn-primary">Say Hello</a>
                </div>

                <div className="app__profession-data">

                    <div className="profession-card">
                        <h4>{profession[0].professions[0].ux.title}</h4>
                        <p className="regular-400">{profession[0].professions[0].ux.text}</p>
                    </div>

                    <div className="profession-card">
                        <h4>{profession[0].professions[0].ui.title}</h4>
                        <p className="regular-400">{profession[0].professions[0].ui.text}</p>
                    </div>

                    <div className="profession-card">
                        <h4>{profession[0].professions[0].dev.title}</h4>
                        <p className="regular-400">{profession[0].professions[0].dev.text}</p>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Profession