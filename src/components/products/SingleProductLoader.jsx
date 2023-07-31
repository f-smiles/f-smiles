import React from 'react'

export default function SingleProductLoader() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div className="w-full">
            <div className="w-full h-96 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
            <div className="flex items-center gap-4">
              <div className="mt-4 w-1/4 h-24 bg-gray-300 rounded-lg dark:bg-gray-600"></div> 
              <div className="mt-4 w-1/4 h-24 bg-gray-300 rounded-lg dark:bg-gray-600"></div> 
              <div className="mt-4 w-1/4 h-24 bg-gray-300 rounded-lg dark:bg-gray-600"></div> 
              <div className="mt-4 w-1/4 h-24 bg-gray-300 rounded-lg dark:bg-gray-600"></div> 
            </div>
          </div>
          <div className="w-full max-w-md mx-auto animate-pulse">
            <h1 aria-hidden="true" className="h-4 bg-gray-300 rounded-lg w-3/4 dark:bg-gray-600"></h1>
            <h2 aria-hidden="true" className="w-16 h-3 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h2>
            <p aria-hidden="true" className="w-full h-2 mt-8 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p aria-hidden="true" className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p aria-hidden="true" className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-8 mt-6">
                <span className="flex items-center gap-2">
                  <p aria-hidden="true" className="w-12 h-12 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  <p aria-hidden="true" className="w-12 h-12 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  <p aria-hidden="true" className="w-12 h-12 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </span>
                <div className="w-3/4 h-12 place-self-end bg-gray-300 rounded-lg dark:bg-gray-600"></div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
