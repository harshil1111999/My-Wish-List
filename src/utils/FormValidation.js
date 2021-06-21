const checkErrors = (name, wishes, setError) => {

    const formErrors = {}
    let hasError = false
    formErrors.name = ''
    formErrors.wishes = []

    if(name === '') {
        hasError = true
        formErrors.name = 'Name is required'
    }

    for(let i=0;i<wishes.length;i++) {
        if(wishes[i] === '') {
            hasError = true
            formErrors.wishes.push('Wish field can not be empty')
        } else {
            formErrors.wishes.push('')
        }
    }

    if(hasError) {
        setError(formErrors)
        return true
    }

    return false
}

export default checkErrors