export function formatDate(inputDate) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${months[parseInt(month, 10) - 1]},${year}`;

    return formattedDate;
}

export function formatDateType2(inputDate) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)},${year}`;

    return formattedDate;
}
