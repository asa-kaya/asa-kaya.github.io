import React, { createRef } from "react";
import ModalDiv from "./ModalDiv";
import { Person } from "../common/types";

interface Credits {
    "Developed By": Person[];
    "Models & Illustrations": Person[];
    "Inspriations": Person[];
}

export default class CreditsModal extends React.Component {
    
    divRef = createRef<ModalDiv>();

    author: Person = {
        name: "Asa Kaya",
        contact: "https://github.com/asa-kaya"
    }

    credits: Credits = {
        "Developed By": [this.author],
        "Models & Illustrations": [this.author],
        "Inspriations": [
            { name: "@Jessezhouu", contact: "https://twitter.com/Jessezhouu" }, 
            { name: "@lettier", contact: "https://twitter.com/lettier" },
        ]
    }

    constructor(props: {}) {
        super(props);
    }

    setHidden = (value: boolean) => this.divRef.current?.setHidden(value);

    render = () => (
        <ModalDiv title="" ref={ this.divRef }>
            <div className="pb-6 px-6">
                <ul role="list" className="px-6 lg:px-24 divide-y divide-dashed divide-gray-400">
                    { Object.keys(this.credits).map((key) => (
                        <li className="flex justify-between gap-x-6 py-5" key={key}>
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-lg font-semibold text-gray-200">{ key }</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-end flex flex-col items-end">
                                { (this.credits as Credits)[key as keyof Credits].map( (x: Person, i: number) => (
                                    <a key={i} href={x.contact} className="text-lg text-gray-300 hover:text-yellow-500" target="_blank">
                                        { x.name }
                                    </a>
                                )) }
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        </ModalDiv>
    );
};