function testRoomFunction() {
    console.log('Test 1:  Change status hotel');

    console.log('Before changes:', rooms.find(r => r.number === '101').status);
    toggleRoomStatus(1);
    console.log('Before changes:', rooms.find(r => r.number === '101').status);
    
    console.log('Test 2: Search free rooms');

    const freeRooms = getFreeRoomsByDate(1, '2024-01-01', '2024-01-10');
    console.log('Free rooms hotel:', freeRooms.map(room => room.number));
}

testRoomFunction();