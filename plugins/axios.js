export default function ({$axios, redirect, error, i18n}, inject) {
  const axios = $axios.create({
    baseURL:
    process.env.BASE_URL
  });
  axios.setHeader("Content-Type", "application/json");
  axios.onRequest((config) => {
    config.headers.common["language"] = i18n.locale;
    return config;
  });
  axios.onResponse((response) => {
    return response;
  });

  axios.onError((err) => {
    console.log(err);
    // const errors = [404, 500];
    // if (errors.includes(err.response.status)) {
    //   error({
    //     statusCode: err.response.status,
    //     message: "This page could not be found",
    //     layout: "error",
    //   });
    // }
    return Promise.reject(err);
  });
  inject("axios", axios);
}
