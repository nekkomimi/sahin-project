import { Col, Row, Card, Button, Form, Input, Space, Tag, } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useRouter, Router } from "next/router";
import MerchantLayout from "../../../components/merchant/layout/merchantLayout";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../backButton";
import image1 from "../../../public/Image/card-product/aminta-hotel.webp"
import image2 from "../../../public/Image/card-product/Fieris Hotel Rawamangun.webp"
import image3 from "../../../public/Image/card-product/Mang Kabayan Vida Bekasi.webp"
import 'tailwindcss/tailwind.css'
import { Editor } from '@tinymce/tinymce-react';
const { TextArea } = Input;
export default function DetailProductMerchant() {
    // const data = [
    //     {
    //         id: '1',
    //         product: 'WO',
    //         venue: 'Aminta Hall',
    //         lokasi: 'Jakarta',
    //         varian: '100',
    //         harga: 'Rp. 70,600,000',
    //         foto: <Image src={image1} layout="responsive" placeholder='blur' />,
    //         status: ['Tersedia'],
    //         deskripsi: 'Harga diatas sudah termasuk semua komponen utama pesta pernikahan termasuk vendor seperti Wedding planner and Wedding Organizer Master of Ceremony (MC) Decorations Catering (Food and Beverages) Documentation (Photo and Video) Entertainment, Sound System dan Lighting Bridal and Make Up Bonus sesuai paket'
    //     },
    //     {
    //         id: '2',
    //         product: 'WO',
    //         venue: 'Fieris Hotel',
    //         lokasi: 'Jakarta',
    //         varian: '100',
    //         harga: 'Rp. 66,600,000',
    //         foto: <Image src={image2} layout="responsive" placeholder='blur' />,
    //         status: ['Tersedia'],
    //         deskripsi: 'Harga diatas sudah termasuk semua komponen utama pesta pernikahan termasuk vendor seperti Wedding planner and Wedding Organizer Master of Ceremony (MC) Decorations Catering (Food and Beverages) Documentation (Photo and Video) Entertainment, Sound System dan Lighting Bridal and Make Up Bonus sesuai paket'
    //     },
    //     {
    //         id: '3',
    //         product: 'WO',
    //         venue: 'Mang Kabayan Vida',
    //         lokasi: 'Bekasi',
    //         varian: '100',
    //         harga: 'Rp. 45,900,000',
    //         foto: <Image src={image3} layout="responsive" placeholder='blur' />,
    //         status: ['Non-Tersedia'],
    //         deskripsi: 'Harga diatas sudah termasuk semua komponen utama pesta pernikahan termasuk vendor seperti Wedding planner and Wedding Organizer Master of Ceremony (MC) Decorations Catering (Food and Beverages) Documentation (Photo and Video) Entertainment, Sound System dan Lighting Bridal and Make Up Bonus sesuai paket'
    //     },
    // ];

    const [dataProduct, setDataProduct] = useState([])
    const [form] = Form.useForm();
    async function validate() {
        try {
            const getData = await axios.get("https://project-wo.herokuapp.com/product").then(response => {

                if (response.status == 200 || response.status == 201) {
                    setDataProduct(response.data.items)

                }


            })
        } catch (error) {

        }

    }
    useEffect(() => {
        validate()


    }, []);


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const router = useRouter();
    const { id } = router.query;

    // const [defaultValues, setDefaultValues] = useState({
    //     product: `${dataSelected?.product}`,
    //     venue: `${dataSelected?.venue}`,
    //     lokasi: `${dataSelected?.lokasi}`,
    //     varian: `${dataSelected?.varian}`,
    //     harga: `${dataSelected?.harga}`,

    // })

    const dataSelected = dataProduct.find((dataProduct) => dataProduct.id == id);
    const myData = {
        id: `${dataSelected?.id}`,
        availability: `${dataSelected?.availability}`,
        description: `${dataSelected?.description}`,
        location: `${dataSelected?.location}`,
        name: `${dataSelected?.name}`,
        merchant: `${dataSelected?.merchant.name}`,
        category: `${dataSelected?.category.name}`
    }

    form.setFieldsValue({
        name: myData.name,
        availability: myData.availability,
        location: myData.location,
        merchant: myData.merchant,
        category: myData.category,
        description: myData.description,
    })



    return (
        <>
            <MerchantLayout>
                <Content>
                    <h1 className='mt-6 ml-14 text-2xl'>Form Detail Product</h1>
                    <div className="rounded-lg shadow-lg bg-white mx-10 mb-10">
                        <Row justify="space-between" align="middle">
                            <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 24 }}>

                                {/* {dataSelected?.foto} */}
                                <div className="mt-5 p-5">
                                    <Form
                                        layout="vertical"
                                        form={form}
                                        labelCol={{
                                            span: 3,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        // initialValues={{
                                        //     name: myData.name,
                                        //     availability: myData.availability,
                                        //     lokasi: myData.location,
                                        //     description: myData.description,
                                        //     category: myData.category,
                                        //     merchant: myData.merchant,

                                        // }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"

                                    >
                                        <Form.Item
                                            label="Deskripsi"
                                            name="deskripsi"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Mohon Isi Nama Anda!',
                                                },
                                            ]}
                                        >
                                            <TextArea autoSize={true} />

                                        </Form.Item>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg={{ span: 11 }} md={{ span: 11 }} sm={{ span: 24 }} offset={1}>

                                <Form
                                    layout="vertical"
                                    form={form}
                                    labelCol={{
                                        span: 3,
                                    }}
                                    wrapperCol={{
                                        span: 20,
                                    }}
                                    // initialValues={{
                                    //     product: `${dataSelected?.product}`,
                                    //     venue: `${dataSelected?.venue}`,
                                    //     lokasi: `${dataSelected?.lokasi}`,
                                    //     varian: `${dataSelected?.varian}`,
                                    //     harga: `${dataSelected?.harga}`,
                                    //     deskripsi: `${dataSelected?.deskripsi}`,

                                    // }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"

                                >
                                    <Form.Item
                                        label="Product"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mohon Isi Nama Anda!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Category"
                                        name="category"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mohon Isi Nama Anda!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Lokasi"
                                        name="location"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mohon Isi Nama Anda!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Availability"
                                        name="availability"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mohon Isi Nama Anda!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Pemilik"
                                        name="merchant"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mohon Isi Nama Anda!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{

                                            span: 16,
                                        }}>

                                        {/* {dataSelected?.status.map((tag) => {
                                            let color = ''
                                            if (tag === 'Tersedia') {
                                                color = 'green';
                                            }
                                            else if (tag === 'Non-Tersedia') {
                                                color = 'volcano';
                                            }


                                            return (
                                                <Tag color={color} key={tag}>
                                                    {tag.toUpperCase()}
                                                </Tag>
                                            );
                                        })}
                                        { } */}

                                    </Form.Item>

                                    <Form.Item
                                        wrapperCol={{

                                            span: 16,
                                        }}
                                    >
                                        <Space>

                                            <BackButton />
                                            <Button htmlType="button" >
                                                Reset
                                            </Button>
                                        </Space>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </MerchantLayout>
        </>
    )
}