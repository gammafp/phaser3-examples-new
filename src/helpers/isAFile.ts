export const isAFile = (path: string) => {
    return /\.js$|\.ts$/.test(path);
}