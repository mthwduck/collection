import { useState } from "react";
import Sidebar from "./components/Sidebar";
import potion_sprite from "./assets/potion_sprite.png";

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
                {selectedAccount ? (
                    <p>{selectedAccount.name}</p>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <img
                            src={potion_sprite}
                            alt="Riversprite"
                            className="w-lg"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
