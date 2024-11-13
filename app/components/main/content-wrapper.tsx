const ContentWrapper = ({children}: {children: React.ReactNode}) => {
   return (
      <article className="relative flex items-center justify-center p-4">
         <div className="absolute w-full h-full bg-primary-color" />
         <section className="relative w-full bg-black text-white p-6">
            {children}
         </section>
      </article>
   )
}

export default ContentWrapper