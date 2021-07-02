import React from "react";
import { toUpperCase } from '../../../utils/helpers'

export type ShapeProps = {
  shape: string;
  valueIsChecked: boolean;
  changeHandler: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
};

const ShapesCheckBox = ({
  shape,
  valueIsChecked,
  changeHandler,
}: ShapeProps) => {
  return (
    <label
      htmlFor={shape}
      className={`checkbox ${valueIsChecked ? "selected" : "not-selected"}`}
    >
      {toUpperCase(shape)}
      <input
        type="checkbox"
        name={shape}
        id={shape}
        data-testid={shape}
        value={shape}
        checked={valueIsChecked}
        onChange={(e) =>
          changeHandler((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.checked,
          }))
        }
      />
    </label>
  );
};

export default ShapesCheckBox;
