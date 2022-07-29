let a = +prompt('Введите первое число')
let b = +prompt('Введите второе число')

let oper = prompt('Введите: "1 = +" , "2 = - " , "3 = * " , "4 = / " ,  ')


if (oper == 1){
    alert(a+b)
} else if (oper == 2){
    alert(a-b)
}
else if (oper == 3){
    alert(a*b)
}
else if (oper == 4){
    alert(a/b)
}