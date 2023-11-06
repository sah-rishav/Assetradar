import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
       
        <footer className="footer bg-gray-800 text-primary-content p-4 footer-center" >

            Copyright &copy; {year}. All Rights Reserved
        </footer>
    )
}

export default Footer