export const randomData = (data) => {
    return data[Math.floor(Math.random() * data.length)];
}

export const colorGenerator = () => {
    const hexadecimal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += randomData(hexadecimal);
    }
    return color;
}
