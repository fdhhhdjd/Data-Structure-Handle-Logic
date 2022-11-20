module.exports = {
    //! Loại bỏ những số trùng nhau lấy những cái không trùng
    RemoveDuplicateTakeNumber: () => {
        const arr = [1, 3, 2, 2, 4, 6, 6];
        const NewArr = []
        arr.forEach((element) => {
            let newData = NewArr.find((newNumber) => newNumber === element)
            if (newData) {
                return
            }
            return NewArr.push(element)
        })
    },
    //! Loại bỏ luôn số bị trùng 
    RemoveDuplicationNumber: () => {
        const arr = [1, 3, 2, 2, 4, 6, 6];
        const NewArr = []
        arr.forEach((element) => {
            const checkArr = arr.filter((item) => item === element).length > 1
            if (checkArr) {
                return
            }
            return NewArr.push(element)
        })
        console.log(NewArr)
    }


};