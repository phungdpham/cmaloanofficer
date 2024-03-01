import React, { useState } from "react";
import Accordian from './Accordian'
import { Hind } from "next/font/google";


export default function Footer() {
  const service = [
    " 1-on-1 Coaching",
    "Company Review",
    "Accounts Review",
    "HR Consulting",
    "SEO Optimisation",
  ];
  const company = ["About", "Meet the Team", "Accounts Review"];
  const helping = ["Contact", "FAQs", "Live Chat"];
  const legal = [
    "Accessibility",
    "Returns Policy",
    "Refund Policy",
    " Hiring Statistics",
  ];

  // const hind = Hind({
  //   subsets: ["latin"],
  //   weight: ["300", "400", "500", "600", "700"],
  // });

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setState({ ...state, phoneNumber: numericValue });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      ...state,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        setLoading(false);
        const response = await res.json();
        if (!response.error) {
          clearState();
          toast(response.message);
        } else {
          clearState();
          toast("something went wrong");
        }
      })
      .catch((e) => {
        setLoading(false);
        clearState();
        toast("something went wrong");
      });
  };


  return (
    <div id="footer" className="mt-[5px]">
      <div className="bg-white  pt-0 lg:pt-[100px]">
        <div
          className="max-w-[1140px] bg-blue-500 rounded-xl  px-[20px] sm:px-[64px] py-[64px] m-auto"
          style={{ transform: "translate(0px, 70px)" }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="text-[30px] text-white text-center lg:text-start">
              Contact Form Here
              </p>
              <p className="text-white font-sans text-center lg:text-start">
                Contact Form Here
              </p>
            </div> 
          
            
          </div>
        </div>
      </div>

      <footer className="bg-[#232323]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="container mx-auto p-4 md:hidden block mt-10">
            <Accordian  title='Services' content={ service } />
            <Accordian  title='Company' content={ company} />
            <Accordian  title='Helpful Links' content={ helping } />
            <Accordian  title='Legal Policy' content={ legal} />

            <div className="md:hidden block">
            
              <p className="mt-4 max-w-xs text-[#7b858b] font-sans text-center">
                You Deserve It To Be Seen!
              </p>
              <p className="text-xs text-[#7b858b] font-sans text-center mt-5">
                &copy; 2023. edubaba
              </p>
            </div>
          </div>

        
          <div className="xl:max-w-6xl 2xl:max-w-7xl px-10 md:px-20 xl:px-44 mx-auto sm:py-10 overflow-hidden">
            <div className="flex  flex-wrap justify-between items-center">
          
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="Linkedin"
                >
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Linkedin
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="Instagram"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Instagram
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="Gmail"
                >
                 <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg> 
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Gmail
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
