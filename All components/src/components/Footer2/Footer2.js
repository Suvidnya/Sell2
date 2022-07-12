import React from 'react'
import './Footer2.css'
import logo from './Frame.png'
const Footer2 = () => {
    return (
        <footer >
            <div className="mx-auto d-flex px-0 fs-5 align-items-center footer-div lh-1 justify-content-between" style={{ width: '90%' }}>
                <div>
                    <div >
                        <p className='mb-2'>Venkat Vikas Ch</p>
                        <p className='my-2'>PR Head</p>
                        <p className='mt-2'>+91 0123456789</p>
                    </div>
                    <div className='mt-3'>
                        <p class="text-break pt-3 mb-2">Ankit Agrwal</p>
                        <p className='my-2'>PR Head</p>
                        <p className='mt-2'>+91 0123456789</p>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='w-75' src={logo} alt="" />
                </div>
                <div className='text-end '>
                    <div >
                        <p className='mb-2'>For Buisness</p>
                        <p className='my-2'>realted queries</p>
                        <p className='my-2'>alchering@iitg.ac.in</p>
                    </div>
                    <div>
                        <ul className='d-flex list-unstyled'>
                            <li mx-1 ><i class="bi bi-linkedin"></i></li>
                            <li mx-1 ><i class="bi bi-instagram"></i></li>
                            <li mx-1 ><i class="bi bi-facebook"></i></li>
                            <li mx-1 ><i class="bi bi-twitter"></i></li>
                            <li mx-1 ><i class="bi bi-youtube"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center mb-3 alcher'>
                <h2 class="display-6 fw-bold mb-0">IIT GUWAHATI'S</h2>
                <h1 class="display-1 fw-bold">AlCHERINGA</h1>
            </div>
        </footer>
    )
}

export default Footer2