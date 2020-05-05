interface IApiOptions {
    body?: string;
}

export const request = (apiUrl: string, apiMethod: string = "GET", apiData: {} = {}, apiOptions: IApiOptions = {}) => {
    const globalAny: any = global;
    let url = APP_ENV.apiUrl + apiUrl;
    const options = {
        method: apiMethod,
        ...apiOptions,
    };

    if (Object.keys(apiData).length) {
        if (apiMethod === "GET") {
            url += `?${Object.entries(apiData)
                .map(([key, val]) => `${key}=${val}`)
                .join("&")}`;
        } else {
            options.body = JSON.stringify(apiData);
        }
    }

    return globalAny.fetch(url, options);
};

export const fetch = (apiUrl: string, apiMethod: string = "GET", apiData: {} = {}, apiOptions: IApiOptions = {}) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await request(apiUrl, apiMethod, apiData, apiOptions);
            const responseText = await response.clone().text();

            if (response.status === 200) {
                try {
                    resolve(await response.json());
                } catch (e) {
                    resolve(responseText);
                }
            } else {
                reject(responseText);
            }
        } catch (error) {
            reject("Ошибка отправки данных");
            console.log(error);
        }
    });
