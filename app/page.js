export default function Home() {
return (
<main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 to-black text-white">
    <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Climate Co-Benefits Explorer</h1>
        <p className="text-lg text-gray-300 mb-8">
        Exploring health, population and environmental co-benefits across UK small areas.
        </p>
        <div className="flex gap-4 justify-center">
            <a href="/story" className="px-6 py-3 bg-emerald-500 rounded-xl font-semibold">Read Story</a>
            <a href="/explore" className="px-6 py-3 bg-sky-600 rounded-xl font-semibold">Explore Map</a>
        </div>
    </div>
</main>
)
}