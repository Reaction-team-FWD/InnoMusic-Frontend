import classes from "./Artist.module.scss";
import Image, { StaticImageData } from "next/image";

export default function Artist({
  imageSrc,
  imageAlt,
  name,
}: {
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  name: string;
}) {
  return (
    <div className={classes.artistDiv}>
      <div className={classes.imageWrapper}>
        <Image
          className={classes.image}
          src={imageSrc}
          alt={imageAlt ?? name}
          width={100}
          height={100}
        />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.type}>Artist</p>
    </div>
  );
}
