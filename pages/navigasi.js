import 'tailwindcss/tailwind.css'
/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'

import Image from 'next/image'
import logo from "../public/Image/sahin-love.png"
import Link from 'next/link'



export default function Navigasi() {
    const [navbar, setNavbar] = useState(false);
    return (
        <>


            <div className="w-full bg-white shadow" style={{ position: "fixed", zIndex: "1" }}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

                    <div className="flex items-center justify-between md:block">
                        <Link href="/">
                            <a>
                                <Image src={logo} width={150} height={75} objectFit='contain' />
                            </a>
                        </Link>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-pink-500 rounded-md outline-none focus:border-pink-500 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-pink-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-pink-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>

                        </div>
                    </div>



                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >

                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-pink-500 ">
                                <Link href=""><a className='text-pink-500 hover:text-white hover:bg-pink-500 pt-5 pb-5 px-5 text-lg'>Home</a></Link>
                            </li>
                            <li className="text-pink-500 ">
                                <Link href=""><a className='text-pink-500 hover:text-white hover:bg-pink-500 pt-5 pb-5 px-5 text-lg'>Product</a></Link>
                            </li>
                            <li className="text-pink-500 ">
                                <Link href=""><a className='text-pink-500 hover:text-white hover:bg-pink-500 pt-5 pb-5 px-5 text-lg'>Transaksi</a></Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:hidden sm:inline-block">
                            <a
                                href=""
                                className="inline-block w-full px-4 py-2 text-center text-white bg-pink-500 rounded-md shadow hover:bg-white hover:text-pink-500 border-solid border-2 border-pink-500"
                            >
                                Login
                            </a>
                            <a
                                href=""
                                className="inline-block w-full px-4 py-2 my-2 text-center text-pink-800 border-solid border-2 border-pink-500 rounded-md shadow hover:bg-pink-500 hover:text-white"
                            >
                                Daftar
                            </a>
                        </div>

                    </div>


                    <div className="hidden space-x-2 md:inline-block">
                        <Link href="/login">
                            <a
                                className="transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2  text-pink-500 mr-4 border-solid border-pink-500 border-2 rounded-full shadow hover:bg-pink-500 hover:text-white ..."
                            >
                                Login
                            </a>
                        </Link>
                        <Link href="/landingOpsi">
                            <a
                                className="transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2 text-pink-500 bg-white rounded-md shadow hover:bg-pink-500 hover:text-white ..."
                            >
                                Daftar
                            </a>
                        </Link>


                    </div>
                </div>
            </div >
        </>
    )
};
