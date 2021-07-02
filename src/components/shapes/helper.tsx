export default function helperFunction(
  container: Element,
  setHeadingTitle: React.Dispatch<React.SetStateAction<string>>,
  setStateOfColors: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >,
  setStateOfShapes: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >,
  stateOfShapes: object,
  stateOfColors: object,
) {
  Object.entries(stateOfShapes).map(([key, value], _index, arr1) => {
    Object.entries(stateOfColors).map(([color, boolean], _index, arr2) => {
      if (!value || !boolean) {
        for (let classes of container.children) {
          if (
            classes.classList.contains(key) &&
            classes.classList.contains(color)
          ) {
            classes.classList.add("hide");
            classes.classList.remove("show");
          }
        }
      } else if (value || boolean) {
        for (let classes of container.children) {
          if (
            classes.classList.contains(key) &&
            classes.classList.contains(color)
          ) {
            classes.classList.add("show");
            classes.classList.remove("hide");
          }
        }
      }
      if (
        arr1.every(([k, v]) => v === false) ||
        arr2.every(([k, v]) => v === false)
      ) {
        setStateOfShapes((previousState: any) => ({
          ...previousState,
          oval: true,
          round: true,
          square: true,
          rectangle: true,
          triangle: true,
        }));
        setStateOfColors((previousState: any) => ({
          ...previousState,
          red: true,
          blue: true,
          green: true,
          yellow: true,
          orange: true,
          lightblue: true,
          grey: true,
        }));
        for (let classes of container.children) {
          classes.classList.add("show");
          classes.classList.remove("hide");
        }
      }
      if (
        arr1.every(([k, v]) => v === true) &&
        arr2.every(([k, v]) => v === true)
      ) {
        setHeadingTitle(`All Items`);
      } else if (
        (arr1.every(([k, v]) => v === true) &&
          arr2.some(([k, v]) => v === false)) ||
        (arr1.some(([k, v]) => v === false) &&
          arr2.every(([k, v]) => v === true))
      ) {
        setHeadingTitle(`Multiple items`);
        if (
          arr1.every(([k, v]) => v === true) &&
          arr2.filter(([k, v], _index, _arr) => v === true).length === 1
        ) {
          const color = arr2.filter(([k, v], _index, _arr) => v === true)[0][0];
          setHeadingTitle(`All ${color} items`);
        } else if (
          arr2.every(([k, v]) => v === true) &&
          arr1.filter(([k, v], _index, _arr) => v === true).length === 1
        ) {
          const shape = arr1.filter(([k, v], _index, _arr) => v === true)[0][0];
          setHeadingTitle(`All ${shape} items`);
        }
      } else if (
        arr1.some(([k, v]) => v === false) &&
        arr2.filter(([k, v], _index, _arr) => v === true).length === 1
      ) {
        const color = arr2.filter(([k, v], _index, _arr) => v === true)[0][0];
        setHeadingTitle(`Multiple ${color} items`);
        if (
          arr1.filter(([k, v], _index, _arr) => v === true).length === 1 &&
          arr2.filter(([k, v], _index, _arr) => v === true).length === 1
        ) {
          const color = arr2.filter(([k, v], _index, _arr) => v === true)[0][0];
          const shape = arr1.filter(([k, v], _index, _arr) => v === true)[0][0];
          setHeadingTitle(`${color} ${shape} item`);
        }
      } else if (
        arr2.some(([k, v]) => v === false) &&
        arr1.filter(([k, v], _index, _arr) => v === true).length === 1
      ) {
        const shape = arr1.filter(([k, v], _index, _arr) => v === true)[0][0];
        setHeadingTitle(`Multiple ${shape} items`);
        if (
          arr1.filter(([k, v], _index, _arr) => v === true).length === 1 &&
          arr2.filter(([k, v], _index, _arr) => v === true).length === 1
        ) {
          const color = arr2.filter(([k, v], _index, _arr) => v === true)[0][0];
          const shape = arr1.filter(([k, v], _index, _arr) => v === true)[0][0];
          setHeadingTitle(`${color} ${shape} item`);
        }
      } else if (
        arr1.filter(([k, v], _index, _arr) => v === true).length === 1 &&
        arr2.filter(([k, v], _index, _arr) => v === true).length === 1
      ) {
        const color = arr2.filter(([k, v], _index, _arr) => v === true)[0][0];
        const shape = arr1.filter(([k, v], _index, _arr) => v === true)[0][0];
        setHeadingTitle(`${color} ${shape} item`);
      }
    });
  });
}
