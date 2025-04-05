import React, { ReactNode } from "react";

export interface ModalDivProps {
    children?: ReactNode,
    title?: string,
    hidden?: boolean,
}

export default class ModalDiv extends React.Component<ModalDivProps, { hidden: boolean }> {
    constructor(props: ModalDivProps)
    {
        super(props);
        this.state = { hidden: this.props.hidden ?? true };
    }

    setHidden = (value: boolean) => this.setState({ hidden: value });

    render = () => (
        <div className={`relative z-10 transition-all ease-out duration-300 ${this.state.hidden ? "opacity-0 invisible" : "opacity-100 visible"}`} role="dialog" aria-modal="true">
            
            <div className="fixed inset-0 hidden bg-black/75 md:block" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className={`flex w-full transform text-left text-base transition ease-out duration-300 ${this.state.hidden ? "opacity-0 translate-y-4 md:translate-y-0 md:scale-95" : "opacity-100 translate-y-0 md:scale-100"} md:my-8 md:max-w-3xl lg:max-w-4xl`}>
                        <div className="relative flex w-full items-center overflow-hidden bg-neutral-900 pt-14 shadow-2xl sm:pt-8">
                            <button type="button" className="absolute top-8 right-6 text-gray-200 cursor-pointer hover:text-red-800 md:top-4 md:right-4 lg:top-4 lg:right-4"
                                onClick={_ => this.setHidden(true)}
                            >
                                <span className="sr-only">Close</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                <div className="col-span-12">
                                    <h2 className="text-3xl font-bold text-yellow-500 sm:pr-12 px-6">
                                        { this.props.title ?? "Coming Soon" }
                                    </h2>
                                    <div className="pt-6">
                                        { this.props.children ?? "Coming Soon" }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}