import React from 'react'
interface IProps {
  continue: () => unknown;
}
export default function ContinueButton(props: IProps) {
  return (<div onClick={props.continue}  className="continue">Continue</div>)
}
