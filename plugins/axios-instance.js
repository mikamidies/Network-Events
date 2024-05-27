export default ({ $axios, redirect, error,i18n }, inject) => {
  const axiosInstance = $axios.create({
    baseURL: process.env.BASE_URL,
  });
  // axiosInstance.setHeader("Content-Type", "application/json");

  axiosInstance.onRequest((config) => {
    const ACCESS_TOKEN = localStorage.getItem("accessToken");
    config.headers.common["language"] = i18n.locale;
    if (ACCESS_TOKEN) {
      config.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
    }
    return config;
  });

  axiosInstance.onResponse((response) => {
    return response;
  });

  axiosInstance.onError((e) => {
    // const errors = [404, 500];
    // if (errors.includes(e.response.status)) {
    //   error({
    //     statusCode: e.response.status,
    //     message: "This page could not be found",
    //     layout: "error",
    //   });
    // }

    return Promise.reject(e);
  });
  inject("axiosInstance", axiosInstance);
};
