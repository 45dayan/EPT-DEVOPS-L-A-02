// Switch to the target database used by the app
db = db.getSiblingDB('Poker');

// Insert the first placeholder record (will be skipped by the app's [1:] slice)
db.award.insert({
    "best": 999,
    "user": "system_init"
});

// Insert the second record (will be read successfully by min())
db.award.insert({
    "best": 12,
    "user": "seed_user"
});
