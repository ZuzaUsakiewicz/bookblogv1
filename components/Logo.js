import { LogoContainer, LogoImage } from "../styles/Logo.styled";
import LogoBook from "../public/zetlogobook.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={`/`} passHref>
      <LogoContainer>
        <LogoImage
          src={LogoBook}
          alt="personal logo"
          layout="fill"
          objectFit="contain"
          quality={100}
        ></LogoImage>
      </LogoContainer>
    </Link>
  );
}
