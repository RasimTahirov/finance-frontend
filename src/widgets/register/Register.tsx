import axios from "axios";
import { Button, Form, Input } from "antd";
import { registerUser } from "../../entities/register/register.api";
import { useState } from "react";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await registerUser(data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } 
    }
  };

  return (
    <div className="container grid h-screen">
      <div className="card mx-auto self-center w-1/4">
        <div className="flex justify-center mb-5">
          <h2 className="text-3xl font-semibold">Регистрация</h2>
        </div>
        <Form className="grid" onFinish={onSubmit}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
          >
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Введён некорректный адрес электронной почты",
              },
              {
                required: true,
                message: "Пожалуйста, введите адрес электронной почты",
              },
            ]}
          >
            <Input placeholder="Почта" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Пароль должен содержать не менее 5 символов",
              },
            ]}
          >
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <div className="flex justify-center mt-2.5">
            <Button className="text-base" htmlType="submit">
              Зарегистрировать
            </Button>
          </div>
          {errorMessage && (
            <div className="flex justify-center mt-2.5">
              <span className="error">{errorMessage}</span>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Register;
