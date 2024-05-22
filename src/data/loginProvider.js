import { googleProvider } from "../firebase/firebaseconfig";
import imageGoogle from "../assets/google_1199414.png";
import imagePhone from "../assets/phone-call_3059446.png";

export const loginProviders = [
  {
    name: "Google",
    image: imageGoogle,
    colorButton: "#ee595e94",
    provider: googleProvider,
  },
  {
    name: "Celular",
    image: imagePhone,
    colorButton: "#171A1FFF",
    provider: null,
  },
];