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
    {
        id: 1,
        hotelId: 1,
        number: '101',
        category: 'Standart',
        seats: roomCategories['Standart'],
        status: 'Free'
    },
    {
        id: 2,
        hotelId: 1,
        number: '102',
        category: 'Lux',
        seats: roomCategories['Lux'],
        status: 'Free'
    },
    {
        id: 3,
        hotelId: 1,
        number: '103',
        category: 'Apartaments',
        seats: roomCategories['Apartaments'],
        status: 'Busy'
    },
    //Hotel num 2
    {
        id: 4,
        hotelId: 2,
        number: '201',
        category: 'Standart',
        seats: roomCategories['Standart'],
        status: 'Free'
    },
    {
        id: 5,
        hotelId: 2,
        number: '202',
        category: 'Lux',
        seats: roomCategories['Lux'],
        status: 'Busy'
    },
    {
        id: 6,
        hotelId: 2,
        number: '203',
        category: 'Apartaments',
        seats: roomCategories['Apartaments'],
        status: 'Free'
    }
];

function toggleRoomStatus(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (room) {
        room.status = room.status === 'Free' ? 'Busy' : 'Free';
    } else {
        console.log("Numer don't found");
    }
}