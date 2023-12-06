export default ({ $axios, redirect, error }, inject) => {
  const axiosInstance = $axios.create({
    baseURL: process.env.BASE_URL || "https://networking.pythonanywhere.com/api",
  });
  // axiosInstance.setHeader("Content-Type", "application/json");

  axiosInstance.onRequest((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
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
