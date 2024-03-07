import MotionPatch from "@/components/motion-patch";
import { ReactJS } from "@/components/react";
import Icon from "@/components/stacks"



export default function Home() {
  return (
    <section className="flex justify-between  flex-col">
      <div className="flex justify-between flex-col md:flex-row mt-24 space-x-12">
        <div className="py-10  items-start flex flex-col ">
          {/* <h1 className="mt-20 text-7xl font-bold inline-flex animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,40%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">
            Jefferson charlles
          </h1> */}
          <h1 className="mt-20 text-7xl font-bold inline-flex animate-shine text-pink-500">
            Jefferson charlles
          </h1>
          <div className="mt-2 relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <span className="text-neutral-400 leading-relaxed">Eterno estudante de tecnologia , e amante de programação.</span>
          </div>

        </div>
        <div className="relative flex flex-1">
          {/* <Icon /> */}
          <div className="absolute right-0 top-0 left-0 bottom-0 -z-10">
            <MotionPatch />
            {/* <ReactJS /> */}
          </div>


        </div>
      </div>
    </section>
  );
}
