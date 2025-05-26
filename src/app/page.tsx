import Header from "./_components/header/Header"
import HomePage from "./_components/HomePage"

function Home() {
  return (
    <>
      <div className=" max-w-72 sm:max-w-[30rem] md:max-w-[51rem] mx-auto">
        <Header />
        <main>
          <HomePage />
        </main>
      </div>
    </>
  )
}
export default Home