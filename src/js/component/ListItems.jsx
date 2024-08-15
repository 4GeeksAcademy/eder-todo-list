import React from "react";

export function ListItems(props) {
  /* Crear funcion que enviara datos al  componente padre */

  function handleRemoveClick(indx) {
    props.sendToParent(indx);
  }

  /* Funciones mouseEvents para pasar los valores correspondientes al padre, comentario en LIST.jsx sobre si necesario tener un useState,
   podria ser callbacks? */
  function handleMouseEnter(indx) {
    props.sHover(indx);
  }
  function handleMouseLeave(y) {
    props.sHover(y);
  }
  //////////////// Se ejecuta la función del padre  para enviar el dato mediante un callback

  /*Recibimos por props el todos los items a mostrar en la lista y
  usamos map para interar en cada uno, el motodo map tambien devuelve un idex que usamos*/

  const updatedList = props.itemsToRender;
  const newRenderList = updatedList.map((value, indx) => {
    return (
      /* ponemos el evento del moues dentro de un div parent para tener un mejor trigger (div mas grande que icono)del evento (mayor facilidad de uso para el usuario) */
      /* El <i> que contine la X tiene el className con template literals para poder hacer un ternary y asi poder hacer la condicional de mostrar lo deseado*/
      <li
        className="list-group-item d-sm-flex"
        onMouseOver={(e) => {
          e.stopPropagation();
          handleMouseEnter(indx);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          handleMouseLeave(-1);
        }}
      >
        {value}
        <div className="ms-auto">
          <i
            className={`fa-solid fa-xmark fa-lg ${
              props.getHover == indx ? " " : "d-none"
            }`}
            key={indx}
            onClick={() => handleRemoveClick(indx)}
            style={{ color: "#bfc5cf" }}
          />
        </div>
      </li>
    );
  });
  return newRenderList;
}
