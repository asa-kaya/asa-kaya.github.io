import React, { createRef } from "react";
import ModalDiv from "./ModalDiv";
import * as PROJECTS from '../common/projects'

export default class ProjectsModal extends React.Component<{ onClose?: () => void }, { activeTab: number }> {
    
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
        <ModalDiv title="Projects" ref={ this.divRef } onClose={this.props.onClose}>
            <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
                    { PROJECTS.projects
                        .filter(project => project.type === this.state.activeTab as PROJECTS.ProjectType).map(project => {
                            return (
                                <div key={project.title} className="w-auto">
                                    <div
                                        className="aspect-square bg-cover bg-center w-50"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    >
                                        <a href={ project.projectUrl ?? project.sourceCodeUrl } target="_blank">
                                            <div className="w-full h-full bg-black transition-all opacity-0 hover:opacity-90">
                                                <div className="flex flex-col w-full h-full justify-end">
                                                    <p className="text-4xl font-bold pr-2 text-yellow-500 text-right">
                                                        { project.title }
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>

            <footer className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-7xl">
                    <div className="h-16 flex items-end justify-stretch">
                        <div className="relative bg-black flex items-end justify-center w-full">
                            { [...Array(Object.keys(PROJECTS.ProjectType).length / 2).keys()].map(key => {
                                    return (
                                    <div key={key} className={`bg-black w-full ${(this.state.activeTab === key) ? "bg-neutral-900" : ""}`}>
                                        <button
                                            type="button"
                                            className={ `px-3 py-2 text-sm font-medium w-full border-b-2 rounded-lg ${(this.state.activeTab === key) ? this.activeTabClasses : this.inactiveTabClasses}` }
                                            onClick={() => this.changeActiveTab(key as number) }
                                        >
                                            { PROJECTS.ProjectType[key] }
                                        </button>
                                    </div>)
                                    ;
                                })
                            }
                        </div>
                    </div>
                </div>
            </footer>
        </ModalDiv>
    );
};