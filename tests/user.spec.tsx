import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import server from "./mocks/server";
import TestApplicationContainer from "./mocks/application";

beforeAll(() => server.listen());
afterAll(server.close);

test("User", async () => {
  const { getByLabelText, getByRole, getByText, getByTitle } = render(
    <TestApplicationContainer />
  );

  //Пользователь заходит на главную и видит ссылку Войти
  await waitFor(() => getByText("Подождите..."));
  await waitForElementToBeRemoved(() => getByText("Подождите..."));
  await waitFor(() => getByRole("link", { name: "Войти" }));

  //Пользователь кликает на кнопку Войти и видит форму логина
  fireEvent.click(getByRole("link", { name: "Войти" }));
  await waitFor(() => getByText("Вход"));

  //Пользователь кликает на ссылку Регистрация и видит форму регистрации
  fireEvent.click(getByRole("link", { name: "Регистрация" }));
  await waitFor(() => getByText("Подтверждение пароля"));
  expect(getByRole("heading")).toHaveTextContent("Регистрация");

  //Пользователь заполняет форму регистрации и видит Профиль
  await userEvent.type(
    getByRole("textbox", { name: "Email" }),
    "test@mail.com"
  );
  await userEvent.type(getByLabelText("Пароль"), "test");
  await userEvent.type(getByLabelText("Подтверждение пароля"), "test");
  fireEvent.click(getByRole("button", { name: "Отправить" }));
  await waitFor(() => getByText("Профиль"));

  //Нажимает кнопку редактировать и видит форму Редактировать профиль
  fireEvent.click(getByRole("link", { name: "Редактировать" }));
  await waitFor(() => getByText("Редактирование профиля"));

  //Заполняет форму Редактировать профиль и видит Профиль
  await userEvent.clear(getByRole("textbox", { name: "Email" }));
  await userEvent.type(
    getByRole("textbox", { name: "Email" }),
    "test2@mail.com"
  );
  fireEvent.click(getByRole("button", { name: "Отправить" }));
  await waitFor(() => getByText("Профиль"));

  //Нажимает кнопку Изменить пароль и видит форму Изменение пароля
  fireEvent.click(getByRole("link", { name: "Изменить пароль" }));
  await waitFor(() => getByText("Изменение пароля"));

  //Заполняет форму Изменение пароля и видит Профиль
  await userEvent.type(getByLabelText("Старый пароль"), "test");
  await userEvent.type(getByLabelText("Пароль"), "test2");
  await userEvent.type(getByLabelText("Подтверждение пароля"), "test2");
  fireEvent.click(getByRole("button", { name: "Отправить" }));
  await waitFor(() => getByText("Профиль"));

  //Нажимает кнопку логаут и видит форму логина
  fireEvent.click(getByTitle("Выйти"));
  await waitFor(() => getByText("Вход"));

  //Нажимает ссылку забыли пароль и видит форму восстановления пароля
  fireEvent.click(getByRole("link", { name: "Забыли пароль?" }));
  await waitFor(() => getByText("Восстановление пароля"));
  expect(getByRole("heading")).toHaveTextContent("Восстановление пароля");

  //Заполняет форму восстановления пароля и видит надпись об успешной отправки
  await userEvent.type(
    getByRole("textbox", { name: "Email" }),
    "test2@mail.com"
  );
  fireEvent.click(getByRole("button", { name: "Отправить" }));
  await waitFor(() => getByText("Новый пароль отправлен на указанный email"));
});
