import Image from 'next/image';
import ThreeViewport from './ThreeViewport';

export default function Home() {
    return (
        <div className="h-screen w-screen">
            <ThreeViewport />
        </div>
    );
}
