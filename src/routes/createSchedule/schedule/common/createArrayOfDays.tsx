interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

export const createArrayOfDays = (selectedMonth:number, selectedYear:number) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'];

    let arrayOfDays = [];

    let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

    for(let i = 0; i < daysInMonth; i++){
        let whichDayIsIt = new Date(selectedYear, selectedMonth, i + 1).getDay();

        arrayOfDays.push(
            {
                dayDate: (i + 1) < 10 ? parseInt(`0${i + 1}`) : (i + 1),
                selectedMonth: selectedMonth,
                selectedYear: selectedYear,
                dayName: days[whichDayIsIt]
            }
        );
    }
    return arrayOfDays;
}