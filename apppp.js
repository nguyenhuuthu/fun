// // Hàm cộng hai số (có return)
// function tinh_tong(a, b)
// {
//     return a + b;
// }
 
// // Lấy thông tin từ người dùng
// let a = parseInt(prompt("Nhập số a"));
// let b = parseInt(prompt("Nhập số b"));
 
// // Tính tổng
// let tong = tinh_tong(a, b);
 
// // In ra màn hình
// alert("Tổng hai số " + a + " + " + b + " = " + tong);


// //cach 2.
// // Hàm cộng hai số (không có return)
// function tinh_tong()
// {
//     // Lấy thông tin từ người dùng
//     let a = parseInt(prompt("Nhập số a"));
//     let b = parseInt(prompt("Nhập số b"));
     
//     // Tính tổng
//     var tong = a + b;
 
//     // In ra màn hình
//     alert("Tổng hai số " + a + " + " + b + " là " + tong);
// }
 
// // Gọi hàm tính tổng
// tinh_tong();

//bài 2
//Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return

// array = [1,2,3,4,5,6]
// function tong_so_le(array)
//     {
//         // Biến lưu trữ tổng
//         var tong = 0;

//         // Lặp qua mảng và cộng thêm tổng nếu là số lẻ
//         for (var i = 0; i < array.length; i++){
//             if (array[i] % 2 != 0){
//                 tong += array[i];
//             }
//         }

//         // Trả kết quả về
//         return tong;
//     }

//     // In ra trình duyệt
//     console.log("Tổng số lẻ là: " + tong_so_le(array));

//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.
//Gọi hàm vừa xây dựng được
// function binhphuong(){
//     let input =parseInt(prompt("moi nhap vao mot so"));
//     let value = Math.pow(input, 2);
//     alert(value);
// }
// binhphuong();
// 


//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây
//dựng được.

// function number(n) {
//     let input = prompt("nhap vao so nguyen bat ky")
//     let result = 1;
//     if (number > 1) {
//     for (let i = 1; i <= number; i++) {
//     result = result * i;
//     }
//     return result;
//     }
//     else {
//     return ;
//     }
//     }
//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm
//trả về true, ngược lại trả về false.
// function Number() {
//     let input = prompt("enter number");
//     if (isNaN(input)) {
//         console.log("true");
//     }else {
//         console.log("false");
//     }
// }
// number();



//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

    // function max() {
        // let a =Number(prompt("nhap vao so"));
    // let b =Number(prompt("nhap vao so"));
    // let c =Number(prompt("nhap vao so"));
    //     if (a > b && a>c) {
    //         max = a
    //     }else if (b > a && b > c) {
    //         max = b;
    //     }else{
    //        max = c

    //     }console.log(max);
    // }
    // max()

    //Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không
//. Nếu là nguyên dương trả về true, ngược lại trả về false.
// let a = Number(prompt("enter number a"));
// function checkingNumber(a) {
//   return a > 0 && a % 1 === 0;
// }
// console.log(checkingNumber(a));
//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.

// function acb (a,b){
//     let temp = a;
//     a = b;
//     b = temp;
// console.log(a);
// }
// abc();
//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// let a = prompt("nhap vao day so nguyen bat ki cach nhau dau phay").split(",");
// let b;
// let arr = [];
// function reverse(arr) {
//   for (let i = a.length - 1; i >= 0; i--) {
//     b = b + "," + a[i];
//     arr = b.split(",");
//     arr.splice(0, 1);
//   }
//   console.log(arr);
//   return arr;
// }
// reverse(arr);
