import { useEffect } from "react"
import Section from "./components/Section";
import Label from "./components/Label";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    // BROWSER TAG NAME
    document.title = "Basketball Scoreboard";
  });

  return (
    <>
      <div className="bg-[#000000] flex flex-col justify-center items-center gap-5 h-screen w-full">
        
        <div className="flex flex-col items-center gap-3">

          <h1 className="font-inter font-extrabold text-white text-3xl">SCOREBOARD</h1>
          
          <div className="bg-[#0D294E] flex flex-col items-center gap-4 p-5 rounded-md border-4 border-white">

            <div className="flex items-center gap-10">

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                <Label>HOME</Label>
              </Section>

              <div className="flex flex-col items-center gap-5">

                <Section>
                  <Label>TIME</Label>
                  <Label className={"bg-[#000000] p-3 rounded-md"}>10:00</Label>
                </Section>

                <Section>
                  <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                  <Label>QUARTER</Label>
                </Section>

              </div>

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                <Label>GUEST</Label>
              </Section>

            </div>

            <div className="flex items-center gap-6">

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                <Label>FOULS</Label>
              </Section>

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>24</Label>
                <Label>SHOT CLOCK</Label>
              </Section>

              <Section>
                <Label className={"bg-[#000000] p-3 rounded-md"}>00</Label>
                <Label>FOULS</Label>
              </Section>

            </div>

          </div>

        </div>
        
      </div>
      
      <Footer />

    </>
  )
}

export default App
