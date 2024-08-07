import React from 'react'
import style from "./pacmanHeading.module.css"

export default function PacmanHeading() {
    return (
        <div >
            <div className= {`${style.wrapper}`} >
                <div className={`${style.wrapperInner}`}>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                    <div className={`${style.dot}`}></div>
                </div>

                <div className={`${style.textLine}`}>
                    <h1 className={`${style.p} ${style.h1}`}>
                        P
                        <div className={`${style.pacMan}`}>
                            <div className={`${style.eye}`}></div>
                        </div>
                    </h1>

                    <div className={`${style.awesome}`}>
                        <div className={`${style.awesomeBoard}`}>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>

                            <div className={`${style.ghost}`}>
                                <div className={`${style.eye}`}></div>
                                <div className={`${style.eye}`}></div>
                            </div>

                            <div className={`${style.pacMan}`}>
                                <div className={`${style.eye}`}></div>
                            </div>
                        </div>
                    </div>
                    <h1 className={`${style.c} ${style.h1}`}>
                        c
                        <div className={`${style.pacMan}`}>
                            <div className={`${style.eye}`}></div>
                        </div>
                    </h1>
                </div>
                <h1 className={`${style.dash}`}>-</h1>
                <div className={`${style.textLine}`}>
                    <h1 className={`${style.m}  ${style.h1}`}>
                        M
                        <div className={`${style.ghost} ${style.ghost2}`}>
                            <div className={`${style.eye}`}></div>
                            <div className={`${style.eye}`}></div>
                        </div>
                    </h1>
                    <div className={`${style.awesome}`}>
                        <div className={`${style.awesomeBoard}`}>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.dot}`}></div>
                            <div className={`${style.ghost}`}>
                                <div className={`${style.eye}`}></div>
                                <div className={`${style.eye}`}></div>
                            </div>
                            <div className={`${style.pacMan}`}>
                                <div className={`${style.eye}`}></div>
                            </div>
                        </div>
                    </div>
                    <h1 className={`${style.n} ${style.h1}`}>
                        n
                        <div className={`${style.ghost} ${style.ghost2}`}>
                            <div className={`${style.eye}`}></div>
                            <div className={`${style.eye}`}></div>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}
