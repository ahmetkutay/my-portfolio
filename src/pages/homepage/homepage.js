import React from 'react';
import './homepage.css'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineGoogle, AiOutlineTwitter} from 'react-icons/ai'

const Homepage = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                flexDirection: 'column'
            }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <img src={require('../../assets/ahmetkutay.jpg')} alt='ahmetkutay-resim'
                             className='image-me'/>
                    </div>
                    <div>
                        <div>
                            <h2>Hi I'm <span className='text-color-fade'>Ahmet Kutay Karacair</span></h2>
                            <h3>I'm a Full Stack Developer</h3>
                        </div>
                        <div>
                            <a href="https://github.com/ahmetkutay" style={{textDecoration: "none", color: "inherit"}}>
                                <AiFillGithub size="60"/>
                            </a>
                            <a href="https://www.linkedin.com/in/ahmetkutay/"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <AiFillLinkedin size="60"/>
                            </a>
                            <a href="https://www.instagram.com/kutaykaracair/"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <AiFillInstagram size="60"/>
                            </a>
                            <a href="https://twitter.com/KutayKaracair"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <AiOutlineTwitter size="60"/>
                            </a>
                            <a href="mailto:kutaykaracair@gmail.com" style={{textDecoration: "none", color: "inherit"}}>
                                <AiOutlineGoogle size="60"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Homepage;