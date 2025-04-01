import React, { createRef } from "react";
import ModalDiv from "./ModalDiv";

export default class AboutModal extends React.Component {
    
    divRef = createRef<ModalDiv>();

    constructor(props: {}) {
        super(props);
    }

    setHidden = (value: boolean) => this.divRef.current?.setHidden(value);

    render = () => (
        <ModalDiv title="About Me" ref={ this.divRef }>
        </ModalDiv>
    );
};