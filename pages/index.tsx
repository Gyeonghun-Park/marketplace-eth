import { Navbar, Footer } from '@components/common';

function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="relative px-4 mx-auto max-w-7xl">
          <Navbar />
          <div className="fit">
            {/* ------ HERO STARTS ------*/}
            <section className="text-left lg:2/6 my-28">
              <div className="text-6xl font-semibold leading-none text-gray-900">
                Grow your career as a developer
              </div>
              <div className="mt-6 text-xl antialiased font-light text-true-gray-500">
                Learn programming and web development the easy way! Get
                unlimited access to all of our courses.
              </div>
              <div className="flex mt-5 sm:mt-8 lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </section>
            {/* ------ HERO ENDS ------*/}

            {/* ------ BREADCRUMBS STARTS ------*/}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                <li className="pr-4">
                  <a href="#">Buy</a>
                </li>
                <li className="px-4">
                  <a href="#">My Orders</a>
                </li>
                <li className="px-4">
                  <a href="#">All Orders</a>
                </li>
              </ol>
            </nav>
            {/* ------ BREADCRUMBS ENDS ------*/}

            {/* ------ ADDRESS STARTS ------*/}
            <section className="text-white bg-indigo-600">
              <div className="p-8">
                <h1 className="text-2xl">
                  Hello, 0xd9D5cD41Fe921A743F2b5Fe71CC3070F5C176208
                </h1>
                <h2 className="mb-5 text-xl subtitle">
                  I hope you are having a great day!
                </h2>
                <div className="flex items-center justify-between">
                  <div className="sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent rounded-md hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                      >
                        Learn how to purchase
                      </a>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>Currently on </span>
                      <strong className="text-2xl">
                        Ethereum Main Network
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ------ ADDRESS ENDS ------*/}

            {/* ------ CURRENCY STARTS ------*/}
            <div className="grid grid-cols-4 mb-5">
              <div className="flex items-stretch flex-1 text-center">
                <div className="p-10 border rounded-md drop-shadow">
                  <div>
                    <span className="text-2xl font-bold">ETH = 3145.1$</span>
                  </div>
                  <p className="text-xl text-gray-500">Current eth Price</p>
                </div>
              </div>
              <div className="flex items-stretch flex-1 text-center">
                <div className="p-10 border rounded-md drop-shadow">
                  <div>
                    <span className="text-2xl font-bold">0.004769 = 15$</span>
                  </div>
                  <p className="text-xl text-gray-500">Price per course</p>
                </div>
              </div>
            </div>
            {/* ------ CURRENCY ENDS ------*/}

            {/* ------ ORDER INFO STARTS ------*/}
            <div className="mb-3 overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Next JS & Typescript with Shopify Integration - Full Guide
                </h3>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                  0.0065 ETH
                </p>
              </div>

              <div className="border-t border-gray-200">
                <dl>
                  <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Order ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Proof</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:px-6">
                    <div className="mb-3 bg-green-100 rounded-xl">
                      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-3 lg:px-3">
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex items-center flex-1 w-0">
                            <p className="ml-3 font-medium text-green-900 truncate">
                              <span className="hidden md:inline">
                                Purchased!
                              </span>
                            </p>
                          </div>
                          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
                            <button
                              type="button"
                              className="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                              <span className="sr-only">Dismiss</span>
                              <svg
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow-md">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent rounded-md hover:bg-gray-100 md:py-4 md:text-md md:px-10"
                        >
                          Watch the course
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="relative mt-1 rounded-md w-72">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block p-4 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                          placeholder="x@y.com"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <div className="flex lg:justify-start">
                            <div className="rounded-md shadow">
                              <a
                                href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-sm text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:px-10"
                              >
                                Search
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative inline-block w-full text-gray-700">
                      <select
                        className="h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none w-72 focus:shadow-outline"
                        placeholder="Regular input"
                      >
                        <option>A regular sized select input</option>
                        <option>Another option</option>
                        <option>And one more</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            {/* ------ ORDER INFO ENDS ------*/}

            {/* ------ COURSE CARD STARTS ------*/}
            <section className="grid grid-cols-2 gap-4 mb-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="object-cover w-full h-48 md:w-48"
                        src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                        alt="Man looking at item at a store"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                        Case study
                      </div>
                      <a
                        href="#"
                        className="block mt-1 text-lg font-medium leading-tight text-black hover:underline"
                      >
                        Finding customers for your new business
                      </a>
                      <p className="mt-2 text-gray-500">
                        Getting a new business off the ground is a lot of hard
                        work. Here are five ideas you can use to find your first
                        customers.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            {/* ------ COURSE CARD ENDS ------*/}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
