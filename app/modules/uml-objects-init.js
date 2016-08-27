export default [
    {
        id: 1,
        text: 'Get chopping board',
        status: 'pending',
        type: 'ACTION'
    }, {
        id: 2,
        text: 'Get tomato',
        status: 'pending',
        type: 'ACTION'
    }, {
        id: 3,
        text: 'Get lettuce',
        status: 'pending',
        type: 'ACTION'
    }, {
        id: 4,
        text: 'Get onion',
        status: 'pending',
        type: 'ACTION'
    }, {
        id: 5,
        type: 'SYNCHRONISATION_BAR'
    }, {
        id: 6,
        text: 'Get burger',
        status: 'pending',
        type: 'ACTION'
    }, {
        id: 7,
        text: 'Heat grill',
        status: 'pending',
        type: 'ACTION'
    }, {
        id: 8,
        type: 'SYNCHRONISATION_BAR'
    }, {
        id: 9,
        text: 'Slice tomato',
        status: 'pending',
        goTo: 15,
        type: 'ACTION'
    }, {
        id: 10,
        text: 'Chop lettuce',
        status: 'pending',
        goTo: 15,
        type: 'ACTION'
    }, {
        id: 11,
        text: 'Chop onion',
        status: 'pending',
        goTo: 15,
        type: 'ACTION'
    }, {
        id: 12,
        text: 'Get cheese',
        status: 'pending',
        goTo: 15,
        type: 'ACTION'
    }, {
        id: 13,
        text: 'Grill burger',
        status: 'pending',
        goTo: 15,
        type: 'ACTION'
    }, {
        id: 14,
        text: 'Toast bun',
        status: 'pending',
        goTo: 15,
        type: 'ACTION'
    }, {
        id: 15,
        type: 'SYNCHRONISATION_BAR'
    }, {
        id: 16,
        text: 'Assemble bun',
        type: 'ACTION',
        status: 'pending'
    }, {
        id: 17,
        text: 'Serve',
        status: 'pending',
        type: 'ACTION'
    }
];