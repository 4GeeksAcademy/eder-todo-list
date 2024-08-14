import React from "react";
import { ListItems } from "./ListItems";
import { useState } from "react";

export function ListComponent() {
  /* Creamos un State para monitorear  */
  const [content, setContent] = useState([]);

  /*Recibimos informacion del evento en el handler captureContent,
  onKeyDown retorna un parametro importante */
  /* Toda la manipulacion requerida del DOM es posible debido a la informacion retornada del evento onkeydown */
  function captureContent(e) {
    if (e.keyCode == 13 && e.target.value != "") {
      let newContent = e.target.value;
      setContent((c) => [...c, newContent]);
      e.target.value = "";
    }
  }
  /* uncion para ser enviada como callback y poder traer informacion del componente hijo */
  function removeContent(indx) {
    setContent(content.filter((_, i) => i !== indx));
  }
  /* Enviamos los props correspondientes al hijo (ListItems) y hacemos la estructura base  */
  return (
    <div className="container-fluid px-4">
      <div className="text-center">
        <p className="display-5 fw-lighter">todos</p>
      </div>
      <div className="row justify-content-center">
        <ul className="col col-md-4 list-group pe-0">
          <input
            className="list-group-item"
            placeholder="What Needs To be Done?"
            type="text"
            onKeyDown={captureContent}
            key="uniqueKey"
          />
          <ListItems itemsToRender={content} sendToParent={removeContent} />
          <li className="list-group-item d-sm-flex h-25">
            <div className="p-0 m-0" style={{ height: "3em" }}>
              <p className="pb-2 m-0 fw-lighter " style={{ fontSize: 11 }}>
                {content.length} item left
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
