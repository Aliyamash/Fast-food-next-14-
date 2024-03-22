const getFetch = async (url) => {
  const res = await fetch(`http://localhost:8000/api${url}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error(`مشکل در دریافت اطلاعات کد : ${res.status}`);
  }
};
const postFetch = async (url, body, headers = {}) => {
  const res = await fetch(`http://localhost:8000/api${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

export { getFetch, postFetch };
