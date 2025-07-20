// @ts-nocheck
import { http } from "msw";
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
  http.get("/items/", (req: any, res: any, ctx: any) => res(ctx.json(items))),
  http.post("/items/add", (req: any, res: any, ctx: any) => {
    const { text } = JSON.parse(req.body);
    const result = { ...item, text };
    items.push(result);
    return res(ctx.json(result));
  }),
  http.post("/items/edit", (req: any, res: any, ctx: any) => {
    const { text } = JSON.parse(req.body);
    items[0].text = text;
    return res(ctx.json(items[0]));
  }),
  http.post("/items/delete", (req: any, res: any, ctx: any) => {
    const { 0: deletedItem } = items;
    items = [];
    return res(ctx.json(deletedItem));
  }),
  http.get("/items/item/", (req: any, res: any, ctx: any) => {
    return res(ctx.json(items[0]));
  }),
  http.post("/login/", (req: any, res: any, ctx: any) => {
    return res(ctx.json({ token, user: users[0] }));
  }),
  http.post("/register/", (req: any, res: any, ctx: any) => {
    const user = JSON.parse(req.body);
    users.push(user);
    return res(ctx.json({ token, user }));
  }),
  http.post("/user/edit/", (req: any, res: any, ctx: any) => {
    const { email } = JSON.parse(req.body);
    users[1].email = email;
    return res(ctx.json(users[1]));
  }),
  http.post("/change_password/", (req: any, res: any, ctx: any) => {
    return res(ctx.json(""));
  }),
  http.post("/logout/", (req: any, res: any, ctx: any) => {
    return res(ctx.json(""));
  }),
  http.get("/password_recovery/", (req: any, res: any, ctx: any) => {
    return res(ctx.json(""));
  })
);

export default server;
