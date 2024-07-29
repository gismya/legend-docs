import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";
import { useObservable } from "@legendapp/state/react";
import React from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { SectionTop } from "./SectionTop";
import { SectionPerf } from "./SectionPerf";
import { SectionSync } from "./SectionSync";
import { Button } from "shared/src/Components/Button";
import { SectionEasy } from "./SectionEasy";
import { SectionReact } from "./SectionReact";
import { SectionReactivityPerf } from "./SectionReactivityPerf";
import { SectionRPerfChart } from "./SectionPerfChart";
import { SectionReactivityComponents } from "./SectionReactivityComponents";
import { SectionPersistence } from "./SectionPersistence";
import { SectionKitComponents } from "./SectionKitComponents";
import { SectionKitExtension } from "./SectionKitExtension";
import { SectionKitWrappers } from "./SectionKitWrappers";
import { SectionKitExamples } from "./SectionKitExamples";
import { SectionKitDevTools } from "./SectionKitDevTools";

enableReactComponents();

const EnableKit = true;

const LandingPage: React.FC = () => {
  const state$ = useObservable({ speed: 1 });

  return (
    <div
      id="scroller"
      className="absolute inset-0 overflow-auto mt-11 flex flex-col text-white font-sans"
    >
      <div className="fixed inset-0 bg-gray-950" />
      {/* <AnimatedBackground state$={state$} /> */}
      <main className="z-10 flex-grow">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <div className="grid grid-cols-8">
            <div />
            <div className="col-span-5">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                Build blazing fast local-first apps with less code
              </h1>
              <div className="grid grid-cols-4">
                <p className="mt-3 col-span-3 text-gray-400">
                  It's fast by default with fine-grained reactivity, a powerful
                  sync system for any backend, and persistence plugins for web
                  and mobile.
                </p>
              </div>
              <Button>Get started</Button>
            </div>
          </div>

          <div>Badges of sizes of each package</div>

          <SectionTop state$={state$} />
          <SectionEasy />
          <SectionReact />

          <SectionRPerfChart />
          <SectionReactivityPerf />
          {/* <SectionReactivityComponents /> */}

          <SectionPersistence />
          <SectionSync />

          {EnableKit && (
            <>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                Legend Kit accelerates your development
              </h1>
              <p>Tools to help you get started and speed up development</p>

              <SectionKitComponents />
              <SectionKitExtension />
              <SectionKitWrappers />
              <SectionKitExamples />
              {/* <SectionKitDevTools /> */}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;