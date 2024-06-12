import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript1 className="text-6xl text-yellow-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-6xl text-green-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-6xl text-green-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-6xl"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman className="text-6xl text-orange-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies;