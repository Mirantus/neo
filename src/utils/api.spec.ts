import { apiFetch } from "./api";

const globalAny: any = global;
const url = "url";
const apiUrl = `${APP_ENV.apiUrl}/${url}`;
const data = { key1: "value1", key2: "value2" };

globalAny.fetch = jest.fn().mockImplementation((): any => {});

test("apiFetch url only", () => {
    apiFetch(url);

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { method: "GET" });
});

test("apiFetch GET", () => {
    apiFetch(url, "GET", data);

    expect(globalAny.fetch).toHaveBeenCalledWith(`${apiUrl}?key1=value1&key2=value2`, { method: "GET" });
});

test("apiFetch POST", () => {
    apiFetch(url, "POST", data);

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { body: '{"key1":"value1","key2":"value2"}', method: "POST" });
});

test("apiFetch options", () => {
    apiFetch(url, undefined, undefined, { body: "body" });

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { body: "body", method: "GET" });
});
