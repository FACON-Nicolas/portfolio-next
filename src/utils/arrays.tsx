export const groupBy = <T,>(array: T[], key: string): Record<string, T[]> => {
    return array.reduce((acc: Record<string, T[]>, current: T) => {
        const keyValue = (current as any)[key];
        acc[keyValue] = acc[keyValue] || [];
        acc[keyValue].push(current);
        return acc;
    }, {});
};

export const range = (end: number) => {
    return Array.from({ length: end });
}