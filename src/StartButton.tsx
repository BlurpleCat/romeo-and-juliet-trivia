import React from 'react';
interface IProps {
  onClick: () => unknown
}
export default function StartButton(props: IProps) {
  return (<div className="start-view" onClick={props.onClick}>Click me to start!</div>)
}
