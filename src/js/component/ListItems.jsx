import React from "react";

export function ListItems(props) {
  /* Crear funcion que enviara datos al  componente padre */
  function handleRemoveClick(indx) {
    props.sendToParent(indx);
  }
  //////////////// Se ejecuta la función del padre  para enviar el dato mediante un callback

  /*Recibimos por props el todos los items a mostrar en la lista y
  usamos map para interar en cada uno, el motodo map tambien devuelve un idex que usamos*/
  const updatedList = props.itemsToRender;
  const newRenderList = updatedList.map((value, indx) => {
    return (
      <li className="list-group-item d-sm-flex">
        {value}
        <div className="ms-auto">
          <i
            className="fa-solid fa-xmark fa-lg"
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
