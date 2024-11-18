const ContentWrapper = ({children}: {children: React.ReactNode}) => {
   return (
      <div className="relative flex items-center justify-center p-4 bg-primary-color text-white text-lg">
         <div className="relative w-full bg-black px-7 py-8">
            {children}
         </div>
      </div>
   )
}

export default ContentWrapper