const timeStampToDate = (timeStamp: number) : string => {
    const date = new Date(Number(timeStamp));
    return date.toLocaleDateString();
}

export default timeStampToDate;