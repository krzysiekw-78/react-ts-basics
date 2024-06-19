import {PropsWithChildren} from 'react';

type HeaderProps = PropsWithChildren<{
    image: {
        src: string;
        alt: string;
    }
}>;
export default function Header({image, children}: HeaderProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt}/>
            {children}
        </header>
    )
}