import styled from "styled-components";

export const ShapesContainer = styled.div`
  label {
    cursor: pointer;
    &,
    &.rounded {
      padding: 0.5rem 1rem;
      margin-right: 1rem;

      input {
        display: none;
      }
    }

    &.rounded {
      border-radius: 50%;
      &.highlighted {
        border: 0.2rem solid #1a90ff;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
      }
    }

    &.checkbox {
      border: 0.1rem solid #7f7f7f;
      border-radius: 1rem;

      &.selected {
        background-color: #cce6ff;
        border: 0.1rem solid #80c1ff;
      }
    }

    &.color-red {
      background-color: #ff0000;
    }
    &.color-blue {
      background-color: #0000ff;
    }
    &.color-green {
      background-color: #00ff00;
    }
    &.color-yellow {
      background-color: #ffff00;
    }
    &.color-orange {
      background-color: #ff7f00;
    }
    &.color-lightblue {
      background-color: #33d6ff;
    }
    &.color-grey {
      background-color: #7f7f7f;
    }
  }
  .shapes-holder,
  .colors-holder {
    margin: 1rem 0rem;
    margin-bottom: 4rem;
  }
  .shapes-flex,
  colors-flex {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
  }
  .grid-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0.2rem;
    gap: 1rem;

    &-box {
      background: #fff !important;
      text-align: center !important;
      padding: 3rem 1rem 0.5rem 1rem;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    }
  }
  .show {
    display: flex;
  }
  .hide {
    display: none;
  }
`;
