import classes from "./TopResult.module.scss";
import { SquareResult } from "@/components/SquareResult";
import { StaticImageData } from "next/image";
import { SearchResultBlock } from "@/components/SearchResultBlock";

export default function TopResult({
  imageSrc,
  imageAlt = "top result",
  name,
  type,
}: {
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  name: string;
  type: string;
}) {
  return (
    <div className={classes.mainBlock}>
      <SearchResultBlock title="Top result">
        <SquareResult
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          name={name}
          type={type}
        />
      </SearchResultBlock>
    </div>
  );
}
