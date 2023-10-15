import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="w-full px-10 py-3 bg-white flex flex-row items-center gap-6 flex-wrap">
        <div className="px-2 bg-transparent flex flex-row justify-evenly items-center space-x-4">
          <Image
            alt="logo"
            src={"https://i.ibb.co/k8PFbGX/click-n-eat-logo.png"}
            width={65}
            height={65}
            className="rounded-md"
          />
          <div className="ml-0 mr-0">
            <input
              type="text"
              placeholder="your location"
              className="form-control"
            />
          </div>
        </div>

        <div className="flex flex-grow mr-1">
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            placeholder="search for restaurants"
            className="form-control w-full"
          />
        </div>
        <div className="flex flex-row items-center space-x-4">
          <a
            href="#"
            className="border-2 px-5 py-3 text-center rounded-lg bg-green-300 border-green-600 text-sm capitalize font-normal"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-5 py-3 text-center flex gap-3 border-2 text-sm font-normal"
          >
            <span></span>
            Login
          </a>
        </div>
      </header>
  )
}

export default Header