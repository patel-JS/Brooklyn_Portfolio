import React from 'react'

import './Works.scss'


const Works = () => {
    return (
        <>
            <section className='app__works'>
                <div className="app__works-text">
                    <h1>Work Process</h1>
                    <p className='large-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                    </p>
                </div>
                <div className="app__works-data">
                    <div className="works-data card1">
                        <i class="fa-solid fa-book fa-3x"></i>
                        <h5>1. Research</h5>
                        <p className="regular-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </div>
                    <div className="works-data card2">
                        <i class="fa-solid fa-chart-simple  fa-3x"></i>
                        <h5>2. Analyze</h5>
                        <p className="regular-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </div>
                    <div className="works-data card3">
                        <i class="fa-solid fa-paintbrush fa-3x"></i>
                        <h5>3. Design</h5>
                        <p className="regular-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </div>
                    <div className="works-data card4">
                        <i class="fa-solid fa-rocket fa-3x"></i>
                        <h5>4. Launch</h5>
                        <p className="regular-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Works