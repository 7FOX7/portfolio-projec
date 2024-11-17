import { TriangleProps } from "@/app/lib/definitions"

function Triangle<T>({items, renderedItem}: TriangleProps<T>) {
	return (
      <div className="relative w-[600px] h-[600px] 2xl:w-[650px] 2xl:h-[650px] flex justify-center items-center self-center justify-self-center">
         <div className="absolute w-full h-full">
         <div className="relative left-[43.5%] 2xl:left-[44%] top-[1%] w-fit">
               {renderedItem(items[0])}
            </div>
            <div className="relative left-[86%] top-[70%] w-fit">
               {renderedItem(items[1])}
            </div>
            <div className="relative left-[2%] top-[58%] w-fit">
               {renderedItem(items[2])}
            </div>
         </div>
         <div className="shadow relative">
            <div className="rectangle-shape animate-triangle relative w-[400px] h-[400px] 2xl:w-[450px] 2xl:h-[450px] bg-no-repeat bg-gradient-to-tr from-emerald-700 to-white after:content-[''] after:absolute after:w-full after:h-full after:bg-black after:translate-y-[2%] after:scale-90">
            </div>
         </div>
      </div>
	)
}

export default Triangle