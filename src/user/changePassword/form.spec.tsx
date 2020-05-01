import { validate } from "./form";

test("Change password validate", () => {
    const values = { current_password: "0", password: "1", password2: "1" };
    expect(validate(values)).toEqual({});
});

test("Change password validate error", () => {
    const values = { current_password: "0", password: "1", password2: "2" };
    expect(validate(values)).toEqual({ password2: "Пароль и подтверждение должны совпадать" });
});
