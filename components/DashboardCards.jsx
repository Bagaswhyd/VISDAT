export default function DashboardCards() {
const stats = [
{ label: 'Avg Population', value: '1,850' },
{ label: 'Avg Households', value: '620' },
{ label: 'Local Authorities', value: '300+' }
]


return (
<div className="grid grid-cols-3 gap-4">
{stats.map((s, i) => (
<div key={i} className="bg-slate-800 p-4 rounded-xl">
<p className="text-gray-400 text-sm">{s.label}</p>
<p className="text-2xl font-bold">{s.value}</p>
</div>
))}
</div>
)
}