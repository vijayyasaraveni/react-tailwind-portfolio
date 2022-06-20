import React from "react";
import Layout from "../components/Layout";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
function Home() {
  return (
    <Layout>
      <div>
        {/* Intro Section */}
        <div className="min- h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 border-white transform rotate-12 md:rotate-0 lg:mx-10 bg-theme">
            <div className="h-1/2">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
                Hi, i am <b className="text-yellow-500">Vijaya Kumar</b>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos="slide-left">
                FullStack <b className="text-red-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-20">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-8">
            Technologies, I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20"
            />
            <FaAngular
              size={180}
              color="red"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJava
              size={180}
              color="orange"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20"
            />
            <FaBootstrap
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={180}
              color="green"
              className="w-full text-center mt-20"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20"
            />
            <FaCss3
              size={180}
              color="cadetblue"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>

        {/* javasript Buff */}

        <div className="my-20 ">
          <div className="bg-primary text-center  h-52">
            <h1 className=" text-white font-bold text-4xl py-10">
              Yes, You are Right... I am javasript Buff
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-xl my-10 font-semibold md:px-5 px-14 py-10 ">
              JavaScript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main Use Cases: Web Development.
            </p>
          </div>
        </div>

        {/* Dev Stack representaion */}

        <div className="my-20 ">
          <div className="bg-red-400 text-center  h-52">
            <h1 className=" text-white font-bold text-4xl py-10">
              My Dev Stack
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_vybwn7df.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div className="text-left">
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />
                <p className="font-semibold my-2">HTML/CSS</p>
                <p className="font-semibold my-2">React</p>
                <p className="font-semibold my-2">Redux</p>
                <p className="font-semibold my-2">JavaScript</p>
                <p className="font-semibold my-2">Angular</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold text-center">UI/UX</h1>
                <hr />
                <p className="font-semibold my-2">BootStrap</p>
                <p className="font-semibold my-2">Tailwind</p>
                <p className="font-semibold my-2">Antd</p>
                <p className="font-semibold my-2">Meterial UI</p>
                <p className="font-semibold my-2">Scemantic UI</p>
              </div>

              <div className="text-right">
                <h1 className="text-xl font-bold ">Back end & DB</h1>
                <hr />
                <p className="font-semibold my-2">Node JS</p>
                <p className="font-semibold my-2">Express</p>
                <p className="font-semibold my-2">Php</p>
                <p className="font-semibold my-2">MySQL</p>
                <p className="font-semibold my-2">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        {/*  Dev Info */}

        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            Who is Vijaya ?
          </h1>
          <div className="h-screen relative">
            <div className="h-full">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_dcatp5cr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">
                Hai, Hello
                <hr></hr>
                <pre className="md:text-sm text-xl m-5 font-mont">
                  {JSON.stringify(
                    {
                      name: "Vijaya Kumar",
                      age: null,
                      gender: "male",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
