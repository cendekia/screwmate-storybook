export const AmongUsArt = ({}) => {
  return (
    <div className="w-full xl:w-3/5 p-12 relative h-96 2xs:hidden xl:block">
      <img src="characters/purple.png" className="xl:w-3/6 absolute top-0 -right-14" style={{ transform: `rotateY(180deg)` }} />
      <img src="characters/pink.png" className="xl:w-3/6 absolute top-0 right-16" style={{ transform: `rotateY(180deg)` }} />
      <img src="characters/red.png" className="xl:w-3/6 absolute top-0 -left-14" />
      <img src="characters/green.png" className="xl:w-3/6 absolute top-0 left-16" />
      <img src="signs/voted.png" className="xl:w-3/6 absolute top-0" />
    </div>
  )
}