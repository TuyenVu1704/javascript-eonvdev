// Bài 1: Hàm đếm ngược thời gian
// function counter(a) {
//     const timer = setInterval(() => {
//         a -= 100;
//         console.log(a);
//         if (a == 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

// counter(1000);

//  Bài 2: Tính thời gian đăng nhập

function timerSince(seconds) {
    let nowDate = new Date();
    let pastDate = new Date(seconds);
    let nowDateMiliSeconds = nowDate.getTime();
    let pastDateMiliSeconds = pastDate.getTime();
    const timerMiliseconds = Math.floor(
        (nowDateMiliSeconds - pastDateMiliSeconds) / 1000
    );
    let timer = timerMiliseconds / 31536000;
    if (timer > 1) {
        console.log(Math.floor(`${timer} năm trước`));
    }
    timer = timerMiliseconds / 2678400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tháng trước`);
    }
    timer = timerMiliseconds / 604800;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tuần trước`);
    }
    timer = timerMiliseconds / 86400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} ngày trước`);
    }
    timer = timerMiliseconds / 3600;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giờ trước`);
    }
    timer = timerMiliseconds / 60;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} phút trước`);
    }
}

// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 24 * 60 * 60 = 86400
// 1 giờ = 60 * 60 = 3600
// 1 phút = 60

timerSince("Fri Jul 28 2023 13:52:44 GMT+0700 (GMT+07:00)");
