"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import Language from "../language";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const Recorder = () => {
  const [playBtn, setPlayBtn] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [note, setNote] = useState<string | null>(null);
  const [saveNote, setSaveNote] = useState<string[]>([]);
  const [lang, setlang] = useState(Language);
  const [openLang, setOpenLang] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedLang, setselectedLang] = useState({
    id: "1",
    name: "English",
    flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
    language: "en",
    subtitle: "English",
  });

  const micRef = useRef(new SpeechRecognition());
  const mic = micRef.current;

  mic.continuous = true;
  mic.interimResults = true;
  mic.lang = selectedLang.language;

  useEffect(() => {
    const handleListen = () => {
      if (isListening) {
        mic.start();
      } else {
        mic.stop();
      }
    };

    mic.onstart = () => {
      console.log("Mic is on");
    };

    mic.onend = () => {
      console.log("Mic stopped");
      if (isListening) {
        mic.start();
      }
    };

    mic.onresult = (e: any) => {
      const transcript = Array.from(e.results)
        .map((res: any) => res[0])
        .map((res) => res.transcript)
        .join("");
      setNote(transcript);
      mic.onerror = (e: Event) => {
        console.log((e as ErrorEvent).error);
      };
    };

    handleListen();

    return () => {
      mic.stop();
    };
  }, [isListening, mic]);

  useEffect(() => {}, [copied]);

  const handlePlay = () => {
    setIsListening(true);
    setPlayBtn(true);
  };

  const handelCopy = () => {
    setCopied(true);
    const combinedData = saveNote.join("\n");

    navigator.clipboard.writeText(combinedData);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleStop = () => {
    setIsListening(false);
    setPlayBtn(false);
    setSaveNote((prev) => [...prev, note ?? ""]);
    setNote("");
  };

  return (
    <div className="grid grid-cols-2 gap-3 mx-3 place-content-center">
      <div className="container relative">
        <div className="flex items-start justify-between relative">
          <p className="text-2xl font-bold">Current Note</p>
          <div
            className="flex items-center justify-between w-[150px]  cursor-pointer"
            onClick={() => setOpenLang(!openLang)}
          >
            <div className="flex items-center gap-3">
              <Image
                src={selectedLang.flag}
                alt=""
                width={30}
                height={30}
                className=" rounded-full"
              />
              <p>{selectedLang.name}</p>
            </div>
            <FaAngleDown size={20} />
          </div>
        </div>
        {openLang && (
          <div className="flex items-center flex-col w-[180px] h-[300px] bg-gray-200 mt-2 overflow-y-auto absolute right-0">
            <p className="flex items-start justify-start w-full p-2 text-base font-semibold">
              Suggest language
            </p>
            {lang.suggest.map((i) => (
              <div
                key={i.id}
                onClick={() => {
                  setOpenLang(false);
                  setselectedLang(i);
                }}
                className="flex items-center w-[100%] px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100  my-3"
              >
                <Image
                  src={i.flag}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p key={i.id} className="text-start">
                  {i.name}
                </p>
              </div>
            ))}

            <p className="flex items-start justify-start w-full p-2 text-base font-semibold">
              All language
            </p>
            {lang.allLanguage.map((i) => (
              <div
                key={i.id}
                onClick={() => {
                  setOpenLang(false);
                  setselectedLang(i);
                }}
                className="flex items-center w-[100%] px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100  my-3"
              >
                <Image
                  src={i.flag}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p key={i.id} className="text-start">
                  {i.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="h-[85%] overflow-y-auto mt-2 p-3 ">{note}</div>
        <div className="flex items-center gap-3 absolute bottom-4 right-3">
          {!playBtn ? (
            <button className="btn" onClick={handlePlay}>
              <FaPlay size={20} />
            </button>
          ) : (
            <button className="btn" onClick={handleStop} disabled={!note}>
              <FaStop size={20} className="text-red-500" />
            </button>
          )}
        </div>
      </div>
      <div className="container">
        <div className=" flex items-center justify-between">
          <p className="text-2xl font-bold">Notes</p>
          {!copied ? (
            <MdOutlineContentCopy size={30} onClick={handelCopy} />
          ) : (
            <FaCheck size={30} />
          )}
        </div>
        <div className="h-[85%] overflow-y-auto mt-2 p-3 ">
          {saveNote.map((item, index) => (
            <p className="text-base font-semibold" key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recorder;
