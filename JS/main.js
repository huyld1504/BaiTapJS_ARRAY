var arrNum = [8,6,-20,10,4,-4,-16,9,7]
console.log(arrNum);



document.querySelector('#btn_themGT').onclick = function () {
    var arrayIndex = +document.querySelector('#nhapGTMang').value
    arrNum.push(arrayIndex)
    console.log(arrNum)
    document.querySelector('#arrayNumber').innerHTML = 'Mảng arrNum: [' + arrNum + ']'
}

//Bài 1: Tổng các số dương trong mảng
document.querySelector('#btn_TinhTongCacSoDuong').onclick = function () {
    var sumPositiveNumber = 0
    for (var i = 0; i <= arrNum.length; i++) {
        if (arrNum[i] > 0) {
            sumPositiveNumber += arrNum[i]
        }
    }
    document.querySelector('#tinhTongSoDuong').innerHTML = 'Tổng các số dương trong mảng =' + sumPositiveNumber
}

//Bài 2: Đếm có bao nhiêu số dương trong mảng
document.querySelector('#btn_demCacSoDuong').onclick = function () {
    var n = 0
    for (var i = 0; i <= arrNum.length; i++) {
        if (arrNum[i] > 0) {
            n++
        }
    }
    document.querySelector('#demSoDuong').innerHTML = 'Số lượng số nguyên dương trong mảng là:' + n
}

//Bài 3: Tìm số nhỏ nhất trong mảng
document.querySelector('#btn_minArray').onclick = function () {
    var minArray = arrNum[0]
    for (var i = 1; i <= arrNum.length; i++) {
        if (arrNum[i] < minArray) {
            minArray = arrNum[i]
        }
    }
    document.querySelector('#minArray').innerHTML = 'Giá trị nhỏ nhất trong mảng:' + minArray
}

//Bài 4: Tìm số dương nhỏ nhất trong mảng
document.querySelector('#btn_minArrayPositiveNum').onclick = function () {
    var arrPositiveNum = []
    for (var index = 0; index <= arrNum.length; index++) {
        if (arrNum[index] > 0) {
            arrPositiveNum.push(arrNum[index])
        }
    }
    var minPositiveNum = arrPositiveNum[0]
    for (var i = 1; i <= arrPositiveNum.length; i++) {
        if (arrPositiveNum[i] < minPositiveNum) {
            minPositiveNum = arrPositiveNum[i]
        }
    }
    document.querySelector('#minArrayPositiveNum').innerHTML = 'Số dương nhỏ nhất trong mảng:' + minPositiveNum
}

//Bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
document.querySelector('#btn_soChanCuoiCung').onclick = function () {
    var arrSoChan = []
    for (var i = 0; i <= arrNum.length; i++) {
        if (arrNum[i] % 2 == 0) {
            arrSoChan.push(arrNum[i])
        }
    }
    if (arrSoChan[arrSoChan.length - 1] % 2 == 0) {
        var soChanCuoiCung = arrSoChan[arrSoChan.length - 1]
        document.querySelector('#soChanCuoiCung').innerHTML = 'Số chẵn cuối cùng trong mảng:' + soChanCuoiCung
    } else {
        document.querySelector('#soChanCuoiCung').innerHTML = -1
    }
}

//Bài 7: Sắp xếp mảng theo thứ tự tăng dần
document.querySelector('#btn_tangDan').onclick = function () {
    for (var i = 0; i <= arrNum.length; i++) {
        for (var j = i + 1; j < arrNum.length; j++) {
            var min_Array = arrNum[i]
            var valueChange = arrNum[i]
            if (arrNum[j] < arrNum[i]) {
                arrNum[i] = arrNum[j]
                arrNum[j] = valueChange
            }
        }
    }
    document.querySelector('#tangDan').innerHTML = 'Xắp xếp theo thứ tự tăng dần:' + arrNum
}

//Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
document.querySelector('#btn_doiGiaTri').onclick = function () {
    var change_1 = +document.querySelector('#giatriChange_1').value
    var change_2 = +document.querySelector('#giatriChange_2').value
    var temp_1 = arrNum[change_1]
    var temp_2 = arrNum[change_2]
    if (change_1<= arrNum.length && change_2<= arrNum.length) {
        arrNum[change_1] = temp_2
        arrNum[change_2] = temp_1
        document.querySelector('#doiGiaTri').innerHTML = arrNum
    } else {
        document.querySelector('#doiGiaTri').innerHTML = -1
    }
}


//Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
document.querySelector('#btn_soNTDauTien').onclick = function () {
    for (var index = 0; index < arrNum.length; index++) {
        if (findPrimeNumber(arrNum[index]) == true) {
            var i = index
            break
        } else {
            var i = -1
        }
    }
    if (i!==-1) {
        document.querySelector('#soNTDauTien').innerHTML = 'Số nguyên tố đầu tiên: ' + arrNum[i]
    } else {
        document.querySelector('#soNTDauTien').innerHTML = i
    }
}

/**
 * Hàm này được sử dụng để kiểm tra số nguyên tố trong mảng
 * @param {*} so giá trị kiểm tra số nguyên tố
 * @returns 
 */
function findPrimeNumber(so) {
    var primeNumber = true
    for (var i = 2; i < Math.abs(so); i++) {
        if (so<=0 || so == 1) {
            primeNumber = false
        } else if (so % i == 0) {
            primeNumber = false
            break
        } else {
            primeNumber = true
        }
    }
    return primeNumber
}

//Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
document.querySelector('#btn_demSoNguyen').onclick = function () {
    var demSoNguyen = 0
    for (var i=0;i<arrNum.length;i++) {
        if (arrNum[i] % 1 === 0 ) {
            demSoNguyen ++
        }
    }
    document.querySelector('#demSoNguyen').innerHTML = 'Số nguyên trong mảng là:' + demSoNguyen
}

//Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
document.querySelector('#btn_soLuong').onclick = function () {
    var soDuong = 0
    var soAm = 0
    for (var i=0;i<arrNum.length;i++) {
        if (arrNum[i]>0) {
            soDuong++
        } else {
            soAm++
        }
    }
    var htmlOuput = ''
    if (soAm>soDuong) {
        htmlOuput = 'Số âm nhiều hơn số dương'
    } else {
        htmlOuput = 'Số dương nhiều hơn số âm'
    }
    document.querySelector('#soLuong').innerHTML = htmlOuput
}