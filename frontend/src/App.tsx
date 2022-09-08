import Header from "./componentes/Header/intex"
import SalesCard from "./componentes/SalesCard/intex"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
             <SalesCard/>
          </div>
        </section>
      </main>

    </>
  )
}

export default App