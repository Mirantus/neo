interface ApiOptions {
    body?: string;
}

export const request = (apiUrl: string, apiMethod = "GET", apiData: {} = {}, apiOptions: ApiOptions = {}) => {
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

export const fetch = async (apiUrl: string, apiMethod = "GET", apiData: {} = {}, apiOptions: ApiOptions = {}) => {
    let responseText;

    try {
        const response = await request(apiUrl, apiMethod, apiData, apiOptions);
        responseText = await response.clone().text();

        if (response.status === 200) {
            try {
                return await response.json();
            } catch (e) {
                return responseText;
            }
        }
    } catch (error) {
        console.log(error);
        throw "Ошибка отправки данных";
    }

    throw responseText;
};
