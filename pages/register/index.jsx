import Button from '@/src/components/ui/Button';
import Form from '@/src/components/ui/Form';
import Layout from '@/src/components/ui/Layout';
import Typography from '@/src/components/ui/Typography'
import React from 'react'

const RegistrationPage = () => {

    const onSubmit = (payload) => {
        console.log(payload);
    }
    return (
        <Layout.Col className="h-screen">
            <Layout.Container className="max-w-sm h-full">
                <Layout.Col className="justify-center h-full w-full gap-4">
                    <Typography.Heading level={4} className="text-center">Create an account</Typography.Heading>
                    <Typography className="text-gray-400 text-center">Enter you email below to create an account</Typography>
                    <Form onSubmit={onSubmit}>
                        <Layout.Col className="w-full gap-2 sm:min-w-[20rem]">
                            <Form.Input type="text" name="name" placeholder="john doe" required />
                            <Form.Input type="email" name="email" placeholder="name@example.com" required />
                            <Form.Input type="password" name="password" placeholder="*******" required />
                            <Form.Input type="password" name="conf_password" placeholder="*******" required />
                            <Button className="btn-tertiary">Create your account</Button>
                        </Layout.Col>
                    </Form>
                    <Typography className="text-gray-400 max-w-[24rem] text-center">By clicking continue, you agree to our Terms of Service and Privacy Policy.</Typography>
                </Layout.Col>
            </Layout.Container>
        </Layout.Col>
    )
}

export default RegistrationPage;