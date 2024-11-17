const Wrapper = ({children}: {children: React.ReactNode}) => {
   return (
      <div className="w-full min-w-96 max-w-7xl flex justify-center justify-self-center">
         {children}
      </div>
   )
}

export default Wrapper