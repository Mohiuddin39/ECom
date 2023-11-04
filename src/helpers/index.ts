export const getProducts = async () => {
  const res = fetch("https://jsonserver.reactbd.com/amazonpro", {});
  if (!(await res).ok) {
    throw new Error("Failed to Fetch");
  }
  return (await res).json();
};

export const getPhones = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/phone",
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Phones");
  }

  return res.json();
};
export const getPhoneCases = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/phone case",
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Phone case");
  }

  return res.json();
};
export const getWatches = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/watch",
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Watch");
  }

  return res.json();
};
export const getAccessories = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/accessories",
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Accessories");
  }

  return res.json();
};
