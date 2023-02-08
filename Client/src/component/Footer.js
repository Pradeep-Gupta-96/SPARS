import React from 'react'
import { BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsGithub } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'

const Footer = () => {
    return (
        <>
            <footer className="text-center  text-white" >
                <div className="container  pt-4">
                    <section className="mb-4" id='footer'>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.facebook.com/"
                            role="button"
                            target="_blank"
                            data-mdb-ripple-color="dark"
                        ><BsFacebook className="icons"/></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.twitter.com/ "
                            role="button"
                            target="_blank"
                            data-mdb-ripple-color="dark"
                        ><BsTwitter className="icons"/></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://instagram.com/pradeep_gupta_up.57?utm_medium=copy_link"
                            role="button"
                            target="_blank"
                            data-mdb-ripple-color="dark"
                        ><BsInstagram className="icons"/></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/pradeep-gupta-bb263a188"
                            role="button"
                            target="_blank"
                            data-mdb-ripple-color="dark"
                        ><BsLinkedin className="icons"/></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/Pradeep-Gupta-96"
                            role="button"
                            target="_blank"
                            data-mdb-ripple-color="dark"
                        ><BsGithub className="icons"/></a>
                    </section>
                </div>

                <div className="text-center text-dark p-5" >
                    © 2020 Copyright:
                    <a className="text-dark" target="_blank" href="http://www.kipm.edu.in/">---kipm.edu.in/</a>
                </div>

            </footer>
        </>
    )
}

export default Footer