"use client";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/watermeter");
  }, [])
  return(<></>);
};

export default Home;