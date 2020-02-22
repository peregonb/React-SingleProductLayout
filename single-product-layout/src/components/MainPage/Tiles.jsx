import React from 'react';
import sample from "../../assets/img/sample.jpg"

export const Tiles = () => {
    return (
            <section className={"third-section"
            // + " reversed"
            } id="tiles">
                <div className="third-section-wrap wrap">
                    <div className="third-section-item">
                        <div className="third-section-left">
                            <div className="third-section-img"
                                style={{backgroundImage: `url(${sample})`}}
                            />
                        </div>
                        <div className="third-section-right">
                            <div className="third-section-headline">Duis <span
                                className="second-color">ve aximus</span> libero at vulputa.
                            </div>
                            <div className="third-section-text">Duis vehicula maximus libero at vulputate. Nunc vitae
                                dapibus ligula, ac malesuada diam. Pellentesque luctus purus nisl. Donec sit amet velit
                                faucibus, pellentesque enim in, fermentum enim.Nunc vitae dapibus ligula, ac malesuada
                                diam.
                                Pellentesque luctus purus nisl. Donec sit amet velit faucibus, pellentesque enim in.
                            </div>
                        </div>
                    </div>
                    <div className="third-section-item reversed">
                        <div className="third-section-left">
                            <div className="third-section-img"
                                style={{backgroundImage: `url(${sample})`}}
                            />
                        </div>
                        <div className="third-section-right">
                            <div className="third-section-headline">Duis <span
                                className="second-color">ve aximus</span> libero at vulputa.
                            </div>
                            <div className="third-section-text">Duis vehicula maximus libero at vulputate. Nunc vitae
                                dapibus ligula, ac malesuada diam. Pellentesque luctus purus nisl. Donec sit amet velit
                                faucibus, pellentesque enim in, fermentum enim.Nunc vitae dapibus ligula, ac malesuada
                                diam.
                                Pellentesque luctus purus nisl. Donec sit amet velit faucibus, pellentesque enim in.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};
