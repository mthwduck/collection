export default function AccountTab() {
    return (
        <div className="group flex items-center justify-start h-18 text-white hover:bg-accent">
            <div className="rounded-full bg-accent w-10 h-10 ml-6 mr-3 group-hover:bg-secondary flex justify-center items-center">
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
                <p className="mb-1">Account Name</p>
                <p className="text-text-accent text-sm">Note</p>
            </div>
        </div>
    );
}
