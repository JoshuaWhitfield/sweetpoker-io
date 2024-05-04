import { signal } from "@preact/signals-react";

class Account {

    username = signal('');
    setUsername = (username) => this.username.value = username;

    email = signal('');
    setEmail = (email) => this.email.value = email;

    balance = signal(0);
    setBalance = (balance) => this.balance.value = balance;

    chips = signal(0);
    setChips = (chips) => this.chips.value = chips;

    isLoggedIn = signal(false);
    setIsLoggedIn = (bool = true) => this.isLoggedIn.value = bool;

}

const account = new Account();

export default account;