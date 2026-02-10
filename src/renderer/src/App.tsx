import Sidebar from "./components/Sidebar";

export default function App() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1">
                    <p>Main content</p>
                </div>
            </div>
        </>
    );
}
