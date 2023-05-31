import React from "react";
import { useState } from "react";
import "./About.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
     const [isOpen2 , setIsOpen2] = useState(false)

     const preventScrolling = (e) => {
        e.preventDefault();
      };
      const toggleBox = () => {
        setIsOpen2(!isOpen2);
      };

     useEffect(() => {
        if(isOpen2) {
            document.body.addEventListener("touchmove", preventScrolling, {
                passive : false
            })
        } else {
            document.body.removeEventListener("touchmove", preventScrolling)
        }
     }, [isOpen2])


    return (
        <div>

            <button className="btnAbout" onClick={toggleBox}>About</button>
            
                {isOpen2 &&
            
            <div className="modal-overlay">
          <div className="modal-content">
            <button className="btnX" onClick={() => setIsOpen2(false)}>❌</button>
            <br />
            <h2>Pokemones</h2>
            <h4>Bienvenidos a la página de Pokemones, un sitio creado especialmente para el proyecto individual de Soy Henry, donde se extrae la informacion de la API de Pokemones . Aquí podrás encontrar todo lo relacionado con los criaturas más populares de la franquicia de Pokemon.Podrás encontrar información sobre los más populares Pokemones en el mundo Pokemon. Además, ¡podrás crear el pokemon que tu desees! .¡Explora este mundo y descubre todo lo que tienes que saber sobre tus Pokemones favoritos!</h4>
        </div>
        </div>
             }
        </div>
            
    )

    
}