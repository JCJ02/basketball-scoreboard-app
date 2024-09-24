import { useEffect, useState } from "react"
import Section from "./components/Section";
import Label from "./components/Label";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { FaMinus } from "react-icons/fa";
import { CgUndo } from "react-icons/cg";

function App() {

  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);

  useEffect(() => {
    // BROWSER TAG NAME
    document.title = "Basketball Scoreboard";
  });

  return (
    <>
      <div className="bg-[#000000] flex flex-col lg:flex-row justify-center items-center gap-10 h-full lg:h-screen w-full">
        
        {/* Scoreboard */}
        <div className="flex flex-col items-center gap-3 pt-10 lg:pt-0">

          <h1 className="font-inter font-extrabold text-white text-3xl">SCOREBOARD</h1>
          
          <div className="bg-[#0D294E] flex flex-col items-center gap-4 p-5 rounded-md border-4 border-white">

            <div className="flex items-center gap-10">

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>{homeScore}</Label>
                <Label>HOME</Label>
              </Section>

              <div className="flex flex-col items-center gap-5">

                <Section>
                  <Label>TIME</Label>
                  <Label className={"bg-[#000000] text-green-600 p-3 rounded-md"}>10:00</Label>
                </Section>

                <Section>
                  <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                  <Label>QUARTER</Label>
                </Section>

              </div>

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>{guestScore}</Label>
                <Label>GUEST</Label>
              </Section>

            </div>

            <div className="flex items-center gap-6">

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                <Label>FOULS</Label>
              </Section>

              <Section>
                <Label className={"bg-[#000000] text-red-600 p-3 rounded-md"}>24</Label>
                <Label>SHOT CLOCK</Label>
              </Section>

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                <Label>FOULS</Label>
              </Section>

            </div>

          </div>

        </div>
        
        {/* Controller */}
        <div className="flex flex-col items-center gap-3 pb-10 lg:pb-0">
          <h1 className="font-inter font-extrabold text-white text-3xl">CONTROLLER</h1>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Section className={"flex gap-2"}>
              <Label>HOME</Label>
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

            <Section className={"flex gap-2"}>
              <Label>GUEST</Label>
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
        </div>

      </div>
      
      <Footer />

    </>
  )
}

export default App
