
export const AboutMeSkeleton = () => {
   return (
      <div className="flex justify-between flex-col md:flex-row">
         <div role="status" className="w-full h-[413px] md:w-[385px] md:h-[513px] space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-10 md:mb-0">
            <div className ="flex items-center justify-center bg-gray-300 w-full h-full rounded">
               <svg className ="w-2/4 h-2/4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
               </svg>
            </div>
            <span className="sr-only">Loading...</span>
         </div>
         <div role="status" className="w-full md:w-2/5 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse p-10">
            <div className="flex items-center justify-between">
               <div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
               </div>
               <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
               <div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
               </div>
               <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
               <div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
               </div>
               <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
               <div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
               </div>
               <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
               <div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
               </div>
               <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
         </div>
      </div>
   )
}

export const ProjectsSkeleton = () => {
   return (
      <div role="status" className="w-full md:h-[410px] p-4 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 rounded shadow animate-pulse md:p-6">
         <div className="flex flex-col justify-between mb-3 md:mb-0">
            <div className="flex items-center justify-center w-full md:w-5/6 h-52 md:h-64 mb-8 bg-gray-300 rounded ">
               <svg className="w-14 h-14 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
               </svg>
            </div>
            <div>
               <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
               <div className="h-2 bg-gray-300 rounded-full mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
               <div className="h-2 bg-gray-300 rounded-full "></div>
            </div>
         </div>
         <div className="flex flex-col justify-between md:mt-0">
            <div className="mb-5 md:mb-0">
               <div className="h-2.5 bg-gray-300 rounded-full w-48 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full w-4/6 mb-2.5"></div>
               <div className="h-2 bg-gray-300 rounded-full w-4/5 mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full w-5/12 mb-2.5"></div>
               <div className="h-2 bg-gray-300 rounded-full w-9/12"></div>
            </div>
            <div className="mb-5 md:mb-0">
               <div className="h-2.5 bg-gray-300 rounded-full w-48 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full w-4/12 mb-2.5"></div>
               <div className="h-2 bg-gray-300 rounded-full w-4/6"></div>
            </div>
            <div>
               <div className="h-2.5 bg-gray-300 rounded-full w-48 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full w-4/5 mb-2.5"></div>
               <div className="h-2 bg-gray-300 rounded-full w-5/6"></div>
            </div>
         </div>
         <span className="sr-only">Loading...</span>
      </div>
   )
}

export const ContactMeSkeleton = () => {
   return (
      <>
         <div role="status" className="block md:hidden w-full space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse p-10">
            <div className="flex flex-col items-center justify-center">
               <div>
                  <div className="flex flex-col items-center justify-center mb-4">
                     <svg className="w-40 h-40 text-gray-200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <ellipse cx="100" cy="100" rx="100" ry="100" />
                     </svg>
                     <div className="h-2 mt-6 bg-gray-300 rounded-full w-24" />
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center mt-10">
                  <svg className="w-40 h-40 text-gray-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                     <ellipse cx="100" cy="100" rx="100" ry="100" />
                  </svg>
                  <div className="h-2 mt-6 bg-gray-200 rounded-full w-24" />
               </div>
               <div className="flex flex-col items-center justify-center mt-10">
                  <svg className="w-40 h-40 text-gray-200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                     <ellipse cx="100" cy="100" rx="100" ry="100" />
                  </svg>
                  <div className="h-2 mt-6 bg-gray-300 rounded-full w-24" />
               </div>
            </div>
            <span className="sr-only">Loading...</span>
         </div>
         <div role="status" className="hidden md:flex justify-center w-full border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse p-10">
            <div className="triangle-shape w-[400px] h-[400px] 2xl:w-[450px] 2xl:h-[450px] bg-gray-300" />
            <span className="sr-only">Loading...</span>
         </div>
      </>
   )
}

export const ImageSkeleton = () => {
   return (
      <div role="status" className="flex items-center justify-center w-32 md:h-[180px] lg:h-[210px] bg-gray-300 rounded-lg animate-pulse">
        <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
   )
}

