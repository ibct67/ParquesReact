import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
  const [count, setCount] = useState(0)
  const [parques, setParques] = useState([])

  useEffect(() => {
   fetch('https://pacopul.github.io/json/pn/parques.json')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setParques(data.parques);
      })
      .catch((err) => {
         console.log(err.message);
      });
}, []);

  return (
    <>
      <div class ="container shadow p-0">
        <header class="bg-green text-center p-3">
          Parques naturales
        </header>
        <main>
          <div class="row">
            {parques.map((parque) => (
              <div class="col-md-4">
                <div class="card">
                  <img src={parque.imagen} class="card-img-top" alt={parque.nombre} />
                  <div class="card-body">
                    <h5 class="card-title">{parque.nombre}</h5>
                    <p class="card-text">{<div dangerouslySetInnerHTML={{ __html: parque.descripcion }} ></div>}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
