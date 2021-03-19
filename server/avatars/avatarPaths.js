// OBJECT THAT HOLDS THE PATHS TO THE DIFFERENT AVATARS IN THE PUBLIC FOLDER

// Whether the avatars should be red green blue or pastels
const avatarPath = true ? "rgb" : "pastel";

// The paths
export const avatarPaths = {
    first: {
        color1: `/img/avatars/${avatarPath}/shape1_color1.png`,
        color2: `/img/avatars/${avatarPath}/shape1_color2.png`,
        color3: `/img/avatars/${avatarPath}/shape1_color3.png`
    },
    second: {
        color1: `/img/avatars/${avatarPath}/shape2_color1.png`,
        color2: `/img/avatars/${avatarPath}/shape2_color2.png`,
        color3: `/img/avatars/${avatarPath}/shape2_color3.png`
    },
    third: {
        color1: `/img/avatars/${avatarPath}/shape3_color1.png`,
        color2: `/img/avatars/${avatarPath}/shape3_color2.png`,
        color3: `/img/avatars/${avatarPath}/shape3_color3.png`
    }
};