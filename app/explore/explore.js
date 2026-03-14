'use client'
import MapView from '@/components/MapView'
import DashboardCards from '@/components/DashboardCards'
import YearSlider from '@/components/YearSlider'


export default function ExplorePage() {
return (
<div className="p-6 space-y-6">
<DashboardCards />
<YearSlider />
<MapView />
</div>
)
}