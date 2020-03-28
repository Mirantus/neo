import { fetch, request } from "./api";

const globalAny: any = global;
const url = "url";
const apiUrl = `${APP_ENV.apiUrl}/${url}`;
const data = { key1: "value1", key2: "value2" };

const fetchSuccess = (): any => ({ status: 200, clone: fetchSuccess, text: () => "ok", json: () => "ok" });
const fetchError = (): any => ({ status: 400, clone: fetchError, text: () => "error", json: () => "error" });
const fetchException = (): any => {
    throw new Error("");
};

globalAny.fetch = jest.fn().mockImplementation(fetchSuccess);
globalAny.console = { log: () => {} };

test("request url only", () => {
    request(url);

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { method: "GET" });
});

test("request GET", () => {
    request(url, "GET", data);

    expect(globalAny.fetch).toHaveBeenCalledWith(`${apiUrl}?key1=value1&key2=value2`, { method: "GET" });
});

test("request POST", () => {
    request(url, "POST", data);

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { body: '{"key1":"value1","key2":"value2"}', method: "POST" });
});

test("request options", () => {
    request(url, undefined, undefined, { body: "body" });

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { body: "body", method: "GET" });
});

test("api fetch calls fetch", () => {
    const options: any = {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    };

    fetch(url, "POST", data, options);

    expect(globalAny.fetch).toHaveBeenCalledWith(apiUrl, { body: JSON.stringify(data), method: "POST", ...options });
});

test("api fetch success", () => {
    const response = fetch(url);
    expect(response).resolves.toBe(fetchSuccess().json());
});

test("api fetch error", () => {
    globalAny.fetch = jest.fn().mockImplementation(fetchError);
    const response = fetch(url).catch();
    expect(response).rejects.toBe(fetchError().text());
});

test("api fetch exception", () => {
    globalAny.fetch = jest.fn().mockImplementation(fetchException);
    const response = fetch(url).catch();
    expect(response).rejects.toBe("Ошибка отправки данных");
});
