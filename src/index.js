import React from 'react'
import styled from 'styled-components';

const CloseImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13.061" height="13.062" viewBox="0 0 13.061 13.062">
    <g id="Group_2299" data-name="Group 2299" transform="translate(6.415 16.648) rotate(-135)">
      <line id="Line_662" data-name="Line 662" y2="14.144" transform="translate(7.072)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" />
      <line id="Line_663" data-name="Line 663" x2="14.144" transform="translate(0 7.4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" />
    </g>
  </svg>
)

const StyledDiv = styled.div`
    background-color: #000;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16);
    color: #ffffff;
    padding: 20px 60px 20px 20px;
    bottom:120px;
    right: 20px;
    position: fixed;
    transform: translateY(100px);
    transition: transform .2s ease;
    user-select: none;
  &.active {
   	transform: translateY(0);
  }
  .growl-close{
    background-image: url('/close-white.svg');
    background-position: 14px;
    background-repeat: no-repeat;
    background-size: 14px;
    border-radius: 50%;
    cursor: pointer;
    height: 40px;
    margin-top: -20px;
    position: absolute;
    right:  10px;
    top:  50%;
    transition: all .2s ease;
    width: 40px;
  }
  &.growl-close:hover {
    opacity: 0.2;
  }

`
const StyledFlex = styled.div`
  display: flex;
`

export const Growl = ({ message, dismissAfter }) => {
  const [active, showGrowl, setActive, ] = useGrowl({dismissAfter})

  return (
    showGrowl &&
      (<StyledDiv className={`growl${active ? " active" : ""}`}>
        <StyledFlex style={{ width: '100%', height: '100%' }}>
          {message}
          <StyledFlex onClick={() => setActive(false)} className="growl-close" >
            <CloseImage />
          </StyledFlex>
        </StyledFlex>
      </StyledDiv>)
  )
};

export function useGrowl(props = {}) {
  const { dismissAfter = 3000 } = props;
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false);
  const [showGrowl, setShowGrowl] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowGrowl(false), dismissAfter);
    return () => clearTimeout(timer);
  }, []);

  return [
    // the first two args are the state
    growlActive,
    showGrowl,

    // the third arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active)
    },
  ]
}