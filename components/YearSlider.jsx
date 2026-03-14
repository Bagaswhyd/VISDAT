'use client'
import { useState } from 'react'


export default function YearSlider() {
const [year, setYear] = useState(2021)


return (
<div className="bg-slate-800 p-4 rounded-xl">
<p className="mb-2">Year: {year}</p>
<input type="range" min="2011" max="2021" value={year} onChange={e => setYear(e.target.value)} />
</div>
)
}