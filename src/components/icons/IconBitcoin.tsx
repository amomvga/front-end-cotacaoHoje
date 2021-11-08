import bitcoin from "../../../public/img/bitcoin.png";
import Image from "next/image";

export default function IconBitcoin() {
  return (
    <div>
      <Image src={bitcoin}></Image>
    </div>
  );
}