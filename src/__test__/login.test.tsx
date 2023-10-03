import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/(auth)/login/page";

describe("login", () => {
  beforeEach(() => {
    render(<Login />);
  });

  it("should render logo and name of app on login page correctly", () => {
    const communityText = screen.getByRole("heading", {
      level: 1,
      name: "Community",
    });

    expect(communityText).toBeInTheDocument();
  });

  it("should render form title and information with button redirect to register page on login page correctly", () => {
    const titleText = screen.getByRole("heading", {
      level: 2,
      name: "Log In",
    });

    const informationText = screen.getByText(/Belum punya akun?/i);

    const buttonRedirect = screen.getByRole("link", {
      name: "Daftar disini",
    });

    expect(titleText).toBeInTheDocument();
    expect(informationText).toBeInTheDocument();
    expect(buttonRedirect).toBeInTheDocument();
    expect(buttonRedirect).toHaveAttribute("href", "/register");
  });

  it("should render email field group on login page correctly", () => {
    const labelText = screen.getByLabelText("Email", {
      selector: "input",
    });
    const inputField = screen.getByPlaceholderText("Masukkan email anda");

    expect(labelText).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("should render password field group on login page correctly", () => {
    const labelText = screen.getByLabelText("Password", {
      selector: "input",
    });
    const inputField = screen.getByPlaceholderText("Masukkan password anda");

    expect(labelText).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("should render button redirect to forget password page correctly", () => {
    const lupaPasswowdButton = screen.getByRole("link", {
      name: "Lupa Password?",
    });

    expect(lupaPasswowdButton).toBeInTheDocument();
    expect(lupaPasswowdButton).toHaveAttribute("href", "/forgot-password");
  });

  it("should render button submit on login page correctly", () => {
    const submitButton = screen.getByRole("button", {
      name: "Submit-button",
    });

    expect(submitButton).toBeInTheDocument();
  });

  it("should render button login using google on login page correctly", () => {
    const loginGoogleButton = screen.getByRole("button", {
      name: "Login-google-button",
    });

    expect(loginGoogleButton).toBeInTheDocument();
  });
});
