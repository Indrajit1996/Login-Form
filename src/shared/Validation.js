export const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const validPasswordRegex = RegExp(
    /^(?=.*?[A-Z]).{6,}$/
);

export const requiredRegex = RegExp(
    /^\s*$/
)