// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/0xMerakiSec`)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-center m-4 p-4 bg-gray-800 text-3xl font-semibold shadow-2xl rounded-2xl  text-white flex gap-x-8">
      <img
        width={300}
        src={data?.avatar_url}
        alt={`Git profile picture`}
        className="text-center rounded-full p-4"
      />
      Github Followers: {data?.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/0xMerakiSec");
  return response.json();
};
