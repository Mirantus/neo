import { validate } from "./form";

test("ItemsAddForm validate", () => {
    expect(validate({ text: "text" })).toEqual({});
});

test("ItemsAddForm validate error", () => {
    expect(validate({ text: "" })).toHaveProperty("text");
});
