import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Content from "./content";

test("ProfileContent", () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <Content profile={{ email: "e@mail.com", id: "1" }} />
            </MemoryRouter>
        )
        .toJSON();

    expect(tree).toMatchInlineSnapshot(`
        <div
          className="container"
        >
          <h1
            className="title"
          >
            Профиль
          </h1>
          <p>
            e@mail.com
          </p>
          <div
            className="buttons are-small"
            style={
              {
                "marginTop": "20px",
              }
            }
          >
            <a
              className="button"
              href="/user/edit"
              onClick={[Function]}
            >
              <span
                className="icon is-small"
              >
                <i
                  className="fas fa-edit"
                />
              </span>
              <span>
                Редактировать
              </span>
            </a>
            <a
              className="button"
              href="/change_password"
              onClick={[Function]}
            >
              <span
                className="icon is-small"
              >
                <i
                  className="fas fa-key"
                />
              </span>
              <span>
                Изменить пароль
              </span>
            </a>
          </div>
        </div>
    `);
});
