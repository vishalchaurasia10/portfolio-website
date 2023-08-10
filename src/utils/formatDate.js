function formatDate(inputDate) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${months[parseInt(month, 10) - 1]}, ${year}`;

    return formattedDate;
}

export default formatDate;