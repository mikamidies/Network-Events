export default ({ $axios, redirect, error }, inject) => {
  const axiosInstance = $axios.create({
    baseURL: process.env.API_BASE_URL || "localhost:3000",
  });
  axiosInstance.setHeader("Content-Type", "application/json");

  axiosInstance.onRequest((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.common["Authorization"] = `Bearer toekn`;
    }
    return config;
  });

  axiosInstance.onResponse((response) => {
    return response;
  });

  axiosInstance.onError((e) => {
    const errors = [404, 500];
    if (errors.includes(e.response.status)) {
      error({
        statusCode: e.response.status,
        message: "This page could not be found",
        layout: "error",
      });
    }

    return Promise.reject(error);
  });
  inject("axiosInstance", axiosInstance);
};
