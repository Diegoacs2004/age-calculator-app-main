function mostrarResultado() {
    const inputDay = parseInt(document.getElementById("day").value);
    const inputMonth = parseInt(document.getElementById("month").value);
    const inputYear = parseInt(document.getElementById("year").value);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() ;
    const currentDay = new Date().getDate();

    let resultYear = currentYear - inputYear;
    let resultMonth = currentMonth - inputMonth;
    let resultDay = currentDay - inputDay;

    if (resultMonth < 0) {
        resultYear--;
        resultMonth += 12;
      }
    


    document.getElementById("years").textContent = resultYear;
    document.getElementById("months").textContent = resultMonth;
    document.getElementById("days").textContent = currentDay;
}