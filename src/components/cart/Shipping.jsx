import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Información de envío</h1>
        <form>
          <div>
            <label>Calle y N.º</label>
            <input type="text" placeholder="Ingrese el nombre de la calle y el número" />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Ingresa la ciudad" />
          </div>
          <div>
            <label>País</label>

            <select>
              <option value="">España</option>
              {}      
            </select>
          </div>
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
            <label>Estado/Provincia</label>

            <select>
              <option value="">Estado/Provincia</option>
              {State && State.getStatesOfCountry("ES").map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                </option>
              ))}         
            </select>
          </div>
          <div>
            <label>Código postal</label>
            <input type="number" placeholder="Ingresa tu código postal" />
          </div>
          <div>
                <label>N.º de teléfono</label>
                <input type="number" placeholder="Ingresa tu número telefonico" />
          </div>          
          
          <Popup 
            trigger= {
            <Link className="link" to="/myorders">
              Confirmar pedido
            </Link>
            }
          >
            <div 
              style={{
                color:"red",
                transform: 'translate (0%, -500%)', 
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
            }}
            >
              !Has realizado tu pedido con éxito!
            </div>
            </Popup>
        </form>   
      </main>
    </section>
  );
};

export default Shipping;
