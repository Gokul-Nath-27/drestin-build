import React from 'react'
import headerImg from '../assets/img/header-2.png'
import Typewriter from 'typewriter-effect'
import RegisterBtn from '../components/register-button/RegisterBtn'
import FlipCountdown from '@rumess/react-flip-countdown';

const Header = () => {
    return (
        <>
            <header className="container header">
                <div className="header-left">
                    <h1 className='title'>
                        Hi There!
                        <Typewriter
                            onInit={((typewriter) => {
                                typewriter
                                    .typeString("DRESTEIN 2k22")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("DREAM")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("DESIGN")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("COMPETE")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("WIN.")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("DRESTEIN 2k22")
                                    .start()
                            })}
                        /> is here.
                    </h1>
                    <p className="desc">13th National level inter collegiate technical and management fest </p>
                    <RegisterBtn />
                </div>
                <div className="header-right">
                    <img src={headerImg} alt="" srcset="" />
                </div>
            </header>
            <div className="container countdown">
                <FlipCountdown
                    hideYear
                    hideMonth
                    endAt={'2022-12-12 01:26:58'} // Date/Time
                />
            </div>
        </>
    )
}

export default Header