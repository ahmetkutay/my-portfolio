import React from 'react';
import './homepage.css'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineGoogle, AiOutlineTwitter} from 'react-icons/ai'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faHouseFlag, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <div className="homepage-container-center">
                <div className="homepage-info-me">
                    <div>
                        <img src={require('../../assets/ahmetkutay.jpg')} alt='ahmetkutay-resim'
                             className='image-me'/>
                    </div>
                    <div>
                        <div style={{marginTop: '50px'}}>
                            <h1>Hi I'm <span className='text-color-fade'>Ahmet Kutay Karacair</span></h1>
                            <h2>I'm a Full Stack Developer</h2>
                            <br/>
                            <span>
                                <h3><FontAwesomeIcon icon={faHouseFlag}/> Based in Turkey</h3>
                                <h3><FontAwesomeIcon icon={faCode}/> Software Engineer at Orion Innovation</h3>
                                <h3><FontAwesomeIcon icon={faPaperPlane} className="text-color-fade"/> kutaykaracair@gmail.com</h3>
                            </span>
                        </div>
                        <div>
                            <a href="https://github.com/ahmetkutay" style={{textDecoration: "none", color: "inherit"}}>
                                <AiFillGithub size="55"/>
                            </a>
                            <a href="https://www.linkedin.com/in/ahmetkutay/"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <AiFillLinkedin size="55"/>
                            </a>
                            <a href="https://www.instagram.com/kutaykaracair/"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <AiFillInstagram size="55"/>
                            </a>
                            <a href="https://twitter.com/KutayKaracair"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <AiOutlineTwitter size="55"/>
                            </a>
                            <a href="mailto:kutaykaracair@gmail.com" style={{textDecoration: "none", color: "inherit"}}>
                                <AiOutlineGoogle size="55"/>
                            </a>
                        </div>
                    </div>
                </div>
                <br/>
                <div>
                    <Link to="/about" className="bn5">Do you want to know more about me</Link>
                </div>
            </div>

        </>
    );
}

export default Homepage;