import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        />
      </Head>
      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"></ViewGridIcon>
          <Avatar url="https://cdn.pixabay.com/photo/2023/02/24/00/41/ai-generated-7809880_960_720.jpg"></Avatar>
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/1200px-Google_2011_logo.png"
          height={100}
          width={300}
        ></Image>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"></SearchIcon>
          <input type="text" className=" focus:outline-none flex-grow " />
          <MicrophoneIcon className="h-5"></MicrophoneIcon>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
