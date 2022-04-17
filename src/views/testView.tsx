import type { NextPage } from "next";
import { User, ResponseResult } from "types/entity-types";
import { List, Typography, Divider, Button, Form, Input } from "antd";

const TestView: NextPage<ResponseResult> = (props) => {
  const { responce, mutationResponce } = props;
  const { data, isLoading, isError } = responce;
  const onFinish = (values: any) => {
    mutationResponce.mutate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Oops, something went wrong...</div>;
  }

  return (
    <>
      <Divider orientation="center">Default Size</Divider>
      <List
        bordered
        dataSource={data}
        renderItem={(item: User) => (
          <List.Item>
            <Typography.Text>{item.name}</Typography.Text>
            <Typography.Text italic>{item.username}</Typography.Text>
            <Typography.Text mark>{item.email}</Typography.Text>
            <Typography.Text strong>{item.phone}</Typography.Text>
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
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Userame"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
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
};

export default TestView;
