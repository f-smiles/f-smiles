import React from 'react'

export default function FeaturedReviews() {
  return (
<div className="relative min-h-screen flex items-center justify-center ml-60 mr-60">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-0 top-0 w-full h-full transition-opacity duration-500 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-x-0 bottom-0 p-4 text-black">
                <h1 className="text-xl text-teal-700">{slide.content}</h1>
              </div>
            </div>
          ))}
          <button
            className="absolute -left-20 top-1/2 transform -translate-y-20 px-4 py-2 rounded"
            onClick={prevSlide}
          >
            <div className="border border-black rounded-full inline-flex p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </button>
          <button
            className="absolute -right-20 top-1/2 transform -translate-y-20 px-4 py-2 rounded"
            onClick={nextSlide}
          >
            <div className="border border-black rounded-full inline-flex p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>  )
}
