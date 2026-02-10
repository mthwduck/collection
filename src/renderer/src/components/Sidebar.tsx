import AccountTab from "./AccountTab";

interface Account {
    name: string;
    note: string;
}

interface SidebarProps {
    accounts: Account[];
    selectedAccount: Account | null;
    onSelectAccount: (account: Account) => void;
}

export default function Sidebar({
    accounts,
    selectedAccount,
    onSelectAccount,
}: SidebarProps) {
    return (
        <div className="w-68 h-full flex flex-col bg-secondary border-accent border-r">
            <div className="flex border-accent border-b h-14 justify-start items-center">
                <svg
                    className="ml-4 mr-2 w-5 h-5 stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m16 6 4 14" />
                    <path d="M12 6v14" />
                    <path d="M8 8v12" />
                    <path d="M4 4v16" />
                </svg>
                <p className="mt-0.5 text-lg">Collection</p>
            </div>
            <div className="flex items-center bg-accent rounded-md mx-4 my-4 px-3 py-3">
                <svg
                    className="w-5 h-5 stroke-white mr-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                </svg>
                <input
                    type="text"
                    placeholder="Search accounts"
                    className="bg-transparent outline-none text-white placeholder-text-accent text-md w-full"
                />
            </div>
            {accounts.map((account) => (
                <AccountTab
                    key={account.name}
                    name={account.name}
                    note={account.note}
                    selected={selectedAccount === account}
                    onClick={() => onSelectAccount(account)}
                />
            ))}
            <div className="mt-auto p-6">
                <button className="w-full bg-riot-red text-white rounded-lg py-3 text-md cursor-pointer hover:brightness-90 transition">
                    Add Account
                </button>
            </div>
        </div>
    );
}
