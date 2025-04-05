import React, { createRef } from "react";
import ModalDiv from "./ModalDiv";

export default class AboutModal extends React.Component<{}, { activeTab: number }> {
    
    divRef = createRef<ModalDiv>();

    activeTabClasses = "bg-neutral-900 text-white border-neutral-500";
    inactiveTabClasses = "text-neutral-500 border-black hover:bg-black/50 hover:text-white hover:border-neutral-700 cursor-pointer";

    constructor(props: {}) {
        super(props);
        this.state = { activeTab: 0 }
    }

    setHidden = (value: boolean) => this.divRef.current?.setHidden(value);

    changeActiveTab = (value: number) => {
        this.setState({ activeTab: value })
    }

    render = () => (
        <ModalDiv title="About Me" ref={ this.divRef }>
            <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
                    Coming Soon
            </div>

            <footer className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-7xl">
                    <div className="h-16 flex items-end justify-stretch">
                        <div className="relative bg-black flex items-end justify-center w-full">

                            <div className={`bg-black w-full ${(this.state.activeTab === 0) ? "bg-neutral-900" : ""}`}>
                                <button
                                    type="button"
                                    className={ `px-3 py-2 text-sm font-medium w-full border-b-2 rounded-lg ${(this.state.activeTab === 0) ? this.activeTabClasses : this.inactiveTabClasses}` }
                                    onClick={() => this.changeActiveTab(0) }
                                >
                                    Overview
                                </button>
                            </div>

                            <div className={`bg-black w-full ${(this.state.activeTab === 1) ? "bg-neutral-900" : ""}`}>
                                <button
                                    type="button"
                                    className={ `px-3 py-2 text-sm font-medium w-full border-b-2 rounded-lg ${(this.state.activeTab === 1) ? this.activeTabClasses : this.inactiveTabClasses}` }
                                    onClick={() => this.changeActiveTab(1) }
                                >
                                    Professional Experience
                                </button>
                            </div>

                            <div className={`bg-black w-full ${(this.state.activeTab === 2) ? "bg-neutral-900" : ""}`}>
                                <button
                                    type="button"
                                    className={ `px-3 py-2 text-sm font-medium w-full border-b-2 rounded-lg ${(this.state.activeTab === 2) ? this.activeTabClasses : this.inactiveTabClasses}` }
                                    onClick={() => this.changeActiveTab(2) }
                                >
                                    Contact Me
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </ModalDiv>
    );
};