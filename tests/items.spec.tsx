import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import TestApplicationContainer from "./mocks/application";
import { item, defaultUser as user } from "./mocks/constants";
import server from "./mocks/server";
import { getByHeading, getByQuery } from "./utils";

const text = "text2";

beforeAll(() => {
  server.listen();
  window.confirm = () => true;
});

afterAll(() => {
  server.close();
});

test("Items", async () => {
  const {
    container,
    getByLabelText,
    getByRole,
    getByText,
    getByTitle,
    queryByText,
  } = render(<TestApplicationContainer />);

  //Пользователь заходит на главную и не видит кнопку Добавить
  await waitFor(() => getByHeading(container, "Записи"));
  expect(queryByText("Добавить")).not.toBeInTheDocument();

  //Пользователь кликает на кнопку Войти и видит форму логина
  fireEvent.click(getByRole("link", { name: "Войти" }));
  await waitFor(() => getByHeading(container, "Вход"));

  //Пользователь заполняет форму логина и видит профиль
  await userEvent.type(getByRole("textbox", { name: "Email" }), user.email);
  await userEvent.type(getByLabelText("Пароль"), "test");
  fireEvent.click(getByRole("button", { name: "Отправить" }));
  await waitFor(() => getByHeading(container, "Профиль"));

  //Нажимает кнопку записи и видит главную страницу
  fireEvent.click(getByRole("link", { name: "Записи" }));
  await waitFor(() => getByHeading(container, "Записи"));

  //Нажимает кнопку Добавить и видит форму добавления записи
  fireEvent.click(getByRole("link", { name: "Добавить" }));
  await waitFor(() => getByHeading(container, "Добавление записи"));

  //Заполняет форму добавления записи и видит страницу с записями
  fireEvent.change(getByRole("textbox", { name: "Текст" }), {
    target: { value: item.text },
  });
  fireEvent.click(getByRole("button", { name: "Добавить" }));
  await waitFor(() => getByHeading(container, "Записи"));

  //Видит добавленную запись в списке
  await waitFor(() => getByText(item.text));

  //Нажимает на кнопку редактирования записи и видит форму редактирования
  fireEvent.click(
    getByQuery(container, `#item-${item.id} a[title="Редактировать"]`)
  );
  await waitFor(() => getByHeading(container, "Редактирование"));

  //Заполняет форму редактирования, нажимает кнопку сохранить и видит отредактированную запись
  await userEvent.clear(getByRole("textbox", { name: "Текст" }));
  await userEvent.type(getByRole("textbox", { name: "Текст" }), text);
  fireEvent.click(getByRole("button", { name: "Сохранить" }));
  await waitFor(() => getByHeading(container, "Запись"));
  await waitFor(() => getByText(text));

  //Нажимает кнопку записи и видит список записей
  fireEvent.click(getByRole("link", { name: "Записи" }));
  await waitFor(() => getByHeading(container, "Записи"));
  await waitFor(() => getByText(text));

  //Пользователь кликает на запись и видит запись
  fireEvent.click(getByRole("link", { name: text }));
  await waitFor(() => getByHeading(container, "Запись"));
  await waitFor(() => getByText(text));
  expect(getByText(item.viewDate)).toBeInTheDocument();

  //Нажимает кнопку записи и видит список записей
  fireEvent.click(getByRole("link", { name: "Записи" }));
  await waitFor(() => getByHeading(container, "Записи"));
  await waitFor(() => getByText(text));

  //Нажимает кнопку удалить, подтверждает удаление
  fireEvent.click(getByQuery(container, `#item-${item.id} a[title="Удалить"]`));

  //В списке записей нет удаленной записи
  await waitForElementToBeRemoved(() => getByText(text));

  //Нажимает кнопку логаут и не видит кнопок редактирования и удаления
  fireEvent.click(getByTitle("Выйти"));
  await waitFor(() => getByText("Войти"));
  expect(queryByText("Редактировать")).not.toBeInTheDocument();
  expect(queryByText("Удалить")).not.toBeInTheDocument();
});
