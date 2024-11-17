const Wrapper = ({children}: {children: React.ReactNode}) => {
   return (
      <div className="px-5 md:px-10 lg:px-12 w-full min-w-96 max-w-7xl flex justify-center justify-self-center">
         {children}
      </div>
   )
}

export default Wrapper