import classes from './SquareResult.module.scss';
import Image, { StaticImageData } from 'next/image';

export default function SquareResult({
  imageSrc,
  imageAlt,
  name,
  type,
}: {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  name: string;
  type: string;
}) {
  return (
    <div className={classes.squareResult}>
      <div className={classes.imageWrapper}>
        <Image className={classes.image} src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.type}>{type}</p>
    </div>
  );
}
