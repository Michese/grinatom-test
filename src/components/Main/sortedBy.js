const sortedBy = (field, isAsc = true) => {
    return (a, b) => {

        let flag
        if (a[field] === b[field]) {
            flag = 0
        } else if (isAsc && a[field] > b[field] || !isAsc && a[field] < b[field]) {
            flag = 1
        } else {
            flag = -1
        }

        return flag
    }
}

export default sortedBy