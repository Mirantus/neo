import { rest } from "msw";
import { setupServer } from "msw/node";

import { defaultUser, item, token } from "./constants";

interface Item {
  id: number;
  date: string;
  text: string;
  user_id: number;
  viewDate: string;
}
interface User {
  id: number;
  email: string;
}

let items: Item[] = [];
const users: User[] = [defaultUser];

const server = setupServer(
  rest.get("/items/", (req: any, res: any, ctx: any) => res(ctx.json(items))),
  rest.post("/items/add", (req: any, res: any, ctx: any) => {
    const { text } = JSON.parse(req.body);
    const result = { ...item, text };
    items.push(result);
    return res(ctx.json(result));
  }),
  rest.post("/items/edit", (req: any, res: any, ctx: any) => {
    const { text } = JSON.parse(req.body);
    items[0].text = text;
    return res(ctx.json(items[0]));
  }),
  rest.post("/items/delete", (req: any, res: any, ctx: any) => {
    const { 0: deletedItem } = items;
    items = [];
    return res(ctx.json(deletedItem));
  }),
  rest.get("/items/item/", (req: any, res: any, ctx: any) => {
    return res(ctx.json(items[0]));
  }),
  rest.post("/login/", (req: any, res: any, ctx: any) => {
    return res(ctx.json({ token, user: users[0] }));
  }),
  rest.post("/register/", (req: any, res: any, ctx: any) => {
    const user = JSON.parse(req.body);
    users.push(user);
    return res(ctx.json({ token, user }));
  }),
  rest.post("/user/edit/", (req: any, res: any, ctx: any) => {
    const { email } = JSON.parse(req.body);
    users[1].email = email;
    return res(ctx.json(users[1]));
  }),
  rest.post("/change_password/", (req: any, res: any, ctx: any) => {
    return res(ctx.json(""));
  }),
  rest.post("/logout", (req: any, res: any, ctx: any) => {
    return res(ctx.json(""));
  }),
  rest.get("/password_recovery", (req: any, res: any, ctx: any) => {
    return res(ctx.json(""));
  })
);

export default server;
