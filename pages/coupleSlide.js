import { Col, Row, Space, Grid, Carousel, } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Coupleimg from "../public/Image/couple1.png"
import Coupleimg2 from "../public/Image/couple4-3.jpg"
import Coupleimg3 from "../public/Image/couple3-2.webp"
import Coupleimg4 from "../public/Image/couple4.jpg"
import Coupleimg5 from "../public/Image/couple2.jpeg"
import Coupleimg6 from "../public/Image/couple5.jpg"
import Image from 'next/image';
import "antd/dist/antd.css"
import "tailwindcss/tailwind.css"

function CoupleSlide() {

    const styleCarousel = {
        height: '300px',
        lineHeight: '30px',
        textAlign: 'start',
    }
    return (
        <>

            <Carousel autoplay>
                <div>
                    <div style={styleCarousel}>
                        <Row justify="center" className='space-x-5'>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg} alt="" />


                                </div>
                            </Col>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg6} alt="" />


                                </div>
                            </Col>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg5} alt="" />


                                </div>
                            </Col>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg4} alt="" />


                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div style={styleCarousel}>
                        <Row justify="center" className='space-x-5'>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg} alt="" />


                                </div>
                            </Col>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg6} alt="" />


                                </div>
                            </Col>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg5} alt="" />


                                </div>
                            </Col>
                            <Col lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 11 }} xs={{ span: 11 }}
                                className="pt-5">
                                <div className="rounded-lg shadow-lg  ">

                                    <Image className="rounded-t-lg" src={Coupleimg4} alt="" />


                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default CoupleSlide