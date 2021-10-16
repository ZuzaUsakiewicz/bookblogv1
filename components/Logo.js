import { LogoContainer, LogoImage } from "../styles/Logo.styled";
import LogoBook from "../public/zetlogobook.svg";

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage
        src={LogoBook}
        alt="personal logo"
        layout="fill"
        objectFit="contain"
        quality={100}
      ></LogoImage>
    </LogoContainer>
  );
}
