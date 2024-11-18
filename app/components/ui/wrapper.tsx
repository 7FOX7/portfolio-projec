const Wrapper = ({children}: {children: React.ReactNode}) => {
   return (
      <div className="px-5 md:px-10 w-full min-w-96 max-w-7xl justify-self-center">
         {children}
      </div>
   )
}

export default Wrapper