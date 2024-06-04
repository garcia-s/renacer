


function arr_sum(arr) {
    if (!Array.isArray(arr)) {
        return 0
    }

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

test("Sumar 1,2,3", () => {
    //ARRANGE 

    //ACT
    let res = arr_sum([1, 2, 3])
    //ASSETT

    expect(res).toBe(6)
})


test("Sumar 1,2,3", () => {
    //ARRANGE 

    //ACT
    let res = arr_sum(null)
    //ASSETT

    expect(res).toBe(0)
})


