import React from 'react'
import headerImg from '../assets/img/header-2.png'
import Typewriter from 'typewriter-effect'
const Header = () => {
    return (
        <header className="container header">
            <div className="header-left">
                <h1 className='title'>
                    Hi There! 
                    <Typewriter
                        onInit={((typewriter) => {
                            typewriter.typeString("DRESTEIN 2k22").start()
                        })}
                    /> is here.
                </h1>
                <p className="desc">13th National level inter collegiate technical and management fest </p>
            </div>
            <div className="header-right">
                <img src={headerImg} alt="" srcset="" />
            </div>
        </header>
    )
}

export default Header