import React, { useEffect, useState } from "react";
import Data from "../../shapes.json";
import { ShapesContainer } from "./shapes.styles";
import ColorsCheckBox from "./components/colors";
import ShapesCheckBox from "./components/shapes";
import helperFunction from "./helper";

function Shapes(): JSX.Element {
  const [headingTitle, setHeadingTitle] = useState<string>("All Items");
  const [stateOfShapes, setStateOfShapes] = useState<{
    [key: string]: boolean;
  }>({
    oval: true,
    round: true,
    triangle: true,
    square: true,
    rectangle: true,
  });

  const [stateOfColors, setStateOfColors] = useState<{
    [key: string]: boolean;
  }>({
    red: true,
    blue: true,
    green: true,
    yellow: true,
    orange: true,
    lightblue: true,
    grey: true,
  });

  function sortCards(): void {
    const container = document.getElementsByClassName("items")[0];
    helperFunction(
      container,
      setHeadingTitle,
      setStateOfColors,
      setStateOfShapes,
      stateOfShapes,
      stateOfColors
    );
  }

  useEffect(() => {
    sortCards();
  }, [stateOfShapes, stateOfColors]);

  useEffect(() => {
    const items = document.getElementsByClassName("items")[0];
    let img = document.createElement("img");
    Data.shapesData.map(({ name, color, svg }, index) => {
      items.innerHTML += `
        <div key=${index} class="grid-item-box ${color} ${name}">
        ${(img.src = svg)}
        </div>
      `;
    });
  }, []);

  return (
    <ShapesContainer>
      <div>
        <h3 className="capitalize">Filters</h3>
        <div className="shapes-holder">
          <p className="shapes-title">Shapes</p>
          <div className="shapes-flex shapes-filter">
            {Object.entries(stateOfShapes).map(
              ([key, value], index, shapes) => (
                <ShapesCheckBox
                  key={index}
                  valueIsChecked={value}
                  shape={key}
                  changeHandler={setStateOfShapes}
                />
              )
            )}
          </div>
        </div>
        <div className="colors-holder">
          <p className="colors-title">Colors</p>
          <div className="colors-flex colors-filter">
            {Object.entries(stateOfColors).map(
              ([key, value], index, shapes) => (
                <ColorsCheckBox
                  key={index}
                  valueIsHighlighted={value}
                  color={key}
                  changeHandler={setStateOfColors}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div>
        <h4>{headingTitle}</h4>
        <div className={`grid-item items`}></div>
      </div>
    </ShapesContainer>
  );
}

export default Shapes;
