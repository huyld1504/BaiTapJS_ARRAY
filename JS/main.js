var arrNum = [5,7,3,-4,9,10]

document.querySelector('#btn_themGT').onclick = function () {
    var arrayIndex = +document.querySelector('#nhapGTMang').value
    arrNum.push(arrayIndex)
    console.log(arrNum)
    document.querySelector('#arrayNumber').innerHTML ='Mảng arrNum: [' +arrNum +']'
}

document.querySelector('#btn_TinhTongCacSoDuong').onclick = function () {
    var sumPositiveNumber = 0
    for (var i=0;i<=arrNum.length;i++) {
        if (arrNum[i]>0) {
            sumPositiveNumber+=arrNum[i]
        }
    }
    document.querySelector('#tinhTongSoDuong').innerHTML= 'Tổng các số dương trong mảng =' + sumPositiveNumber
}

document.querySelector('#btn_demCacSoDuong').onclick = function () {
    var n=0
    for (var i=0;i<=arrNum.length;i++) {
        if (arrNum[i] >0) {
            n++
        }
    }
    document.querySelector('#demSoDuong').innerHTML= 'Số lượng số nguyên dương trong mảng là:' + n
}

document.querySelector('#btn_minArray').onclick = function () {
    var minArray = arrNum[0]
    for (var i=1;i<=arrNum.length;i++) {
        if (arrNum[i]<minArray) {
            minArray=arrNum[i]
        }
    }
    document.querySelector('#minArray').innerHTML= 'Giá trị nhở nhất trong mảng:' + minArray
}

document.querySelector('#btn_minArrayPositiveNum').onclick = function () {
    var arrPositiveNum = []
    for (var index = 0;index<=arrNum.length; index++) {
        if(arrNum[index]>0) {
            arrPositiveNum.push(arrNum[index])
        }
    }
    var minPositiveNum = arrPositiveNum[0]
    for (var i=1;i<=arrPositiveNum.length; i++) {
        if (arrPositiveNum<minPositiveNum) {
            minPositiveNum= arrPositiveNum[i]
        }
    }
    document.querySelector('#minArrayPositiveNum').innerHTML= 'Số dương nhỏ nhất trong mảng:' + minPositiveNum
}

document.querySelector('#btn_soChanCuoiCung').onclick = function () {
    var arrSoChan = []
    for (var i=0;i<=arrNum.length;i++) {
        if (arrNum[i]%2==0) {
            arrSoChan.push(arrNum[i])
        }
    }
    if (arrSoChan[arrSoChan.length-1]%2==0) {
        var soChanCuoiCung =  arrSoChan[arrSoChan.length-1]
        document.querySelector('#soChanCuoiCung').innerHTML = 'Số chẵn cuối cùng trong mảng:'+ soChanCuoiCung
    } else {
        document.querySelector('#soChanCuoiCung').innerHTML = -1
    }
}

document.querySelector('#btn_tangDan').onclick = function () {
    for (var i=0;i<=arrNum.length;i++) {
        for (var j = i+1;j<arrNum.length;j++) {
            var min_Array = arrNum[i]
            var valueChange = arrNum[i]
            if (arrNum[j]<arrNum[i]) {
                arrNum[i] = arrNum[j]
                arrNum[j] = valueChange
            }
        }
    }
    document.querySelector('#tangDan').innerHTML = 'Xắp xếp theo thứ tự tăng dần:'  +arrNum
}

document.querySelector('#btn_doiGiaTri').onclick = function () {
    var change_1 = +document.querySelector('#giatriChange_1').value
    var change_2 = +document.querySelector('#giatriChange_2').value
    for (var i=0;i<=arrNum.length;i++) {
        if (arrNum[i] == change_1) {
            var index_i = i
        } else {
            document.querySelector('#doiGiaTri').innerHTML = -1 
        }
    }
    for (var j=0;j<=arrNum.length;j++) {
        if (arrNum[j] == change_2) {
            var index_j = j
        } else {
            document.querySelector('#doiGiaTri').innerHTML = -1 
        }
    }
    arrNum[index_i] = change_2
    arrNum[index_j] = change_1
    document.querySelector('#doiGiaTri').innerHTML = arrNum
}
