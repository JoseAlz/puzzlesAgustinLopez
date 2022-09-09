import media1 from "./slider-gin.jpg";
import media2 from "./slider-cerveza.jpg";
import media3 from "./slider-fernet.png";


export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];
