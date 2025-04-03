import React, { createRef } from "react";
import ModalDiv from "./ModalDiv";

export default class ProjectsModal extends React.Component<{}, { activeTab: number }> {
    
    divRef = createRef<ModalDiv>();

    activeTabClasses = "bg-yellow-500 text-black";
    inactiveTabClasses = "text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer";

    constructor(props: {}) {
        super(props);
        this.state = { activeTab: 0 }
    }

    setHidden = (value: boolean) => this.divRef.current?.setHidden(value);

    changeActiveTab = (value: number) => {
        this.setState({ activeTab: value })
    }

    render = () => (
        <ModalDiv title="Projects" ref={ this.divRef } hidden={false}>
            <div className="flex">
                <div className="ms-3">
                    <div id="tabs-pill-vertical-1" className={ (this.state.activeTab === 0) ? "" : "hidden" } role="tabpanel" aria-labelledby="tabs-pill-vertical-item-1">
                        <p className="text-base-content/80">
                            Coming soon.
                        </p>
                    </div>
                    <div id="tabs-pill-vertical-2" className={ (this.state.activeTab === 1) ? "" : "hidden" } role="tabpanel" aria-labelledby="tabs-pill-vertical-item-2">
                        <p className="text-base-content/80">
                            Coming soon.
                        </p>
                    </div>
                </div>
            </div>

            <footer className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="mx-auto flex space-x-4">
                                <button type="button" className={ `rounded-md px-3 py-2 text-sm font-medium ${(this.state.activeTab === 0) ? this.activeTabClasses : this.inactiveTabClasses}` }
                                    onClick={() => this.changeActiveTab(0) }
                                >
                                    Personal
                                </button>
                                <button type="button" className={ `rounded-md px-3 py-2 text-sm font-medium ${(this.state.activeTab === 1) ? this.activeTabClasses : this.inactiveTabClasses}` }
                                    onClick={() => this.changeActiveTab(1) }
                                >
                                    Pro
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </ModalDiv>
    );
};