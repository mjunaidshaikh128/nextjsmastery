import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("Hyyy broo");
  return (
    <>
      <h1 className="text-3xl">Hello World</h1>
      <Hello />
    </>
  );
}
