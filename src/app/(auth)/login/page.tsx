import { EyeOffIcon, GoogleIcon, LogoIcon } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="p-4">
      <h1 className="text-primary flex flex-row justify-center items-center gap-2 mt-5 font-bold font-lexend-deca text-xl">
        <LogoIcon height={34} width={33} /> Community
      </h1>
      <form className="mt-16 flex flex-col gap-6">
        <div aria-label="Form-title" className="flex flex-col gap-2">
          <h2 className="text-primary font-bold text-xl">Log In</h2>
          <p aria-description="Form-information">
            Belum punya akun?{" "}
            <Link href="/register" className="text-primary font-semibold">
              Daftar disini
            </Link>
          </p>
        </div>
        <fieldset className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Masukkan email anda"
              className="w-full py-3 px-5 rounded-md border border-gray-2 font-semibold placeholder:font-normal outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <div aria-label="password-field-group" className="w-full relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Masukkan password anda"
                className="w-full py-3 pl-5 pr-8 rounded-md border border-gray-2 font-semibold placeholder:font-normal outline-none"
              />
              <EyeOffIcon className="absolute right-4 m-auto top-0 bottom-0 cursor-pointer" />
            </div>
          </div>
          <Link
            href="/forgot-password"
            className="text-primary font-medium self-end"
          >
            Lupa Password?
          </Link>
          <div aria-label="Form-button" className="mt-5 flex flex-col gap-2">
            <button
              type="submit"
              aria-label="Submit-button"
              className="bg-primary rounded-md text-white font-semibold p-4 text-center"
            >
              Masuk
            </button>
            <button
              type="button"
              aria-label="Login-google-button"
              className="rounded-md border border-gray-2 font-semibold px-4 py-[13.5px] flex flex-row gap-2 justify-center items-center"
            >
              <GoogleIcon width={23} height={22} />
              Masuk dengan Google
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
