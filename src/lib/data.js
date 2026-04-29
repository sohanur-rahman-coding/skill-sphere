export const PopularData = async () => {
  const res = await fetch("https://skill-sphere-git-main-sohanur-rahman-codings-projects.vercel.app/data.json");
  const data = await res.json();
  return data;
};

