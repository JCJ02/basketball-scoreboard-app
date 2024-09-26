import { useEffect, useState } from "react"
import Section from "./components/Section";
import Label from "./components/Label";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { FaMinus } from "react-icons/fa";
import { CgUndo } from "react-icons/cg";
import { SlControlPause } from "react-icons/sl";
import { VscDebugStart } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { PiPause } from "react-icons/pi";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);
  const [time, setTime] = useState(600);
  const [shotClock, setShotClock] = useState(24);
  const [isTimeActive, setIsTimeActive] = useState(false);
  const [isShotClockActive, setIsShotClockActive] = useState(false);
  const [quarter, setQuarter] = useState(0);
  const [homeFouls, setHomeFouls] = useState(0);
  const [guestFouls, setGuestFouls] = useState(0);

  const timeFormat = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const shotClockFormat = (shotClock) => {
    return shotClock > 9 ? shotClock : `0${shotClock}`;
  };

  // USEEFFECT TIME
  useEffect(() => {
    let interval = null;
    if (isTimeActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); 
    } else if (time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimeActive, time]);

  // USEEFFECT SHOT CLOCK
  useEffect(() => {
    let interval = null;
    if (isShotClockActive && shotClock > 0) {
      interval = setInterval(() => {
        setShotClock((prevShotClock) => prevShotClock - 1);
      }, 1000);
    } else if (shotClock === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isShotClockActive, shotClock]);

  const toggleStartStop = () => {
    setIsTimeActive(!isTimeActive);
  };

  const toggleShotClock = () => {
    setIsShotClockActive(!isShotClockActive);
  };

 const resetTime = () => {
    setTime(600);
    setIsTimeActive(false);
  };

  const resetShotClock = () => {
    setShotClock(24);
    setIsShotClockActive(false);
  };

  useEffect(() => {
    // BROWSER TAG NAME
    document.title = "Basketball Scoreboard";
  }, []);

  return (
    <>
      <div className="bg-[#000000] flex flex-col lg:flex-row justify-center items-center gap-10 h-full lg:h-screen w-full">
        
        {/* Scoreboard */}
        <div className="flex flex-col items-center gap-3 pt-10 lg:pt-0">

          <h1 className="font-inter font-extrabold text-white text-3xl">SCOREBOARD</h1>
          
          <div className="bg-[#0D294E] flex flex-col items-center gap-4 p-5 rounded-md border-4 border-white">

            <div className="flex items-center gap-10">

              <Section>
                <Label className={"bg-[#000000] text-white p-3 rounded-md"}>{homeScore}</Label>
                <Label className={"text-white"}>HOME</Label>
              </Section>

              <div className="flex flex-col items-center gap-5">

                <Section>
                  <Label className={"text-white"}>TIME</Label>
                  <Label className={"bg-[#000000] text-green-600 p-3 rounded-md"}>{timeFormat(time)}</Label>
                </Section>

                <Section>
                  <Label className={"bg-[#000000] text-white p-3 rounded-md"}>{quarter}</Label>
                  <Label className={"text-white"}>QUARTER</Label>
                </Section>

              </div>

              <Section>
                <Label className={"bg-[#000000] text-white p-3 rounded-md"}>{guestScore}</Label>
                <Label className={"text-white"}>GUEST</Label>
              </Section>

            </div>

            <div className="flex items-center gap-6">

              <Section>
                <Label className={"bg-[#000000] text-white p-3 rounded-md"}>{homeFouls}</Label>
                <Label className={"text-white"}>FOULS</Label>
              </Section>

              <Section>
                <Label className={"bg-[#000000] text-red-600 p-3 rounded-md"}>{shotClockFormat(shotClock)}</Label>
                <Label className={"text-white"}>SHOT CLOCK</Label>
              </Section>

              <Section>
                <Label className={"bg-[#000000] text-white p-3 rounded-md"}>{guestFouls}</Label>
                <Label className={"text-white"}>FOULS</Label>
              </Section>

            </div>

          </div>

        </div>
        
        {/* HOME CONTROLLER */}
        <div className="flex flex-col items-center gap-3 pb-10 lg:pb-0">
          <h1 className="font-inter font-extrabold text-white text-3xl">CONTROLLER</h1>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Section className={"flex items-center gap-2"}>
              <Label className={"text-white"}>HOME</Label>
              <div className="flex items-center gap-2">
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeScore(homeScore + 3)}
                >
                  +3
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeScore(homeScore + 2)}
                >
                  +2
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeScore(homeScore + 1)}
                >
                  +1
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeScore(homeScore - 1)}
                >
                  <FaMinus />
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeScore(0)}
                >
                  <CgUndo />
                </Button>
              </div>
            </Section>

            {/* TIME and QUARTER CONTROLLER */}
            <div className="flex flex-col items-center gap-5">
              <Section className={"flex items-center gap-2"}>
                <Label className={"text-white"}>TIME</Label>
                <div className="flex items-center gap-2">
                  <Button 
                    className={"bg-red-700 border-2 border-white"}
                    onClick={toggleStartStop}
                  >
                    {isTimeActive ? <SlControlPause /> : <VscDebugStart />}
                  </Button>
                  <Button 
                    className={"bg-red-700 border-2 border-white"}
                    onClick={resetTime}
                  >
                    <CgUndo />
                  </Button>
                </div>
              </Section>
              <Section className={"flex items-center gap-2"}>
                <Label className={"text-white"}>QUARTER</Label>
                <div className="flex items-center gap-2">
                  <Button 
                    className={"bg-red-700 border-2 border-white"}
                    onClick={() => setQuarter(quarter + 1)}
                  >
                    <FaPlus />
                  </Button>
                  <Button 
                    className={"bg-red-700 border-2 border-white"}
                    onClick={() => setQuarter(quarter - 1)}
                  >
                    <FaMinus />
                  </Button>
                  <Button 
                    className={"bg-red-700 border-2 border-white"}
                    onClick={() => setQuarter(0)}
                  >
                    <CgUndo />
                  </Button>
                </div>
              </Section>
            </div>

            {/* GUEST CONTROLLER */}
            <Section className={"flex items-center gap-2"}>
              <Label className={"text-white"}>GUEST</Label>
              <div className="flex items-center gap-2">
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestScore(guestScore + 3)}
                >
                  +3
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestScore(guestScore + 2)}
                >
                  +2
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestScore(guestScore + 1)}
                >
                  +1
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestScore(guestScore - 1)}
                >
                  <FaMinus />
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestScore(0)}
                >
                  <CgUndo />
                </Button>
              </div>
            </Section>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            {/* HOME FOULS CONTROLLER */}
            <Section className={"flex items-center gap-2"}>
              <Label className={"text-white"}>FOULS</Label>
              <div className="flex items-center gap-2">
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeFouls(homeFouls + 1)}
                >
                  <FaPlus />
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeFouls(homeFouls - 1)}
                >
                  <FaMinus />
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setHomeFouls(0)}
                >
                  <CgUndo />
                </Button>
              </div>
            </Section>

            <Section className={"flex items-center gap-2"}>
              <Label className={"text-white"}>SHOT CLOCK</Label>
              <div className="flex items-center gap-2">
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={toggleShotClock}
                >
                  {isShotClockActive ? <SlControlPause /> : <VscDebugStart />}
                </Button>

                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setShotClock(14)}
                >
                  14
                </Button>
                
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={resetShotClock}
                >
                  <CgUndo />
                </Button>
              </div>
            </Section>

            {/* GUEST FOULS CONTROLLER */}
            <Section className={"flex gap-2"}>
              <Label className={"text-white"}>FOULS</Label>
              <div className="flex items-center gap-2">
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestFouls(guestFouls + 1)}
                >
                  <FaPlus />
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestFouls(guestFouls - 1)}
                >
                  <FaMinus />
                </Button>
                <Button 
                  className={"bg-red-700 border-2 border-white"}
                  onClick={() => setGuestFouls(0)}
                >
                  <CgUndo />
                </Button>
              </div>
            </Section>
          </div>
        </div>

      </div>
      
      <Footer />

    </>
  )
}

export default App
