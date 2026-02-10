import { useState } from "react";
import Sidebar from "./components/Sidebar";

interface Account {
    name: string;
    note: string;
}

const accounts: Account[] = [
    { name: "main", note: "immo1" },
    { name: "smurf", note: "practice account" },
    { name: "alt", note: "alt for friends" },
];

export default function App() {
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(
        null,
    );

    return (
        <div className="flex h-screen">
            <Sidebar
                accounts={accounts}
                selectedAccount={selectedAccount}
                onSelectAccount={setSelectedAccount}
            />
            <div className="flex-1">
                <p>
                    {selectedAccount
                        ? selectedAccount.name
                        : "Select an account"}
                </p>
            </div>
        </div>
    );
}
