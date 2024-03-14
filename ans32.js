"use strict";
let current_users = ["john", "alice", "peter", "sarah", "admin"];
let new_users = ["mary", "Sarah", "JOHN", "mike", "julia"];
current_users = current_users.map(username => username.toLowerCase());
for (let new_username of new_users) {
    let lowercased_new_username = new_username.toLowerCase();
    if (current_users.includes(lowercased_new_username)) {
        console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
        current_users.push(lowercased_new_username);
    }
}
