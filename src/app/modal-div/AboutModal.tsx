import React, { createRef } from "react";
import ModalDiv from "./ModalDiv";
import * as TB from "../components/TechBadge";

export default class AboutModal extends React.Component<{ onClose?: () => void }, { activeTab: number }> {
    
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
        <ModalDiv title="About Me" ref={ this.divRef } onClose={this.props.onClose}>
            <div className="grid px-6">
                <div className={`w-auto ${this.state.activeTab === 0 ? '' : 'hidden'}`}>
                    <h1 className="text-4xl pb-4">Hi,</h1>
                    <div className="flex flex-col md:flex-row items-center pb-4">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-2xl max-w-4xl">I am <span className="font-semibold">Junrick</span>, a developer who loves making games and learning new things.</h2>
                            <h2 className="text-2xl max-w-4xl">I specialize in <span className="font-semibold">Game and Web Development</span>, and I'm excited to work on projects that challenge me and push me to experience new and interesting technologies.</h2>
                        </div>
                        {/*<img src={profileImage} className="rounded-full m-12 w-3/6"/>*/}
                    </div>

                    <div className="flex flex-col gap-y-4 py-4">
                        <div>
                            <h1 className="text-2xl pb-2">Engines/Frameworks/Technologies:</h1>
                            <div className="flex flex-row gap-x-3 gap-y-3 flex-wrap">
                                <TB.UnityBadge />
                                <TB.GodotBadge />
                                <TB.ConstructBadge />
                                <TB.PygameBadge />
                                <TB.ReactBadge />
                                <TB.VueBadge />
                                <TB.LaravelBadge />
                                <TB.ThreeJsBadge />
                                <TB.MongoDbBadge />
                                <TB.JenkinsBadge />
                                <TB.GitBadge />
                                <TB.PlasticBadge />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl pb-2">Languages:</h1>
                            <div className="flex flex-row gap-x-3 gap-y-3 flex-wrap">
                                <TB.CppBadge />
                                <TB.CsBadge />
                                <TB.PyBadge />
                                <TB.JsBadge />
                                <TB.TsBadge />
                                <TB.PhpBadge />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-auto ${this.state.activeTab !== 0 ? '' : 'hidden'}`}>
                    <h2 className="text-2xl max-w-4xl">
                        Check out&nbsp;
                        <a
                            href="https://www.dropbox.com/scl/fi/pty9ngn9j2pd49um027ou/bation-resume-v7-1-1.pdf?rlkey=dc9lcj8akg2jg597b8n54evp5&st=4tuq8hcc&dl=0" target="_blank"
                            className="underline font-semibold hover:text-neutral-500"
                        >
                            my resume
                        </a>
                        &nbsp;for more info.
                    </h2>
                </div>
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