import { IGradients, Gradient } from "../types/theme";

const getRandomGradient = (gradients: IGradients) => {
    const gradientList: Gradient[] = Object.values(gradients as IGradients);
    const random = gradientList[Math.floor(Math.random() * gradientList.length)];
    return random;
};

export default getRandomGradient;
