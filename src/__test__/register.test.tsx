import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "@/app/(auth)/register/page";

describe("register", () => {
  beforeEach(() => {
    render(<Register />);
  });

  it("should render logo and name of app on register page correctly", () => {
    const communityText = screen.getByRole("heading", {
      level: 1,
      name: "Community",
    });

    const logoIcon = screen.getByRole("logo-icon");

    expect(communityText).toBeInTheDocument();
    expect(logoIcon).toBeInTheDocument();
  });

  it("should render form title and information with button redirect to register page on register page correctly", () => {
    const titleText = screen.getByRole("heading", {
      level: 2,
      name: "Register",
    });

    const informationText = screen.getByText(/Sudah punya akun?/i);

    const buttonRedirect = screen.getByRole("link", {
      name: "Login disini",
    });

    expect(titleText).toBeInTheDocument();
    expect(informationText).toBeInTheDocument();
    expect(buttonRedirect).toBeInTheDocument();
    expect(buttonRedirect).toHaveAttribute("href", "/login");
  });

  it("should render email field group on register page correctly", () => {
    const labelText = screen.getByLabelText("Email", {
      selector: "input",
    });
    const inputField = screen.getByPlaceholderText("Masukkan email anda");

    expect(labelText).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("should render password field group on register page correctly", () => {
    const labelText = screen.getByLabelText("Password", {
      selector: "input",
    });
    const inputField = screen.getByPlaceholderText("Masukkan password anda");
    const eyeOffIcon = screen.getAllByRole("eye-off-icon");

    expect(labelText).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(eyeOffIcon[0]).toBeInTheDocument();
  });

  it("should render re-type password field group on register page correctly", () => {
    const labelText = screen.getByLabelText("Re-type Password", {
      selector: "input",
    });
    const inputField = screen.getByPlaceholderText(
      "Masukkan ulang password anda"
    );
    const eyeOffIcon = screen.getAllByRole("eye-off-icon");

    expect(labelText).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(eyeOffIcon[1]).toBeInTheDocument();
  });

  it("should render button submit on register page correctly", () => {
    const submitButton = screen.getByRole("button", {
      name: "Submit-button",
    });

    expect(submitButton).toBeInTheDocument();
  });

  it("should render button login using google on register page correctly", () => {
    const loginGoogleButton = screen.getByRole("button", {
      name: "Login-google-button",
    });

    const googleIcon = screen.getByRole("google-icon");

    expect(loginGoogleButton).toBeInTheDocument();
    expect(googleIcon).toBeInTheDocument();
  });

  it("should render auth layout on register page correctly", () => {
    const authLayout = screen.getByRole("auth-layout");

    expect(authLayout).toBeInTheDocument();
  });
});
