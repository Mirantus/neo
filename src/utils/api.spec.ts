import { appFetch, fetch, request } from "./api";

const globalAny: any = global;
const url = "/url";
const apiUrl = APP_ENV.apiUrl + url;
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

test("app fetch no global", async () => {
    globalAny.fetch = jest.fn().mockImplementation(fetchSuccess);
    const dispatch = jest.fn();
    await appFetch({ url }, dispatch);
    expect(dispatch).not.toHaveBeenCalled();
});

test("app fetch success", async () => {
    const dispatch = jest.fn();
    const okFactory = jest.fn();
    okFactory.mockImplementation((value) => value);

    const response = await appFetch({ url, okFactory }, dispatch);
    expect(response).toBe(fetchSuccess().json());
    expect(okFactory).toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
});

test("app fetch error", async () => {
    globalAny.fetch = jest.fn().mockImplementation(fetchError);
    const dispatch = jest.fn();
    const okFactory = jest.fn();
    okFactory.mockImplementation((value) => value);
    let response;

    try {
        await appFetch({ url, global: true }, dispatch);
    } catch (e) {
        response = e;
    }
    expect(response).toBe(fetchError().text());
    expect(okFactory).not.toHaveBeenCalled();
});

test("app fetch global success", async () => {
    globalAny.fetch = jest.fn().mockImplementation(fetchSuccess);
    const dispatch = jest.fn();

    await appFetch({ url, global: true }, dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: "loading/loadingShow" });
    expect(dispatch).toHaveBeenCalledWith({ type: "loading/loadingHide" });
    expect(dispatch).not.toHaveBeenCalledWith({ type: "message/messageShow" });
});

test("app fetch global error", async () => {
    globalAny.fetch = jest.fn().mockImplementation(fetchError);
    const dispatch = jest.fn();

    try {
        await appFetch({ url, global: true }, dispatch);
    } catch (e) {
        // empty
    }
    expect(dispatch).toHaveBeenCalledWith({ type: "loading/loadingShow" });
    expect(dispatch).toHaveBeenCalledWith({ type: "message/messageShow", payload: { text: "error", type: "danger" } });
    expect(dispatch).toHaveBeenCalledWith({ type: "loading/loadingHide" });
});
