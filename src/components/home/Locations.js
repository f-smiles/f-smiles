import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Map, { FullscreenControl, GeolocateControl, NavigationControl } from "react-map-gl";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      location: "Allentown",
      addressLine1: "1251 S Cedar Crest Blvd",
      addressLine2: "Suite 210 Allentown, PA 18103",
    },
    {
      location: "Bethlehem",
      addressLine1: "2901 Emrick Boulevard",
      addressLine2: "Bethlehem, PA 18020",
    },
    {
      location: "Schnecksville",
      addressLine1: "4155 Independence Drive",
      addressLine2: "Schnecksville, PA 18078",
    },
    {
      location: "Lehighton",
      addressLine1: "1080 Blakeslee Blvd Dr E",
      addressLine2: "Lehighton, PA 18235",
    }
  ];

  const locationMapStyles = {
    Allentown: process.env.REACT_APP_MAPBOX_STYLE_ALLENTOWN_MONOCHROME,
    Bethlehem: process.env.REACT_APP_MAPBOX_STYLE_BETHLEHEM_MONOCHROME,
    Schnecksville: process.env.REACT_APP_MAPBOX_STYLE_SCHNECKSVILLE_MONOCHROME,
    Lehighton: process.env.REACT_APP_MAPBOX_STYLE_LEHIGHTON_MONOCHROME,
  };

  return (
    <section id="locations" className="min-h-screen bg-primary80">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto md:flex-row">
        {/* left */}
        <div className="w-1/2 h-full px-12 py-12 space-y-4 overflow-auto md:px-6 md:py-6 md:w-1/2">
          <span id="locations-heading" className="flex items-baseline">
            <h2 className="text-3xl font-medium uppercase lg:text-4xl text-secondary50">
              Our Locations
            </h2>
            <img
              src="../../images/pin.svg"
              alt="pin"
              className="w-auto ml-2 transition-all duration-300 rotate-45 max-h-[36px] hover:animate-bounce"
            />
          </span>
          <p className="text-primary10">
            We have 4 incredible offices for your ultimate convenience. Our
            orthodontists and FreySmiles Team are excited to serve families in
            the Allentown, Bethlehem, Easton, Schnecksville and Lehighton
            communities.
          </p>
          <Link
            className="inline-block px-6 py-4 transition duration-300 ease-linear rounded-full underline-offset-8 text-primary95 bg-primary50 hover:bg-secondary50 group"
            to="/book-now"
          >
            Schedule an evaluation today
            <span className="block h-0.5 transition-all ease-linear duration-500 max-w-0 group-hover:max-w-full bg-secondary80 rounded-full"></span>
          </Link>
          {/* locations list */}
          <div className="flex flex-col space-y-4">
            <button
              className={`${
                selectedLocation === null ? "text-secondary50" : ""
              } self-end transition-all duration-300 ease-linear w-max text-primary20 hover:text-secondary50`}
              onClick={() => setSelectedLocation(null)}
            >
              Show All Locations
            </button>
            <dl className="border-t divide-y border-primary70 divide-primary70">
              {locations.map((l) => (
                <div
                  key={l.location}
                  className={`
                      ${
                        selectedLocation === l.location
                          ? "bg-primary30 text-primary95"
                          : ""
                      } 
                      px-4 py-6 transition-all duration-300 ease-linear cursor-pointer sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 hover:bg-primary50 hover:text-primary95 group text-primary20`}
                  onClick={() => setSelectedLocation(l.location)}
                >
                  <dt className="text-sm font-medium leading-6 md:ml-4 group">
                    {l.location}
                  </dt>
                  <dd className="mt-1 mr-4 text-sm leading-6 sm:col-span-2 sm:mt-0">
                    <span className="flex items-center justify-between">
                      <p className="leading-normal">
                        {l.addressLine1}
                        <br />
                        {l.addressLine2}
                      </p>
                      <ChevronRightIcon className="w-4 h-4" />
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {/* mobile all locations map */}
          <div className="w-full my-6 h-80 md:hidden">
            <Map
              initialViewState={{
                longitude: -75.511481,
                latitude: 40.684438,
                zoom: 9.0,
                cooperativeGestures: true,
                showZoom: true,
              }}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              mapStyle={
                locationMapStyles[selectedLocation] ||
                `${process.env.REACT_APP_MAPBOX_STYLE_ALL_LOCATIONS}`
              }
            />
          </div>
        </div>
        {/* right */}
        <div className="hidden w-full h-full md:block md:w-1/2">
          <div className="w-full h-80 md:min-h-screen">
            <Map
              initialViewState={{
                longitude: -75.511481,
                latitude: 40.684438,
                zoom: 9.0,
                cooperativeGestures: true,
                showZoom: true,
              }}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              mapStyle={
                locationMapStyles[selectedLocation] ||
                `${process.env.REACT_APP_MAPBOX_STYLE_ALL_LOCATIONS}`
              }
            >
              <FullscreenControl />
              <NavigationControl />
              <GeolocateControl />
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
