import Image from 'next/image';
import Viewport3D from './3d-elements/Viewport3D';

export default function Home() {
    return (
        <div className="h-screen w-screen">
            <Viewport3D />
        </div>
    );
}
