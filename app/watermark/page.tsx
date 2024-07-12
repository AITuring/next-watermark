"use client";
import { useEffect, useState, use } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "Hello, Dashboard!",
  };
}
const WaterMark: React.FC = () => {
  const [data, setData] = useState<string>("");

  const { message } = use(getData());

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default WaterMark;
