const date = new Date();

// 한국은 UTC 보다 9시간 빠름
const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;

const date_ = new Date(utc + 9 * 60 * 60 * 1000);

console.log(
    `${date_.getFullYear()}-${ex(date_.getMonth() + 1)}-${ex(date_.getDate())}`,
);

function ex(v) {
    if (v < 10) return '0' + v;
    else return v;
}
