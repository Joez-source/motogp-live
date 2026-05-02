const races = [
    {
        name: "Thailand Grand Prix",
        circuit: "Chang International Circuit",
        country: "Thailand",
        datetimeUTC: "2026-02-27T07:00:00Z",
        info: "Season opener at the fast floodlit Chang circuit with sweeping corners and a passionate fan atmosphere."
    },
    {
        name: "Brazilian Grand Prix",
        circuit: "Autódromo Internacional Nelson Piquet",
        country: "Brazil",
        datetimeUTC: "2026-03-20T18:00:00Z",
        info: "A high-speed Brazilian round where traction and top-end speed are critical on the sweeping circuit."
    },
    {
        name: "Grand Prix of the Americas",
        circuit: "Circuit of the Americas",
        country: "USA",
        datetimeUTC: "2026-03-27T19:00:00Z",
        info: "Fast, technical American venue with a steep uphill run to turn one and a dramatic finish straight."
    },
    {
        name: "Spanish Grand Prix",
        circuit: "Circuito de Jerez-Ángel Nieto",
        country: "Spain",
        datetimeUTC: "2026-04-24T12:00:00Z",
        info: "Jerez is a classic riders’ circuit with heavy braking, quick changes of direction, and tight crowd-lined corners."
    },
    {
        name: "French Grand Prix",
        circuit: "Le Mans Bugatti Circuit",
        country: "France",
        datetimeUTC: "2026-05-08T12:15:00Z",
        info: "A historic Grand Prix venue with fast chicanes and a technical finale that rewards precision."
    },
    {
        name: "Catalan Grand Prix",
        circuit: "Circuit de Barcelona-Catalunya",
        country: "Spain",
        datetimeUTC: "2026-05-15T12:00:00Z",
        info: "Barcelona blends long straights with slow hairpins, demanding both power and chassis balance."
    },
    {
        name: "Italian Grand Prix",
        circuit: "Mugello Circuit",
        country: "Italy",
        datetimeUTC: "2026-05-29T12:00:00Z",
        info: "Mugello offers flowing rhythm, elevation changes and fast corner sequences for an epic Italian showdown."
    },
    {
        name: "Hungarian Grand Prix",
        circuit: "Hungaroring",
        country: "Hungary",
        datetimeUTC: "2026-06-05T12:00:00Z",
        info: "A tight and twisty layout where precision and traction are essential to mastering every lap."
    },
    {
        name: "Czech Grand Prix",
        circuit: "Automotodrom Brno",
        country: "Czech Republic",
        datetimeUTC: "2026-06-19T12:00:00Z",
        info: "Brno’s flowing corners and long straights make it a high-speed classic in the calendar."
    },
    {
        name: "Dutch TT",
        circuit: "TT Circuit Assen",
        country: "Netherlands",
        datetimeUTC: "2026-06-26T12:00:00Z",
        info: "The cathedral of speed features quick changes of direction and iconic banked corners."
    },
    {
        name: "German Grand Prix",
        circuit: "Sachsenring",
        country: "Germany",
        datetimeUTC: "2026-07-10T12:00:00Z",
        info: "A compact, flowing track where riders race through a forest and keep momentum at a premium."
    },
    {
        name: "British Grand Prix",
        circuit: "Silverstone Circuit",
        country: "United Kingdom",
        datetimeUTC: "2026-08-07T13:00:00Z",
        info: "Historic Silverstone combines fast sweepers with challenging braking zones, rewarding daring riders."
    },
    {
        name: "Aragon Grand Prix",
        circuit: "MotorLand Aragón",
        country: "Spain",
        datetimeUTC: "2026-08-28T12:00:00Z",
        info: "A modern Spanish layout with a mix of high-speed and technical corners for outright grip."
    },
    {
        name: "San Marino Grand Prix",
        circuit: "Misano World Circuit Marco Simoncelli",
        country: "Italy",
        datetimeUTC: "2026-09-11T12:00:00Z",
        info: "Misano demands bravery in tight turns and precision through its fast mid-section."
    },
    {
        name: "Austrian Grand Prix",
        circuit: "Red Bull Ring",
        country: "Austria",
        datetimeUTC: "2026-09-18T12:00:00Z",
        info: "Short laps and rapid acceleration make the Austrian track a power-focused challenge."
    },
    {
        name: "Japanese Grand Prix",
        circuit: "Twin Ring Motegi",
        country: "Japan",
        datetimeUTC: "2026-10-02T05:00:00Z",
        info: "A technical Japanese layout with heavy braking zones and a punchy ascent to the finish."
    },
    {
        name: "Indonesian Grand Prix",
        circuit: "Pertamina Mandalika International Street Circuit",
        country: "Indonesia",
        datetimeUTC: "2026-10-09T06:00:00Z",
        info: "A modern street-style track on the island of Lombok with flowing sectors and coastal conditions."
    },
    {
        name: "Australian Grand Prix",
        circuit: "Phillip Island Grand Prix Circuit",
        country: "Australia",
        datetimeUTC: "2026-10-23T03:00:00Z",
        info: "Phillip Island’s fast, flowing layout and coastal winds create dramatic riding conditions."
    },
    {
        name: "Malaysian Grand Prix",
        circuit: "Sepang International Circuit",
        country: "Malaysia",
        datetimeUTC: "2026-10-30T06:00:00Z",
        info: "A humid, high-speed circuit with long straights and challenging braking zones."
    },
    {
        name: "Qatar Grand Prix",
        circuit: "Lusail International Circuit",
        country: "Qatar",
        datetimeUTC: "2026-11-06T11:00:00Z",
        info: "The traditional season finale under lights with wide straights and fast flowing turns."
    },
    {
        name: "Portuguese Grand Prix",
        circuit: "Algarve International Circuit",
        country: "Portugal",
        datetimeUTC: "2026-11-20T14:00:00Z",
        info: "A twisty Portuguese circuit with aggressive cambers and a dramatic uphill final sector."
    },
    {
        name: "Valencia Grand Prix",
        circuit: "Circuit Ricardo Tormo",
        country: "Spain",
        datetimeUTC: "2026-11-27T13:00:00Z",
        info: "A tight final round around Valencia’s short, fan-packed stadium circuit."
    }
];

const timezones = [
    { label: 'India (IST)', zone: 'Asia/Kolkata' },
    { label: 'UK (GMT)', zone: 'Europe/London' },
    { label: 'USA (ET)', zone: 'America/New_York' },
    { label: 'Japan (JST)', zone: 'Asia/Tokyo' },
    { label: 'Australia (AEST)', zone: 'Australia/Sydney' }
];

const standings = [
    { position: 1, rider: 'Marco Bezzecchi', team: 'Aprilia Racing', points: 101 },
    { position: 2, rider: 'Jorge Martín', team: 'Aprilia Racing', points: 90 },
    { position: 3, rider: 'Fabio Di Giannantonio', team: 'Pertamina Enduro VR46 Racing Team', points: 71 },
    { position: 4, rider: 'Pedro Acosta', team: 'Red Bull KTM Factory Racing', points: 66 },
    { position: 5, rider: 'Marc Márquez', team: 'Ducati Lenovo Team', points: 57 },
    { position: 6, rider: 'Raúl Fernández', team: 'Trackhouse MotoGP Team', points: 54 },
    { position: 7, rider: 'Alex Márquez', team: 'BK8 Gresini Racing MotoGP', points: 53 },
    { position: 8, rider: 'Ai Ogura', team: 'Trackhouse MotoGP Team', points: 48 },
    { position: 9, rider: 'Francesco Bagnaia', team: 'Ducati Lenovo Team', points: 34 },
    { position: 10, rider: 'Enea Bastianini', team: 'Red Bull KTM Tech3', points: 30 }
];

const elements = {
    scheduleGrid: document.getElementById('scheduleGrid'),
    timezoneGrid: document.getElementById('timezoneGrid'),
    standingsTable: document.getElementById('standingsTable'),
    heroCountdown: document.getElementById('heroCountdown'),
    heroRaceName: document.getElementById('heroRaceName'),
    heroRaceMeta: document.getElementById('heroRaceMeta'),
    heroDetails: document.getElementById('heroDetails'),
    nextRaceDate: document.getElementById('nextRaceDate'),
    nextRaceTime: document.getElementById('nextRaceTime'),
    overlay: document.getElementById('overlay'),
    detailPanel: document.getElementById('detailPanel'),
    detailRaceName: document.getElementById('detailRaceName'),
    detailCircuit: document.getElementById('detailCircuit'),
    detailCountry: document.getElementById('detailCountry'),
    detailInfo: document.getElementById('detailInfo'),
    detailUtc: document.getElementById('detailUtc'),
    detailLocal: document.getElementById('detailLocal'),
    detailCountdown: document.getElementById('detailCountdown'),
    closeButton: document.getElementById('closeButton')
};

let countdownTimer = null;
let detailTimer = null;

function convertTime(date, timezone) {
    return new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour12: false,
        timeZone: timezone
    }).format(date);
}

function formatReadable(date) {
    return new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    }).format(date) + ' UTC';
}

function getUpcomingRace() {
    const now = new Date();
    const upcoming = races
        .map((race, index) => ({ ...race, index, date: new Date(race.datetimeUTC) }))
        .filter(race => race.date > now)
        .sort((a, b) => a.date - b.date);
    return upcoming[0] || races
        .map((race, index) => ({ ...race, index, date: new Date(race.datetimeUTC) }))
        .sort((a, b) => a.date - b.date)[0];
}

function renderRaces() {
    elements.scheduleGrid.innerHTML = '';
    const now = new Date();
    const nextRace = getUpcomingRace();
    races.forEach((race, index) => {
        const raceDate = new Date(race.datetimeUTC);
        const isFinished = raceDate < now;
        const isNext = nextRace && index === nextRace.index && !isFinished;
        const card = document.createElement('div');
        card.className = `race-card${isFinished ? ' finished' : ''}${isNext ? ' next' : ''}`;
        card.innerHTML = `
            <div class="race-number">${String(index + 1).padStart(2, '0')}</div>
            <div>
                <p class="race-title">${race.name}</p>
                <p class="race-track">${race.circuit}</p>
                <div class="race-location"><span>${race.country}</span><strong>${formatReadable(raceDate)}</strong></div>
                <div class="race-time"><span>UTC start</span><strong>${raceDate.toISOString().replace('T', ' ').replace('Z', ' UTC')}</strong></div>
                <div class="race-status">${isFinished ? 'Finished' : isNext ? 'Next race' : 'Upcoming'}</div>
            </div>
        `;
        card.addEventListener('click', () => openRaceDetails(index));
        elements.scheduleGrid.appendChild(card);
    });
}

function renderStandings() {
    elements.standingsTable.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'standings-grid headings';
    header.innerHTML = `
        <span>Position</span>
        <span>Rider</span>
        <span>Team</span>
        <span>Points</span>
    `;
    elements.standingsTable.appendChild(header);

    standings.forEach(row => {
        const item = document.createElement('div');
        item.className = 'standings-grid row';
        item.innerHTML = `
            <span>${row.position}</span>
            <span>${row.rider}</span>
            <span>${row.team}</span>
            <span>${row.points}</span>
        `;
        elements.standingsTable.appendChild(item);
    });
}

function renderTimezones() {
    elements.timezoneGrid.innerHTML = '';
    const race = getUpcomingRace();
    const date = new Date(race.datetimeUTC);
    timezones.forEach(tz => {
        const card = document.createElement('div');
        card.className = 'timezone-card';
        card.innerHTML = `
            <h3>${tz.label}</h3>
            <p>${convertTime(date, tz.zone)}</p>
            <div class="meta-list">
                <div class="meta-item"><span>Race</span><strong>${race.name}</strong></div>
                <div class="meta-item"><span>Circuit</span><strong>${race.circuit}</strong></div>
            </div>
        `;
        elements.timezoneGrid.appendChild(card);
    });
}

function updateHero() {
    const nextRace = getUpcomingRace();
    const date = new Date(nextRace.datetimeUTC);
    elements.heroRaceName.textContent = nextRace.name;
    elements.heroRaceMeta.textContent = `${nextRace.country} · ${nextRace.circuit}`;
    elements.heroDetails.textContent = nextRace.info;
    elements.nextRaceDate.textContent = new Intl.DateTimeFormat(undefined, {
        day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC'
    }).format(date);
    elements.nextRaceTime.textContent = `${date.toISOString().slice(11, 16)} UTC`;
}

function updateHeroCountdown() {
    const nextRace = getUpcomingRace();
    const target = new Date(nextRace.datetimeUTC).getTime();
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
        elements.heroCountdown.textContent = 'Live now';
        return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    elements.heroCountdown.textContent = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startCountdown() {
    updateHeroCountdown();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
        updateHeroCountdown();
        renderTimezones();
    }, 1000);
}

function openRaceDetails(index) {
    const race = races[index];
    const date = new Date(race.datetimeUTC);
    elements.detailRaceName.textContent = race.name;
    elements.detailCircuit.textContent = race.circuit;
    elements.detailCountry.textContent = race.country;
    elements.detailInfo.textContent = race.info;
    elements.detailUtc.textContent = date.toISOString().replace('T', ' ').replace('Z', ' UTC');
    elements.detailLocal.textContent = convertTime(date, Intl.DateTimeFormat().resolvedOptions().timeZone);
    updateDetailCountdown(date);
    if (detailTimer) clearInterval(detailTimer);
    detailTimer = setInterval(() => updateDetailCountdown(date), 1000);
    elements.overlay.classList.add('visible');
    elements.detailPanel.classList.add('visible');
}

function closeRaceDetails() {
    elements.overlay.classList.remove('visible');
    elements.detailPanel.classList.remove('visible');
    if (detailTimer) {
        clearInterval(detailTimer);
        detailTimer = null;
    }
}

function updateDetailCountdown(date) {
    const diff = date.getTime() - Date.now();
    if (diff <= 0) {
        elements.detailCountdown.textContent = 'Live now';
        return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    elements.detailCountdown.textContent = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function init() {
    renderRaces();
    renderStandings();
    renderTimezones();
    updateHero();
    startCountdown();
    elements.closeButton.addEventListener('click', closeRaceDetails);
    elements.overlay.addEventListener('click', closeRaceDetails);
}

window.addEventListener('DOMContentLoaded', init);
