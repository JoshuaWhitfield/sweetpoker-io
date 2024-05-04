import { signal } from "@preact/signals-react";
import ProfilePicture from "../components/ProfilePicture";

const usernameFunctions = {
    str: '',
    getUsername: () => this.str,
    setUsername: (newUsername) => { this.str = newUsername },
}

const profilePictureFunctions = (pfp) => {
    return {
        pfp,
        getPicture: () => this.pfp,
        setPicture: (newProfilePicture) => { this.pfp = newProfilePicture },
        
    }
}

const balanceFunctions = {
    body: 0,
    getBalance: () => this.body,
    setBalance: (newBalance) => { this.body = newBalance },
}

const chipsFunctions = {
    body: 0,
    getChips: () => this.body,
    setChips: (newChips) => { this.body = newChips },
}

const emailFunctions = {
    str: '',
    getEmail: () => this.str,
    setEmail: (newEmail) => { this.email = newEmail },
}

const statusFunctions = {
    boolean: false,
    isLoggedIn: () => this.boolean,
    setLoggedIn: (newBoolean = true) => { this.boolean = newBoolean },
}

class Account {
    
    username = signal(usernameFunctions);
    withUsername = () => this.username.value;
    resetUsername = () => { this.username.value = usernameFunctions };

    pfp = signal(profilePictureFunctions(<ProfilePicture/>));
    withPFP = () => this.pfp.value;
    resetPFP = () => { this.pfp.value = profilePictureFunctions(<ProfilePicture/>) };

    balance = signal(balanceFunctions);
    withBalance = () => this.balance.value;
    resetBalance = () => { this.balance.value = balanceFunctions };

    chips = signal(chipsFunctions);
    withChips = () => this.chips.value;
    resetChips = () => { this.chips.value = chipsFunctions };

    email = signal(emailFunctions);
    withEmail = () => this.email.value;
    resetEmail = () => { this.email.value = emailFunctions };

    status = signal(statusFunctions);
    withStatus = () => this.status.value;
    resetStatus = () => { this.status.value = statusFunctions };

    resetAccount = () => {
        this.pfp.resetPFP()
        this.email.resetEmail()
        this.chips.resetChips()
        this.status.resetStatus()
        this.balance.resetBalance()
        this.username.resetUsername()
    }

}

export const account = new Account();