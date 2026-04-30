
export const PopularData = async () => {
  const res = await fetch("https://skill-sphere-six-ruddy.vercel.app/data.json",{cache:'no-store'});
  const data = await res.json();
  console.log(data);
  return data;
};

//  export const Popular = async (search='') => {
//   const res = await fetch(`https://skill-sphere-six-ruddy.vercel.app/data.json?search=${search}`);
//   const data = await res.json();
  
//   return data;
// };
