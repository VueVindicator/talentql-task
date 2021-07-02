import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Login from "../components/auth/login/login";

describe("<Login />", () => {
  test("should render a login form", async () => {
    const { getByTestId } = render(<Login />);
    const loginForm = await getByTestId("login-form");

    expect(loginForm).toHaveFormValues({
      username: 'theusername',
      password: 'thepassword',
    });
  });

  test("the form should allow a user to enter a username", async () => {
    const { getByTestId } = render(<Login />);

    fireEvent.change(getByTestId("username"), {
      target: { value: "theusername" },
    });

    expect(getByTestId("username")).toHaveValue("theusername");
  });

  test("the form should allow a user to enter a password", async () => {
    const { getByTestId, findByRole } = render(<Login />);

    fireEvent.change(getByTestId("password"), {
      target: { value: "thepassword" },
    });

    expect(getByTestId("password")).toHaveValue("thepassword");
  });

  test("the form should be submitted with username and password", async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<Login />);
    const { getInstance, toJSON } = renderer.create(<Login />);

    let tree = toJSON();
    expect(tree).toMatchSnapshot();

    fireEvent.change(getByTestId("username"), {
      target: { value: "theusername" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { value: "thepassword" },
    });
    fireEvent.click(getByTestId("submit"));

    expect(getByTestId("submit")).toBeEnabled();
  });
});
