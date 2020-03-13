import { validate } from "./form";

test("RegisterForm validate", () => {
    const values = { email: "e@mail.com", password: "1", password2: "1" };
    expect(validate(values)).toEqual({});
});

test("RegisterForm validate error", () => {
    const values = { email: "", password: "1", password2: "2" };
    expect(validate(values)).toEqual({ password2: "Пароли должны совпадать" });
});
