// import libraries
import { useEffect, FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

// import components
import FormInput from "@/Components/FormInput";
import PrimaryButton from "@/Components/PrimaryButton";
import GoogleIcon from "@/Components/Icons/GoogleIcon";
import AuthLayout from "@/Layouts/AuthLayout";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => reset("password", "password_confirmation");
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setData("password_confirmation", data.password);
        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 tracking-wide shrink-0">
                Register
            </h2>

            <form onSubmit={submit} className="flex flex-col grow h-full">
                <div className="space-y-6 grow">
                    <FormInput
                        label="Fullname"
                        id="name"
                        type="text"
                        value={data.name}
                        placeholder="Enter your name"
                        onChange={(e) => setData("name", e.target.value)}
                        errorMessage={errors.name}
                        required
                    />
                    <FormInput
                        label="Email Address"
                        id="email"
                        type="email"
                        value={data.email}
                        placeholder="Masukkan email"
                        onChange={(e) => setData("email", e.target.value)}
                        errorMessage={errors.email}
                        required
                    />
                    <FormInput
                        label="Create Password"
                        id="password"
                        type="password"
                        value={data.password}
                        placeholder="Masukkan password disini"
                        onChange={(e) => {
                            setData("password", e.target.value);
                            setData("password_confirmation", e.target.value);
                        }}
                        errorMessage={errors.password}
                        required
                    />
                    <div className="pt-2">
                        <PrimaryButton disabled={processing}>
                            {processing ? "Memproses..." : "Daftar"}
                        </PrimaryButton>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600 mb-3">
                            Use Social Account
                        </p>
                        <a
                            href={route("google.redirect")}
                            className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-md transition-all duration-300 hover:scale-110"
                        >
                            <GoogleIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-auto pt-6 text-center text-sm text-gray-600 shrink-0">
                    Already have an account?{" "}
                    <Link
                        href={route("login")}
                        className="font-bold text-[#3b82f6] hover:text-[#2563eb] hover:underline transition-colors duration-200"
                    >
                        Sign In
                    </Link>
                </div>
            </form>
        </>
    );
};

Register.layout = (page: React.ReactNode) => <AuthLayout children={page} />;
export default Register;
