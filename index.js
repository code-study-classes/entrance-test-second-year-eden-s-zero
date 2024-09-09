const hotels = [
    {
        id: 1,
        name: "Hotel 'Star'",
        regionId: 101
    },
    {
        id: 2,
        name: "Hotel 'Wave'",
        regionId: 102
    }
];
const region = [
    {
        id: 101,
        name: 'Mocsow',
    },
    {
        id: 102,
        name: 'SPb'
    }
];

const roomCategories = {
    'Standart': 2,
    'Lux': 2,
    'Apartaments': 4
};

const rooms = [
  // Hotel num 1
  { id: 1, hotelId: 1, number: "101", category: "Standart", seats: 2, status: "Free" },
  { id: 2, hotelId: 1, number: "102", category: "Standart", seats: 2, status: "Free" },
  { id: 3, hotelId: 1, number: "103", category: "Lux", seats: 2, status: "Busy" },
  { id: 4, hotelId: 1, number: "104", category: "Lux", seats: 2, status: "Free" },
  { id: 5, hotelId: 1, number: "105", category: "Apartaments", seats: 4, status: "Busy" },
  { id: 6, hotelId: 1, number: "106", category: "Apartaments", seats: 4, status: "Free" },
  { id: 7, hotelId: 1, number: "107", category: "Standart", seats: 2, status: "Busy" },
  { id: 8, hotelId: 1, number: "108", category: "Standart", seats: 2, status: "Free" },
  { id: 9, hotelId: 1, number: "109", category: "Lux", seats: 2, status: "Free" },
  { id: 10, hotelId: 1, number: "110", category: "Apartaments", seats: 4, status: "Busy" },
  
  // Hotel num 2
  { id: 11, hotelId: 2, number: "201", category: "Standart", seats: 2, status: "Free" },
  { id: 12, hotelId: 2, number: "202", category: "Standart", seats: 2, status: "Free" },
  { id: 13, hotelId: 2, number: "203", category: "Lux", seats: 2, status: "Busy" },
  { id: 14, hotelId: 2, number: "204", category: "Lux", seats: 2, status: "Free" },
  { id: 15, hotelId: 2, number: "205", category: "Apartaments", seats: 4, status: "Busy" },
  { id: 16, hotelId: 2, number: "206", category: "Apartaments", seats: 4, status: "Free" },
  { id: 17, hotelId: 2, number: "207", category: "Standart", seats: 2, status: "Busy" },
  { id: 18, hotelId: 2, number: "208", category: "Standart", seats: 2, status: "Free" },
  { id: 19, hotelId: 2, number: "209", category: "Lux", seats: 2, status: "Free" },
  { id: 20, hotelId: 2, number: "210", category: "Apartaments", seats: 4, status: "Busy" }
];

function toggleRoomStatus(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        room.status = room.status === 'Free' ? 'Busy' : 'Free';
    } else {
        console.log("Numer don't found");
    }
}
function getFreeRoomsByDate(hotelId, startDate, endDate) {
    return rooms.filter(room => room.hotelId === hotelId && room.status === 'Free');
}

function testRoomFunction() {
    console.log('Test 1:  Change status hotel');

    console.log('Before changes:', rooms.find(r => r.number === '101').status);
    toggleRoomStatus(1);
    console.log('Before changes:', rooms.find(r => r.number === '101').status);
    
    console.log('Test 2: Search free rooms');

    const freeRooms = getFreeRoomsByDate(1, '2024-01-01', '2024-01-10');
    console.log('Free rooms hotel 1:', freeRooms.map(room => room.number));
}

testRoomFunction();

const guests = [
    { id: 1, fullName: 'Ivan Ivanov Ivanovich', phone: '88005553535' },
    { id: 2, fullName: 'Petr Petrov Petrovich', phone: '83598558523' },
    { id: 3, fullName: 'Alexandr Alexandrov Alexandrovich', phone: '89344685233' },
    { id: 4, fullName: 'Sergey Sergeev Sergeevich', phone: '89345769328' },
];
const payers = [
    { id: 1, name: 'Ivan Ivanov Ivanovich', payerType: 'individual' },
    { id: 2, name: 'OOO "Company"', payerType: 'legal entity' }
];
const bookings = [];
