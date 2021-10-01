interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    hero: string;
}

export default function HeroImage(props: Props) {
    const { hero } = props;
    return (
        <img
            src={process.env.PUBLIC_URL + `/images/heroes/${hero}`}
            alt={hero.substring(0, hero.lastIndexOf("."))}
            {...props}
        />
    );
}
