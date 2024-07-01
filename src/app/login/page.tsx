"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
    faArrowRightToBracket,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormFloating from "@/components/partials/FormFloating";
import Alert from "@/components/partials/contact/Alert";

import { randomID } from "@utils/functions";
import ErrorPage from "@/components/sections/ErrorPage";

export default function Login() {
    let [active, setActive] = useState<boolean>(false);
    let [success, setSuccess] = useState<boolean>(false);
    let [errors, setErrors] = useState([]);
    let [username, setUsername] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        //
    }, [active]);

    const SubmitHandler = async (e) => {
        setSuccess(false);
        setErrors([]);
        setActive(true);

        e.preventDefault();

        if (!username || !password) {
            setErrors(["all fields are necessary!"]);
            setActive(false);
            return false;
        }
        try {
            let res = await signIn("credentials", {
                email: username,
                password: password,
            });
            console.log({ res });

            if (!res) {
                setErrors(["invalid credentials"]);

                return;
            }
            router.replace("/");
        } catch (err) {
            console.log({ err });
            setErrors(["something went wrong!"]);
            return;
        }
        setActive(false);
        setUsername("");
        setPassword("");
    };
    return (
        <div className="grid place-content-center h-screen bg-gray-200">
            <div className="border-t-4 border-main flex-col justify-around shadow-md w-72 py-4 px-2 rounded-md bg-slate-100">
                <h1 className="h-1/5 text-2xl uppercase text-center text-slate-800 dark:text-slate-200 font-semibold">
                    please login
                </h1>
                <form
                    onSubmit={SubmitHandler}
                    className="flex flex-col h-4/5 justify-around gap-4 w-full p-4"
                >
                    {success ? (
                        <Alert key={randomID()}>
                            {success}
                            <span className="font-bold relative text-slate-100 before:flex before:items-center before:justify-center  before:absolute before:inset-0 before:-skew-y-3 before:bg-blue-600">
                                <span className="relative text-slate-100">nice !</span>
                            </span>
                        </Alert>
                    ) : null}

                    {errors
                        ? errors.map((error) => {
                            return (
                                <Alert key={randomID()} className="bg-rose-500 font-bold">
                                    <span className="capitalize"> error ! </span>
                                    <p className="font-normal text-sm lg:text-lg">{error}</p>
                                </Alert>
                            );
                        })
                        : null}

                    <FormFloating
                        error={errors ? errors["username"] : null}
                        name="username"
                        text="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="masukan usernama anda..."
                    />
                    <FormFloating
                        error={errors ? errors["password"] : null}
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="ma sukan password anda ..."
                    />

                    <button
                        type="submit"
                        className="hover:cursor-pointer self-end md:self-start font-sans font-light hover:font-semibold transition-all flex gap-2 items-center justify-center w-24 h-8 p-2 group/btn bg-blue-500 hover:bg-blue-600 outline-lg outline-blue-200 outline hover:outline-blue-400 hover:animate-none hover:shadow-lg text-slate-50 rounded-full"
                    >
                        <FontAwesomeIcon
                            className={`${active ? "hover:cursor-wait" : "hover:cursor-pointer"
                                } animation group-hover/btn:animate-bounce`}
                            icon={!active ? faArrowRightToBracket : faSpinner}
                        />
                        login
                    </button>
                </form>
            </div>
        </div>
    );
}
