import React, { createRef } from "react";

export default class ModalDiv extends React.Component<{}, { hidden: boolean }> {
    constructor(props: {})
    {
        super(props)
        this.state = { hidden: false }
    }

    setHidden(value: boolean)
    {
        this.setState({ hidden: value })
    }

    render() {
        return (
            <div className={"relative z-10" + (this.state.hidden ? " hidden": "")} role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                    From: "opacity-0"
                    To: "opacity-100"
                    Leaving: "ease-in duration-200"
                    From: "opacity-100"
                    To: "opacity-0"*/}
                <div className="fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    {/* Modal panel, show/hide based on modal state.

                        Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        To: "opacity-100 translate-y-0 md:scale-100"
                        Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 md:scale-100"
                        To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"*/}
                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-neutral-900 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                            onClick={_ => this.setHidden(true)}
                        >
                            <span className="sr-only">Close</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                            <div className="sm:col-span-8 lg:col-span-12">
                                <h2 className="text-3xl font-bold text-gray-200 sm:pr-12">Coming Soon</h2>
                                <button type="button" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-red-800 px-8 py-3 text-base font-medium text-white hover:bg-red-900 focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:outline-hidden"
                                    onClick={_ => this.setHidden(true)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
};