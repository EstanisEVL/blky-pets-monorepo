const getSuspender = (promise: Promise<any>) => {
  let status: string = "pending";

  let response: Promise<any | string>;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export const fetchData = (url: string) => {
  const promise: Promise<any> = fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  return getSuspender(promise);
};
