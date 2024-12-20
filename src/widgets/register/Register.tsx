import axios from "axios";
import { useState } from "react";
import { registerUser } from "../../entities/user/register/register.api";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { pageConfig } from "../../config/pageConfig";
import { UserData } from "../../entities/user/model/type";
import { motion } from "framer-motion";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  const onSubmit = async (data: UserData) => {
    try {
      const res = await registerUser(data);
      if (res) {
        message.success('Вы успешно зарегистрировались')
      }
      navigate(pageConfig.auth)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="container grid h-screen"
    >
      <div className="card mx-auto self-center w-1/4">
        <div className="flex justify-center mb-5">
          <h3 className="text-3xl font-semibold">Регистрация</h3>
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
              Зарегистрироваться
            </Button>
          </div>
          <div className="flex justify-center mt-2.5 gap-2.5 text-white">
            <span>Есть аккаунт?</span>
            <Link to={pageConfig.auth}>Войти</Link>
          </div>
          {errorMessage && (
            <div className="flex justify-center mt-2.5">
              <span className="error">{errorMessage}</span>
            </div>
          )}
        </Form>
      </div>
    </motion.div>
  );
};

export default Register;
