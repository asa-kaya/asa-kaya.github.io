import React, { ReactNode } from "react";
import * as TECH from "../common/technologies";

export interface BadgeProps {
    technology: TECH.Technology
}

const TechBadge = (props: BadgeProps) => (
    <a href={props.technology.website} target="_blank"
        className={`inline-flex items-center rounded-md px-2 py-1 text-s font-medium ring-1 ring-inset`}
    >
        {props.technology.name}
    </a>
);

export const UnityBadge = () => <TechBadge technology={TECH.Unity} />;
export const GodotBadge = () => <TechBadge technology={TECH.Godot} />;
export const ConstructBadge = () => <TechBadge technology={TECH.Construct3} />;
export const PygameBadge = () => <TechBadge technology={TECH.Pygame} />;
export const ReactBadge = () => <TechBadge technology={TECH.ReactJS} />;
export const VueBadge = () => <TechBadge technology={TECH.VueJS} />;
export const LaravelBadge = () => <TechBadge technology={TECH.Laravel} />;
export const R3FBadge = () => <TechBadge technology={TECH.ReactThreeFiber} />;
export const ThreeJsBadge = () => <TechBadge technology={TECH.ThreeJS} />;
export const MongoDbBadge = () => <TechBadge technology={TECH.MongoDB} />;
export const GitBadge = () => <TechBadge technology={TECH.Git} />;
export const JenkinsBadge = () => <TechBadge technology={TECH.Jenkins} />;
export const PlasticBadge = () => <TechBadge technology={TECH.PlasticSCM} />;

export const CppBadge = () => <TechBadge technology={TECH.Cpp} />;
export const CsBadge = () => <TechBadge technology={TECH.Csharp} />;
export const PyBadge = () => <TechBadge technology={TECH.Python} />;
export const JsBadge = () => <TechBadge technology={TECH.Javascript} />;
export const TsBadge = () => <TechBadge technology={TECH.Typescript} />;
export const PhpBadge = () => <TechBadge technology={TECH.PHP} />;

export default TechBadge;