import React from "react";
import { Link } from "react-router-dom";

const Locations = () => {
  return (
<main className="w-full mt-20 relative" style={{ backgroundImage: `url("../../images/landscape.png")`, backgroundSize: "75%", backgroundPosition: "top left", backgroundRepeat: "no-repeat" }}>
  <a href="#" className="go-down-btn" title="Scroll down">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1600px" height="200px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" className="z-10" style={{ position: 'relative', top: '90px' }}>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#AA98A9', stopOpacity: 1 }} />
          <stop offset="100%" style={{stopColor: '#D8BFD8', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="url(#grad)" />
      <image xlinkHref="../images/logo_short.png" x="40" y="40" width="25%" height="25%" />
      
      <path id="textPath" fill="none" d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z" />
      <text style={{ fontSize: '9px' }}>
        <textPath xlinkHref="#textPath">
          <tspan x="10">Lehighton</tspan>
          <tspan x="42" dx="30">Bethlehem</tspan>
          <tspan x="72" dx="60">Schnecksville</tspan>
          <tspan x="107" dx="90">Allentown</tspan>
        </textPath>
      </text>
    </svg>
  </a>



   {/* <div id="container">
        <div id="circle">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <g transform="rotate(30, 150, 150)">
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text fill="#000">
                  <textPath
                    className="space-evenly"
                    xlinkHref="#circlePath"
                  >
                    | Allentown | Lehighton | Schnecksville |{" "}
                    <tspan dx="-4">Bethlehem</tspan>{" "}
                  </textPath>
                </text>
              </g>
            </g>
            <foreignObject x="125" y="125" width="50" height="50" >
  <div className="bg-indigo-50">
    <img className="w-full h-full object-contain" src="../images/logo_short.png" alt="logo"></img>
  </div>
</foreignObject>
          </svg>
        </div>
      </div> */}
      <div className="mb-10">
        <p className="flex align-items py-4 mt-40">
          Please fill out our appointment request form to schedule an
          appointment with a skilled Allentown orthodontist at FreySmiles.
          Virtual consultations are also available if you prefer. You may also
          use the form to request a Smile Evaluation if this is your first trip
          to the orthodontist. During this no-obligation consultation, we can
          determine whether braces or Invisalign would be best for you. If you
          happen to reach us after hours, we will follow up with you the next
          business day.During this consultation, one of our award-winning
          orthodontists will talk to you about your lifestyle, examine your
          smile, and make recommendations for orthodontic treatment. The
          orthodontists at FreySmiles are Diamond Plus Invisalign providers.
        </p>
      </div>
      <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
        <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
          <div>
            <h2 className="py-4">Allentown</h2>
            <address>
              1251 South Cedar Crest Blvd, Suite 210<br />
              Allentown, PA 18103
            </address>              
                <div className="py-4 space-y-2">
                  <span className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 z-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    (610) 437-4748
                  </span>
                  <span className="flex gap-2 items-center transition-colors duration-500 linear text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 z-0">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      <Link className="underline" to="https://goo.gl/maps/jeFprQaeMQwUzwPx8" target="_blank">Get Directions</Link>
                  </span>
                </div>

              <h3>Hours of Operation</h3>
              <ul>
                <li>Mon 11:00 am - 7:00 pm</li>
                <li>Tue 11:00 am - 7:00 pm</li>
                <li>Wed 8:00 am - 5:30 pm</li>
                <li>Thu 7:00 am - 4:30 am</li>
              </ul>
            
          </div>
          <div>
            <p>
              If you live in the Allentown area and are ready to finally get the smile of your dreams, please contact us at our conveniently located Allentown office. Our dedicated staff works hard to ensure happy smiles throughout the orthodontic journey.We can answer any general questions or comments you may have for our FreySmiles Orthodontic team.
            </p>
          
          </div>
          <div>
            <figure className="h-full w-full">
              <img className="object-cover w-full h-full" src="../../images/office_interior.jpg" alt="view of interior office" />
            </figure>
          </div>
        </div>
      </section>

      <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
        <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
          <div>
            <h2 className="py-4">Lehighton</h2>
              <address>
                1080 Blakeslee Blvd Dr E<br />
                Lehighton, PA 18235
              </address>
              <div className="py-4 space-y-2">
                <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 z-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  (610) 437-4748
                </span>
                <span className="flex gap-2 transition-colors duration-500 linear text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 z-0">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <Link className="underline" to="https://goo.gl/maps/rcoLbjXmATgQn2t47" target="_blank">Get Directions</Link>                
                    </span>
                </div>
                <div className="">
                  
                </div>
              <h3>Hours of Operation</h3>
                <ul>
                  <li>Mon 11:00 AM - 7:00 PM</li>
                  <li>Tues 11:00 AM - 7:00 PM</li>
                  <li>Wed 8:00 AM - 5:30 PM</li>
                  <li>Thurs 7:00 AM - 4:30 PM</li>
                </ul>      
          </div>   
          <div>
          <p>
             Our newly renovated office in Lehighton is conveniently located
              minutes away from Jim Thorpe and Tamaqua. State of the art sterilization  The experienced Lehighton orthodontists at FreySmiles have
              transformed thousands of happy smiles through orthodontic treatment.
              We are dedicated to providing our patients with the highest quality
              braces and Invisalign treatment and beautiful results.
          </p>   
          </div>
          <div>
            <figure className="h-full w-full">
              <img className="object-cover w-full h-full" src="../../images/office_interior.jpg" alt="view of interior office" />
            </figure>
          </div>
        </div>
      </section>

      <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
        <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
          <div>
            <h2 className="py-4">Bethlehem</h2>
              <address>
                2901 Emrick Boulevard<br />
                Bethlehem, PA 18020
                <div className="py-4 space-y-2">
                  <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 z-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  (610) 437-4748
                  </span>
                  <span className="flex gap-2 transition-colors duration-500 linear text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 z-0">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <Link className="underline" to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8" target="_blank">Get Directions</Link>
                  </span>
                </div>
              </address>
              
              <h3>Hours of Operation</h3>
                <ul>
                  <li>Mon 11:00 AM - 7:00 PM</li>
                  <li>Tues 11:00 AM - 7:00 PM</li>
                  <li>Wed 8:00 AM - 5:30 PM</li>
                  <li>Thurs 7:00 AM - 4:30 PM</li>
                </ul>
          
              <Link to="" className="text-amber-800 transition-colors duration-500 linear">
                <h3>Bethlehem Office Virtual Tour</h3>
              </Link>
          </div>
          <div>
            <p>
              We invite you to take a virtual tour of the FreySmiles orthodontic
              office in Bethlehem, PA. You can explore our waiting room, our
              innovative technology, and our workspaces where we make smiles
              beautiful.
              Bethlehem is known for more than its robust historic district, its
              industrial history, and the Christmas Tree that lights up the Lehigh
              Valley. This city is also known for the beautiful smiles and
              straight teeth crafted by Dr. Gregg Frey and Dr. Daniel Frey at
              FreySmiles Orthodontics. FreySmiles Orthodontics has provided
              thousands of patients with happy, beautiful smiles throughout
              Bethlehem and Easton. We are extremely proud to be the region’s top
              Invisalign and Invisalign Teen provider.
            </p>
          </div>
          <div>
            <figure className="h-full w-full">
              <img className="object-cover w-full h-full" src="../../images/beth.heic" alt="view of interior office" />
            </figure>
          </div>
        </div>
      </section>

      <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
        <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
          <div>
            <h2 className="py-4">Schnecksville</h2>
              <address>
                4155 Independence Drive<br />
                Schnecksville, PA 18078
                <div className="py-4 space-y-2">
                  <span className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 z-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    (610) 437-4748
                  </span>
                  <span className="flex gap-2 transition-colors duration-500 linear text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 z-0">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <Link className="underline" to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6" target="_blank">Get Directions</Link>                  
                  </span>
                </div>
              </address>

              <h3>Hours of Operation</h3>
                <ul>
                  <li>Mon 11:00 AM - 7:00 PM</li>
                  <li>Tues 11:00 AM - 7:00 PM</li>
                  <li>Wed 8:00 AM - 5:30 PM</li>
                  <li>Thurs 7:00 AM - 4:30 PM</li>
                </ul>
          </div>
          <div>
          <p>
              Are you ready to join the thousands of beautiful smiles transformed
              through orthodontic treatment? At FreySmiles Orthodontics, our
              experienced orthodontists give patients lifelong confidence through
              braces and Invisalign treatment.
            </p>
          </div>
          <div>
            <figure className="h-full w-full">
              <img className="object-cover w-full h-full" src="../../images/sch.png" alt="view of interior office" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Locations;
