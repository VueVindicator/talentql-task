import React from "react";

export type ColorProps = {
  color: string;
  valueIsHighlighted: boolean;
  changeHandler: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
};

const ColorsCheckbox = ({
  color,
  valueIsHighlighted,
  changeHandler,
}: ColorProps) => {
  return (
    <label
      htmlFor={color}
      className={`rounded color-${color} ${
        valueIsHighlighted ? "highlighted" : "not-highlighted"
      }`}
    >
      <input
        type="checkbox"
        name={color}
        id={color}
        data-testid={color}
        value={color}
        checked={valueIsHighlighted}
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

export default ColorsCheckbox;
