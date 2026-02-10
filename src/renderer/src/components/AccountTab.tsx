interface AccountTabProps {
    name: string;
    note: string;
    selected: boolean;
    onClick: () => void;
}

export default function AccountTab({
    name,
    note,
    selected,
    onClick,
}: AccountTabProps) {
    return (
        <div
            onClick={onClick}
            className={`group flex items-center justify-start h-16 text-white cursor-pointer hover:bg-accent ${selected ? "bg-accent" : ""}`}
        >
            <div
                className={`rounded-full w-10 h-10 ml-6 mr-3 flex justify-center items-center ${selected ? "bg-secondary" : "bg-accent group-hover:bg-secondary"}`}
            >
                <svg
                    className="w-5 h-5 stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </div>
            <div>
                <p className={`${selected ? "text-riot-red" : ""}`}>{name}</p>
                <p className="text-text-accent text-sm">{note}</p>
            </div>
        </div>
    );
}
