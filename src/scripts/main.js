AOS.init();

const dateEvent = new Date("Mar 02, 2024 17:00:00");
const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const rangeEvent = timeStampEvent - timeStampNow;
    console.log(rangeEvent);

    const daysUntilEvent = Math.floor(rangeEvent / (1000*60*60*24));
    const hourUntilEvet = Math.floor((rangeEvent % (1000*60*60*24)) / (1000*60*60));
    const minutesUntilEvent = Math.floor((rangeEvent % (1000*60*60)) / (1000*60));
    const secondsUntilEvet = Math.floor((rangeEvent % (1000*60)) / 1000);

    document.getElementById('contator').innerText = `${daysUntilEvent}d ${hourUntilEvet}h ${minutesUntilEvent}m ${secondsUntilEvet}s`;

    if(rangeEvent < 0) {
        clearInterval(countHours);
        document.querySelector('#contator').innerHTML = 'Só no próximo ano agora &#x1F63E;'
    }

    document.querySelector('.button').addEventListener('mouseover', function() {
        document.querySelector('.button').innerHTML = 'Traz presente &#x1F63D;'
    });

    document.querySelector('.button').addEventListener('mouseout', function() {
        document.querySelector('.button').innerHTML = 'Confirme sua presença &#x1F609;'
    });

},1000)