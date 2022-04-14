import { useCharacters } from 'hooks/useCharacters';
import type { NextPage } from 'next'
import { Entity, Data } from 'types/entity-types';
import { List, Typography, Divider, Button, Checkbox, Form, Input } from 'antd';
import { postData } from 'services/fetch-creator';
import { useMutation } from 'react-query';

const TestView: NextPage<Data> = props => {
    const {
        data,
        isLoading,
        isError,
        createMutation
    } = props;

    console.log(data);
    const mutation = createMutation();
    const onFinish = (values: any) => {
        try {
            mutation.mutate(values);
            console.log('success');
        } catch (error) {
            console.log(error);
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    if(isLoading) {
        return <div>Loading....</div>
    }

    if(isError) {
        return <div>Oops, something went wrong...</div>
    }

    return (
        <>
            <Divider orientation="center">Default Size</Divider>
            <List
                bordered
                dataSource={data}
                renderItem={(item: Entity) => (
                    <List.Item>
                        <Typography.Text>
                            {item.name}
                        </Typography.Text>
                        <Typography.Text italic>
                            {item.username}
                        </Typography.Text>
                        <Typography.Text mark>
                            {item.email}
                        </Typography.Text>
                        <Typography.Text strong>
                            {item.phone}
                        </Typography.Text>
                    </List.Item>
                )}
            />
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Userame"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
                );
        </>
    );
}


export default TestView
