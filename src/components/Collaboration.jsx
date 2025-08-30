import { useState } from "react";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  const [curveActivate, setCurveActivate] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 640) setCurveActivate(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 640) setCurveActivate(false);
  };

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
              </li>
            ))}
          </ul>

          <Button
            className="animate-float"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Try it now
          </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div
            className={`mt-2 relative left-1/2 flex w-[22rem] aspect-square border-4 rounded-full -translate-x-1/2 scale:75 md:scale-100  duration-[1.5s] ease-in-out ${
              curveActivate ? "brightness-110" : "border-n-6"
            }`}
          >
            <div
              className={`flex w-60 aspect-square m-auto border-4  rounded-full duration-[3s] ease-in-out ${
                curveActivate ? "brightness-110" : "border-n-6"
              }`}
            >
              <div className="relative w-[8rem] aspect-square m-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-conic-gradient rounded-full animate-spin [animation-duration:3s]"></div>
                <div className="absolute inset-1 bg-n-8 rounded-full"></div>
                <img
                  src={brainwaveSymbol}
                  width={48}
                  height={48}
                  alt="brainwave"
                  className="relative z-10"
                />
                <ul
                  className="absolute inset-0 w-full h-full 
                    animate-spin [animation-duration:30s]"
                  style={{
                    animationPlayState: curveActivate ? "running" : "paused",
                  }}
                >
                  {collabApps.map((item, index) => (
                    <li
                      key={item.id}
                      className={`absolute`}
                      style={{
                        left: 40,
                        top: 10,
                        transform: `rotate(${
                          index * (360 / collabApps.length)
                        }deg) translateY(-9rem)`,
                        transformOrigin: "center bottom",
                      }}
                    >
                      <div className="flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl items-center justify-center p-2">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="m-auto"
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <LeftCurve activate={curveActivate} />
                <RightCurve activate={curveActivate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
