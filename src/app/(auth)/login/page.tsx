import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="p-4">
      <h1 className="text-primary">{/* Icon here */} Community</h1>
      <form>
        <div aria-label="Form-title">
          <h2 className="text-primary">Log In</h2>
          <p aria-description="Form-information">
            Belum punya akun?{" "}
            <Link href="/register" className="text-primary">
              Daftar disini
            </Link>
          </p>
        </div>
        <fieldset>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Masukkan email anda"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Masukkan password anda"
            />
          </div>
          <Link href="/forgot-password" className="text-primary">
            Lupa Password?
          </Link>
          <div aria-label="Form-button">
            <button type="submit" aria-label="Submit-button">
              Masuk
            </button>
            <button type="button" aria-label="Login-google-button">
              {/* icon google here */}
              Masuk dengan Google
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
