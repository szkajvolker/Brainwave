import { curve1, curve2 } from "../../assets";

export const RightCurve = ({ activate }) => {
  return (
    <div className="hidden absolute top-1/2 left-[225px] w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img
        src={curve2}
        width={162}
        height={76}
        alt="Curve 2"
        style={{
          filter: activate ? "brightness(200%)" : "brightness(100%)",
          transition: "filter 0.3s ease",
        }}
      />
    </div>
  );
};

export const LeftCurve = ({ activate }) => {
  return (
    <div className="hidden absolute top-1/2 right-[225px] w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img
        src={curve1}
        width={522}
        height={182}
        alt="Curve 1"
        style={{
          filter: activate ? "brightness(200%)" : "brightness(100%)",
          transition: "filter 0.3s ease",
        }}
      />
    </div>
  );
};
