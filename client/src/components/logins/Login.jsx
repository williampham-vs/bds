import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const formSchema = z.object({
  emailOrPhone: z.string().min(1, { message: "Email hoặc SĐT là bắt buộc" }),
  fullname: z.string().min(1, { message: "Họ và Tên là bắt buộc" }),
  password: z.string().min(6, { message: "Mật khẩu tối thiểu là 6 ký tự" }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrPhone: "",
      password: "",
    },
  });
  const [variant, setVariant] = useState("LOGIN");

  const toggleVariant = () => {
    if (variant === "LOGIN") setVariant("REGISTER");
    else setVariant("LOGIN");
  };

  const handleLoginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log(error),
  });
  return (
    <div className="grid grid-cols-10 text-primary">
      <div className="col-span-4 grid place-content-center">
        <img
          src="/jpg/banner-login.jpg"
          alt="Login"
          className="w-full object-contain"
        />
      </div>
      <div className="col-span-6 p-8">
        <p className="font-bold text-base">Xin chào!</p>
        <p className="font-bold text-2xl">
          {variant === "LOGIN"
            ? "Đăng nhập để tiếp tục"
            : "Đăng ký tài khoản mới"}
        </p>
        <Form {...form}>
          <form className="my-6 space-y-4">
            {variant === "REGISTER" && (
              <FormInput
                form={form}
                name="fullname"
                label="Họ Và Tên"
                placeholder="Vui lòng nhập Họ Và Tên"
              />
            )}
            <FormInput
              form={form}
              name="emailOrPhone"
              label="Email hoặc SĐT"
              placeholder="Vui lòng nhập Email và số điện thoại"
            />
            <FormInput
              form={form}
              type="password"
              name="password"
              label="Mật Khẩu"
              placeholder="Vui lòng nhập mật khẩu"
            />

            {variant === "LOGIN" ? (
              <Button
                size="default"
                className="w-full text-white relative top-2"
              >
                Đăng Nhập
              </Button>
            ) : (
              <Button
                size="default"
                className="w-full text-white relative top-2"
              >
                Đăng Ký
              </Button>
            )}
          </form>
        </Form>
        <div className="w-full h-6 flex items-center relative mb-4">
          <div className="w-full h-[1px] bg-stone-200"></div>
          <div className="absolute inset-0 bg-transparent w-fix">
            <p className="px-2 mx-auto w-fit bg-white text-primary">Hoặc</p>
          </div>
        </div>
        <Button
          onClick={handleLoginGoogle}
          size="lg"
          variant="outline"
          className="w-full mb-4"
        >
          <img
            src="/svg/google.svg"
            alt="google"
            className="w-5 h-5 object-cover"
          />
          <span>Đăng nhập bằng Google</span>
        </Button>
        <p className="text-center text-sm">
          {variant === "LOGIN" ? (
            <span>Bạn chưa là thành viên ? </span>
          ) : (
            <span>Bạn đã là thành viên ? </span>
          )}
          <span
            className="text-red-600 font-bold cursor-pointer hover:underline"
            onClick={toggleVariant}
          >
            {variant === "LOGIN" ? "Đăng ký " : " Đăng nhập "}
          </span>
          <span> tại đây</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
