import Background from "../public/Image/banner-wed-5.png"
import Image from "next/image"
import Logo from "../public/Image/sahin-love.png"
import { Col, Row, Grid, Layout, Button } from "antd"
import "antd/dist/antd.css"
import "tailwindcss/tailwind.css"
import { useState, Fragment } from "react"
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router"


const { useBreakpoint } = Grid;
const { Content } = Layout


export default function Login() {
    const screens = useBreakpoint();
    const contentStyle = {
        height: '100vh',
        color: '#CC5A80',
        textAlign: 'center',
        position: 'relative',
    };
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const router = useRouter()
    const submitLogin = async () => {

        try {
            const formData = {
                username: username,
                password: password
            }
            console.log(formData)

            const request = await axios.post("https://85bc-2001-448a-2020-26fe-1051-3284-abb7-cd1b.ap.ngrok.io/auth/login", formData, {
                headers: { 'content-type': 'application/json' }
            }).then(result => {
                // console.log(result.data.token)
                // localStorage.setItem('token_customer', result.data.token)
                // window.alert(result.data.message)
                if (result) {
                    localStorage.setItem('token_customer', result.data.token)
                    window.alert(result.data.message)
                    router.push("/" + username)
                } else {
                    window.alert("username atau password salah")
                }
            })
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <Fragment>
                <div style={{ position: "relative" }} className="min-h-screen min-w-full">
                    <Image src={Background} layout="fill" priority={true} />
                    <div className="min-h-screen align-middle">
                        <Row gutter={{
                            xs: 8,
                            sm: 16,
                            md: 32,
                            lg: 32,
                        }} align="middle" className="justify-between" style={{ width: "50%" }} >
                            {Object.entries(screens)
                                .filter((screen) => !!screen[1])
                                .map((screen) => (
                                    screen[0]
                                ))}
                            <Col lg={{ span: 10 }} offset={1} className="pt-5  align-middle">

                                <h1 className="text-pink-500 text-3xl">Login</h1>


                            </Col>
                            <Col span={8} offset={1} className="pt-5 mb-10 justify-self-end">
                                <Image src={Logo} width={253} height={213} />
                            </Col>

                        </Row>
                        <Row align="middle" className="justify-between" style={{ width: "50%" }}>
                            <Col lg={{ span: 16 }} offset={4}>
                                <form className="mt-5">
                                    <div className="mb-10">
                                        <input
                                            type="text"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                    bg-white bg-clip-padding border border-solid border-pink-300 rounded transition 
                                    ease-in-out m-0 focus:text-pink-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                                            id="exampleFormControlInput1"
                                            placeholder="Masukan Username Anda"
                                            value={username} onChange={onChangeUsername}

                                        />
                                    </div>
                                    <div className="mb-10">
                                        <input
                                            type="password"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 
                                    bg-white bg-clip-padding border border-solid border-pink-300 rounded transition 
                                    ease-in-out m-0 focus:text-pink-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                                            id="exampleFormControlInput1"
                                            placeholder="Password"
                                            value={password} onChange={onChangePassword}
                                        />
                                    </div>
                                    <div className="text-center pt-1 mb-12 pb-1">
                                        <Button
                                            className="inline-block px-6 py-2.5 text-pink-500 font-medium text-xs leading-tight uppercase rounded shadow-md 
                                    hover:bg-pink-700 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg 
                                    transition duration-150 ease-in-out w-full mb-3"

                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            type="submit"
                                            onClick={submitLogin}
                                        >
                                            Log in
                                        </Button>

                                    </div>
                                    <div className="flex items-center justify-between pb-6">
                                        <p className="mb-0 mr-2">Tidak punya akun? <Link href="/landingOpsi"><a className="text-pink-500">Daftar disini</a></Link></p>

                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Fragment>
        </>
    )
}