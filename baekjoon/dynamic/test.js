function solution(birth) {
    const births = [...birth];
    let result = 0;
    let next = false;

    const isYearPass = (year) => {
        const _year = parseInt(year);

        if (1900 <= _year && _year <= 2021) return true;
        else return false;
    }

    const isMonthPass = (month) => {
        const _month = parseInt(month);

        if (1 <= _month && _month <= 10) { // 2자리를 맞추기 위해
            if (month === `0${_month}`) {
                return true;
            }
        } else if (11 <= _month && _month <= 12) {
            if (month === String(_month)) {
                return true;
            }
        } else {
            return false;
        }
    }

    const isDayPass = (month, day) => {
        if (month === "01" || month === "03" || month === "05" || month === "07" || month === "08" || month === "10" || month === "12") {
            if ("01" <= day && day <= "31") {
                return true;
            }
        }

        if (month === "04" || month === "06" || month === "09" || month === "11") {
            if ("01" <= day && day <= "30") {
                return true;
            }
        }

        return false;
    }

    const isLeayYear = (year, day) => {
        const _year = parseInt(year);
        
        if (_year % 400 === 0) {
            if (day.length === 2) {
                if (1 <= parseInt(day) && parseInt(day) <= 29) {
                    return true;
                }
            }

            return false;
        } else if (_year % 4 === 0 && _year % 100 !== 0) {
            if (day.length === 2) {
                if (1 <= parseInt(day) && parseInt(day) <= 29) {
                    return true;
                }
            }

            return false;
        } else {
            if (day.length === 2) {
                if (1 <= parseInt(day) && parseInt(day) <= 28) {
                    return true;
                }
            }

            return false;
        }
    }

    births.forEach(item => {
        const piece = item.split("-");
        
        if (piece.length === 3) { 
            const [year, month, day] = piece;

            if (year.length === 4 && month.length === 2 && day.length === 2) { // YYYY-MM-DD 형식을 만족
                next = isYearPass(year);
            
                if (next) { // 연도 확인
                    next = isMonthPass(month)
                }

                if (next) {
                    if (month === "02") {
                        next = isLeayYear(year, day)
                    } else {
                        next = isDayPass(month, day);
                    }
                }

                if (next) {
                    result++;
                }
            }           
        }
    })

    return result;
}