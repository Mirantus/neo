import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import LoginContent from "./content";

test("LoginContent", () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <LoginContent />
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
            Вход
          </h1>
          <p>
            <a
              href="/register"
              onClick={[Function]}
            >
              Регистрация
            </a>
          </p>
        </div>
    `);
});
