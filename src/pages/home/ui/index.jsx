import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nout from "../../../assets/images/utya_nout.svg";
import Phone from "../../../assets/images/utya_phone.svg";
export const Home = () => {
  const [hovered, setHovered] = useState(null); // "devices" | "instruction" | null

  // const getBgColor = (btn) => {
  //   if (hovered === null) return "bg-[#006FEE]";
  //   return hovered === btn ? "bg-[#006FEE]" : "bg-[#A1A1AA]";
  // };

  useEffect(() => {
    setHovered("devices");
  }, []);
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="max-w-lg w-[500px] ">
          <div className="flex m-0-auto flex-col justify-end items-center h-dvh p-4 gap-4">
            <div className="flex justify-center items-center mb-4">
              {hovered === "devices" ? (
                <div className="flex flex-col items-center text-center gap-y-2 max-w-[280px]">
                  <img src={Nout} alt="Nout" />
                </div>
              ) : (
                <div className="flex flex-col items-center text-center gap-y-2 max-w-[280px]">
                  <img src={Phone} alt="Nout" />
                </div>
              )}
            </div>
            <h1 className="font-semibold text-white text-2xl text-center leading-tight">
              На каком устройстве <br /> нужно настроить VPN?
            </h1>
            <p className="text-lg leading-tight text-center font-normal text-gray-400">
              Выберите своё устройство <br /> из списка ниже
            </p>
            <div className="w-full justify-center flex items-center gap-3 group">
              <Link
                to="/notebook"
                onMouseOver={() => setHovered("devices")}
                className={`${
                  hovered === "devices" ? "bg-[#006FEE]" : "bg-[#A1A1AA]"
                } hover:bg-[#006FEE] text-white font-medium text-center cursor-pointer text-xl flex justify-center items-center h-[52px] rounded-[17px] w-full max-w-lg px-2 active:opacity-75`}
              >
                Компьютер
              </Link>

              <Link
                to="/phone"
                onMouseOver={() => setHovered("instruction")}
                className={`${
                  hovered === "instruction" ? "bg-[#006FEE]" : "bg-[#A1A1AA]"
                } hover:bg-[#006FEE] text-white font-medium text-center cursor-pointer text-xl flex justify-center items-center h-[52px] rounded-[17px] w-full max-w-lg px-2 active:opacity-75`}
              >
                Телефон
              </Link>
            </div>
            <div className="p-0 bottom-10">
              <Link
                to="/term"
                className="text-[#007AFF] font-regular text-center  text-[16px] flex justify-center items-center rounded-[17px] w-full max-w-lg active:opacity-75 transition-all"
              >
                Пользовательское соглашение
              </Link>
            </div>
            <div className="p-0 bottom-2">
              <a className="text-gray-400 font-regular text-center  text-[16px] flex justify-center items-center rounded-[17px] w-full max-w-lg active:opacity-75 transition-all">
                ©2025 SUPERPUPER VPN
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
