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
    <>
      <section id="locations" className="min-h-screen bg-primary80">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-screen-lg mx-auto md:flex-row">
          {/* left */}
          <div className="w-full h-full px-12 py-12 space-y-4 overflow-auto md:p-6 md:w-1/2">
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
                className="self-end transition-all duration-300 ease-linear w-max text-primary20 hover:text-secondary50"
                onClick={() => setSelectedLocation(null)}
              >
                Show All Locations
              </button>
              <dl className="border-t divide-y border-primary70 divide-primary70">
                {locations.map((l) => (
                  <div
                    key={l.location}
                    className={`
                      ${selectedLocation === l.location ? 'bg-primary50 text-primary95' : ''} 
                      px-4 py-6 transition-all duration-300 ease-linear cursor-pointer sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 hover:bg-primary50 hover:text-primary95 group text-primary20` }
                    onClick={() => setSelectedLocation(l.location)}
                  >
                    <dt className="ml-4 text-sm font-medium leading-6 group">
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
      <section id="our-locations" className="hidden py-24">
        <span id="locations-heading" className="flex items-baseline mb-6">
          <h2 className="text-3xl font-medium uppercase lg:text-4xl text-secondary50">
            Our Locations
          </h2>
          <img
            src="../../images/pin.svg"
            alt="pin"
            className="ml-2 w-[3%] h-auto transition-all duration-300 hover:animate-bounce rotate-45"
          />
        </span>
        <div className="flex justify-between gap-4">
          <div className="w-1/5">
            <p>
              We have 4 incredible offices for your ultimate convenience. Our
              orthodontists and FreySmiles Team are excited to serve families in
              the Allentown, Bethlehem, Easton, Schnecksville and Lehighton
              communities.
              <br />
              <Link
                className="underline transition duration-300 ease-linear underline-offset-8 text-tertiary60 hover:text-tertiary80"
                to="/book-now"
              >
                Schedule an evaluation today.
              </Link>
            </p>
          </div>
          <div id="cards-container" className="flex w-4/5 gap-4">
            <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
              <div className="w-full h-80">
                <Map
                  initialViewState={{
                    longitude: -75.517846,
                    latitude: 40.566256,
                    zoom: 14,
                    cooperativeGestures: true,
                  }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_ALLENTOWN}`}
                >
                  <FullscreenControl />
                  <NavigationControl showCompass={false} />
                </Map>
              </div>

              <figcaption className="w-full py-8 text-center text-secondary50 bg-secondary99">
                <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                  Allentown
                </h3>

                <p className="py-2 text-sm">
                  1251 S Cedar Crest Blvd Suite 210
                  <br />
                  Allentown, PA 18103
                </p>

                <Link
                  className="underline transition-colors ease-linear text-tertiary60 hover:text-tertiary80"
                  to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </figcaption>

              <button
                className="w-full py-6 uppercase duration-500 ease-in-out rounded-bl-3xl rounded-br-3xl bg-primary30 text-primary95 hover:bg-tertiary60"
                type="button"
              >
                <Link to="/allentown">Book Now</Link>
              </button>
            </div>

            <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
              <div className="w-full h-80">
                <Map
                  initialViewState={{
                    longitude: -75.296074,
                    latitude: 40.662953,
                    zoom: 14,
                    cooperativeGestures: true,
                  }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_BETHLEHEM}`}
                >
                  <FullscreenControl />
                  <NavigationControl showCompass={false} />
                </Map>
              </div>

              <figcaption className="w-full py-8 text-center text-secondary50 bg-secondary99">
                <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                  Bethlehem
                </h3>

                <p className="py-2 text-sm">
                  2901 Emrick Boulevard
                  <br />
                  Bethlehem, PA 18020
                </p>

                <Link
                  className="underline transition-colors ease-linear text-tertiary60 hover:text-tertiary80"
                  to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </figcaption>

              <button
                className="w-full py-6 uppercase duration-500 ease-in-out bg-primary30 rounded-bl-3xl rounded-br-3xl text-primary95 hover:bg-tertiary60"
                type="button"
              >
                <Link to="/bethlehem">Book Now</Link>
              </button>
            </div>

            <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
              <div className="w-full h-80">
                <Map
                  initialViewState={{
                    longitude: -75.598906,
                    latitude: 40.660677,
                    zoom: 14,
                    cooperativeGestures: true,
                  }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_SCHNECKSVILLE}`}
                >
                  <FullscreenControl />
                  <NavigationControl showCompass={false} />
                </Map>
              </div>

              <figcaption className="w-full py-8 text-center bg-secondary99 text-secondary50">
                <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                  Schnecksville
                </h3>

                <p className="py-2 text-sm">
                  4155 Independence Drive
                  <br />
                  Schnecksville, PA 18078
                </p>

                <Link
                  className="underline transition-colors ease-linear text-tertiary60 hover:text-tertiary80"
                  to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </figcaption>

              <button
                className="w-full py-6 uppercase duration-500 ease-in-out text-primary95 bg-primary30 rounded-bl-3xl rounded-br-3xl hover:bg-tertiary60"
                type="button"
              >
                <Link to="/schnecksville">Book Now</Link>
              </button>
            </div>

            <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
              <div className="w-full h-80">
                <Map
                  initialViewState={{
                    longitude: -75.73046,
                    latitude: 40.8171,
                    zoom: 14,
                    cooperativeGestures: true,
                  }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_LEHIGHTON}`}
                >
                  <FullscreenControl />
                  <NavigationControl showCompass={false} />
                </Map>
              </div>

              <figcaption className="w-full py-8 text-center text-secondary50 bg-secondary99">
                <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                  Lehighton
                </h3>

                <p className="py-2 text-sm">
                  1080 Blakeslee Blvd Dr E<br />
                  Lehighton, PA 18235
                </p>

                <Link
                  className="underline transition-colors ease-linear text-tertiary60 hover:text-tertiary80"
                  to="https://goo.gl/maps/rcoLbjXmATgQn2t47"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </figcaption>

              <button
                className="w-full py-6 uppercase duration-500 ease-in-out text-primary95 bg-primary30 rounded-bl-3xl rounded-br-3xl hover:bg-tertiary60"
                type="button"
              >
                <Link to="/lehighton">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
