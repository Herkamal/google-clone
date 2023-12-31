import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = React.useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/1200px-Google_2011_logo.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        ></Image>
        <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          ></XIcon>
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 "></MicrophoneIcon>
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"></SearchIcon>
          <button hidden type="sumbit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='https://cdn.pixabay.com/photo/2023/02/24/00/41/ai-generated-7809880_960_720.jpg'></Avatar>
      </div>
      <HeaderOptions></HeaderOptions>
    </header>
  );
}

export default Header;
