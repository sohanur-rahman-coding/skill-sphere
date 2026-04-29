
export const PopularData = async () => {
  const res = await fetch("http://localhost:3000/data.json",{cache:'no-store'});
  const data = await res.json();
  return data;
};

